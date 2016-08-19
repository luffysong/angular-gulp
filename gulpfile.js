import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import scriptConfig from './build/config/templates.js';
import { babelHelper,
  buildTemplates,
  scripts,
  prod,
  style,
  set,
} from './build';
const g = loadPlugins();


gulp.task('buildTemplates', buildTemplates);
gulp.task('babel-helper', babelHelper);
gulp.task('style', style);
gulp.task('scripts', ['babel-helper'], scripts);

gulp.task('watch', function watch() {
  gulp.watch(['src/**/*.js'], ['scripts']);
  gulp.watch(['src/styles/*.less'], ['style']);
});

gulp.task('clean', function clean() {
  return gulp.src(['.tmp', 'dist']).pipe(g.clean({ read: false }));
});
gulp.task('prod', function runSquence() {
  return runSequence('clean', ['scripts', 'buildTemplates'], 'prod:html');
});
gulp.task('prod:html', function html() {
  return gulp.src('src/*.html')
    .pipe(g.useref({
      searchPath: ['src', 'dist'],
    }))
    .pipe(g.if('!*.html', g.rev()))
    .pipe(g.revReplace({
      prefix: prod.cdn,
    }))
    .pipe(g.if(set.prod && '*.html', g.htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      processScripts: ['text/ng-template'],
    })))
    .pipe(gulp.dest(scriptConfig.out));
});
gulp.task('serve', () => {
  runSequence('clean', ['scripts', 'style', 'watch'], function serve() {
    g.connect.server({
      root: ['dist', 'src'],
      port: 4242,
      livereload: false,
    });
  });
});

