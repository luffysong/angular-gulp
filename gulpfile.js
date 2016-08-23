import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import proxy from 'http-proxy-middleware';
import lazypipe from 'lazypipe';
import scriptConfig from './build/config/templates.js';
import { babelHelper,
  buildTemplates,
  concatTemplate,
  copyLib,
  scripts,
  prod,
  style,
  set,
  proxyConfig,
} from './build';
const g = loadPlugins();
gulp.task('buildTemplates', buildTemplates);
gulp.task('babel-helper', babelHelper);
gulp.task('style', function buildStyle() {
  return style('src/styles/*.less', 'dist/styles');
});

gulp.task('lint', () => gulp.src(['src/**/*.js', '!src/bower/**'])
  .pipe(g.eslint('.eslintrc.js'))
  .pipe(g.eslint.format())
  .pipe(g.eslint.failAfterError())
);

gulp.task('scripts', ['babel-helper'], scripts);

gulp.task('watch', function watch() {
  gulp.watch(['src/**/*.js'], ['scripts']);
  gulp.watch(['src/styles/*.less'], ['style']);
  gulp.watch(['src/svgs/*.svg'], ['iconfont']);
  gulp.watch(['src/*.html', 'src/header/*.html', 'src/footer/*.html'], ['dev:html']);
});

gulp.task('clean', function clean() {
  return gulp.src(['.tmp', 'dist']).pipe(g.clean({ read: false }));
});

gulp.task('prod', function runSquence() {
  return runSequence('clean', 'lint', ['scripts', 'buildTemplates', 'iconfont'], 'concatTemplate',
    'prod:html', 'hash-replace');
});

gulp.task('copy:images', function copyImages() {
  return gulp.src('src/images/**/*.*', { base: 'src' })
    .pipe(g.rev())
    .pipe(gulp.dest('dist'))
    .pipe(g.rev.manifest())
    .pipe(gulp.dest('.tmp'));
});

gulp.task('copy:lib', copyLib);

gulp.task('hash-replace', function hashReplace() {
  runSequence('copy:images', function revReplace() {
    const manifest = gulp.src('.tmp/rev-manifest.json');
    const jsFilter = g.filter(['dist/pages/**/*.js'], { restore: true });
    return gulp.src(['dist/**/*.*', '!dist/lib/**/*.*', '!dist/common/**/*.*'], { base: 'dist' })
      .pipe(jsFilter)
      .pipe(g.rev())
      .pipe(g.revDeleteOriginal())
      .pipe(jsFilter.restore)
      .pipe(g.revReplace({
        prefix: prod.cdn,
      }))
      .pipe(g.revReplace({
        prefix: prod.cdn,
        manifest,
      }))
      .pipe(gulp.dest('dist'));
  });
});

gulp.task('concatTemplate', concatTemplate);


gulp.task('prod:html', ['header:style', 'style'], function html() {
  return gulp.src(['src/*.html'])
    .pipe(g.fileInclude())
    .pipe(g.replaceTask({
      patterns: [{
        json: set,
      }],
    }))
    .pipe(g.useref({
      searchPath: ['dist', 'src'],
    },
    lazypipe.pipe(g.if(set.prod && '!*.min.js', g.uglifyjs())
    )))
    .pipe(g.if('!*.html', g.rev()))
    .pipe(g.revReplace({
      prefix: prod.cdn,
    }))
    .pipe(g.if(!set.debug && '*.html', g.htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      processScripts: ['text/ng-template'],
    })))
    .pipe(gulp.dest(scriptConfig.out));
});


gulp.task('header:style', function buildStyle() {
  return style('src/header/index.less', '.tmp/header');
});

gulp.task('dev:html', ['header:style'], function devhtml() {
  return gulp.src('src/*.html')
    .pipe(g.fileInclude())
    .pipe(g.replaceTask({
      patterns: [{
        json: set,
      }],
    }))
    .pipe(gulp.dest(scriptConfig.out));
});

const fontName = 'krDataFont';
gulp.task('iconfont', function iconFont() {
  return gulp.src(['src/svgs/*.svg'])
    .pipe(g.iconfontCss({
      fontName,
      path: 'build/iconTemplate.css',
      targetPath: 'font.css',
      fontPath: '/fonts/',
    }))
    .pipe(g.iconfont({
      fontName,
      prependUnicode: false,
      formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
    }))
    .pipe(g.rename({
      dirname: 'fonts',
    }))
    .pipe(g.if(set.prod && '!**/*.css', g.rev()))
    .pipe(g.revReplace({
      prefix: prod.cdn,
    }))
    .pipe(g.if(!set.debug && '**/*.css', g.cssnano({
      safe: true,
    })))
    .pipe(gulp.dest('dist'));
});

function middleware() {
  return proxyConfig.proxy.map(function mapProxy(config) {
    return proxy(config.path, {
      changeOrigin: true,
      target: config.target,
    });
  });
}
gulp.task('serve', () => {
  runSequence('clean', ['scripts', 'style', 'dev:html', 'watch', 'iconfont', 'copy:lib'],
    function serve() {
      g.connect.server({
        root: ['dist', '.tmp', 'src'],
        port: 4242,
        livereload: false,
        middleware,
      });
    });
});

