import loadPlugins from 'gulp-load-plugins';
import gulp from 'gulp';
import scriptConfig, { webpackConfig } from './config/templates';
import path from 'path';
import { getDirectories } from './utls';
import set from './config/set';
import mergeStream from 'merge-stream';
const tmp = scriptConfig.tmp;
const g = loadPlugins();

export default function scrtips() {
  let pages = getDirectories(scriptConfig.pages);
  pages = pages.map((file) => path.join(tmp, scriptConfig.pages, file, 'index.js'));
  pages.push(path.join(scriptConfig.tmp, scriptConfig.commonScript));
  const pagePipes = [];
  pages.forEach(function buildAppPipes(file) {
    const source = gulp.src(file)
      .pipe(g.webpack({
        output: {
          filename: file.replace('.tmp/src/', ''),
          sourceMapFilename: `${file.replace('.tmp/src/', '')}.map`,
        }, ...webpackConfig,
      }))
      .pipe(g.replaceTask({
        patterns: [{ json: set }] })
      )
      .pipe(gulp.dest('dist'));
    pagePipes.push(source);
  });

  return mergeStream(pagePipes)
    .pipe(g.connect.reload());
}
export function babelHelper() {
  return gulp.src(['src/**/**/*.js', '!src/bower/**/*.*'])
    .pipe(g.preprocess({
      context: {
        DEBUG: set.debug,
        PROD: set.prod,
      },
    }))
    .pipe(g.babel({
      presets: scriptConfig.presets,
      plugins: ['transform-es2015-modules-commonjs', 'external-helpers-2',
        'syntax-decorators',
        ['ng-annotate-2', { keepClass: true }],
      ],
    }))
    .pipe(g.ngAnnotate())
    .pipe(g.babelExternalHelpers('babelHelpers.js'))
    .pipe(g.if(!set.debug && 'babelHelpers.js', g.uglify()))
    .pipe(g.if('babelHelpers.js', gulp.dest('dist/')))
    .pipe(g.if('*.js', gulp.dest(path.join(tmp, 'src'))));
}
