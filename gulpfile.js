import gulp from 'gulp';
import Promise from 'promise';
import loadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import proxy from 'http-proxy-middleware';
import lazypipe from 'lazypipe';
import scriptConfig from './build/config/templates.js';
import mkfont from './build/mkfont';
import { babelHelper,
  buildTemplates,
  concatTemplate,
  copyLib,
  server,
  scripts,
  prod,
  style,
  set,
  proxyConfig,
  jsplugins,
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
  gulp.watch(['src/**/*.js'], function jsFileChange(file) {
    global.changeJsFile = file.path.replace(`${process.cwd()}/`, '');
    runSequence('scripts');
  });
  gulp.watch(['src/styles/**/*.less', 'src/pages/**/*.less', 'src/common/**/*.less'], ['style']);
  gulp.watch(['src/svgs/**/*.svg'], ['iconfont']);
  gulp.watch(['src/*.html', 'src/header/*.html',
    'src/footer/*.html',
    'src/pages/**/*.html',
    'src/header/*.less'],
    ['dev:html']);
});

gulp.task('clean', function clean() {
  return gulp.src(['.tmp', 'dist']).pipe(g.clean({ read: false }));
});

gulp.task('prod', function runSquence() {
  return runSequence('clean', ['scripts', 'buildTemplates', 'iconfont'], ['hash-replace'],
    'concatTemplate',
    'prod:html', 'prod:clean-unused');
});

gulp.task('prod:clean-unused', function cleanUnused() {
  gulp.src(['dist/common', 'dist/babelHelpers.js'])
    .pipe(g.clean());
});

gulp.task('copy:images', function copyImages() {
  return gulp.src('src/images/**/*.*', { base: 'src' })
    .pipe(g.rev())
    .pipe(gulp.dest('dist'))
    .pipe(g.rev.manifest())
    .pipe(gulp.dest('.tmp'));
});

gulp.task('copy:lib', copyLib);

gulp.task('server', server);

gulp.task('copy:jsplugins', function copyJsplugins() {
  const jspluginsInSrc = jsplugins.map((file) => `src/${file}`);
  const jsFilter = g.filter(['**/*.js', '!**/*.min.js'], { restore: true });
  return gulp.src(jspluginsInSrc, { base: 'src' })
    .pipe(jsFilter)
    .pipe(g.if(set.prod, g.uglify()))
    .pipe(jsFilter.restore)
    .pipe(gulp.dest('dist'));
});

gulp.task('hash-replace', function hashReplace() {
  runSequence(['copy:images', 'copy:jsplugins'], function revReplace() {
    const manifest = gulp.src('.tmp/rev-manifest.json');
    const jsFilter = g.filter(['dist/pages/**/*.js', 'dist/bower/**/*.js', 'dist/local_lib/**/*.*',
      'dist/bower/**/*.css', 'dist/fonts/krDataFont.*'],
      { restore: true });
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
  let jsFilter = null;
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
    lazypipe()
      .pipe(() => {
        jsFilter = g.filter(['src/**/*.js', '!src/**/*.min.js'], { restore: true });
        return jsFilter;
      })
      .pipe(g.uglify)
      .pipe(() => jsFilter.restore)
    ))
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

gulp.task('iconfont', function iconFont() {
  return new Promise(mkfont);
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
        port: 4243,
        livereload: false,
        middleware,
      });
    });
});

gulp.task('proxy', () => {
  g.connect.server({
    root: ['dist', '.tmp', 'src'],
    port: 4243,
    livereload: false,
    middleware,
  });
});

