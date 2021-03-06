import loadPlugins from 'gulp-load-plugins';
import gulp from 'gulp';
import path from 'path';
import del from 'del';
import mergeStream from 'merge-stream';
import scriptConfig, { webpackConfig } from './config/templates';
import { getDirectories } from './utls';
import set from './config/set';
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
          sourceMapFilename: !set.prod ? `${file.replace('.tmp/src/', '')}.map` : null,
        },
        ...webpackConfig,
      }))
      .pipe(g.replaceTask({
        patterns: [{ json: set }] })
      )
      .pipe(gulp.dest('dist'));
    pagePipes.push(source);
  });

  return mergeStream(pagePipes);
}
export function babelHelper() {
  const file = global.changeJsFile || '';
  global.changeJsFile = null;
  return gulp.src([file || 'src/**/**/*.js', '!src/bower/**/*.*'])
    .pipe(g.preprocess({
      context: {
        DEBUG: set.debug,
        PROD: set.prod,
      },
    }))
    .pipe(g.babel({
      presets: scriptConfig.presets,
      plugins: ['transform-es2015-modules-commonjs',
        'transform-class-properties',
        'transform-es2015-parameters',
        'external-helpers-2',
        'syntax-decorators',
        ['ng-annotate-2', { keepClass: true }],
      ],
    }))
    .pipe(g.ngAnnotate())
    .pipe(g.babelExternalHelpers('babelHelpers.js'))
    .pipe(g.if(!set.debug && 'babelHelpers.js', g.uglify()))
    .pipe(g.if(!file && 'babelHelpers.js', gulp.dest('dist/')))
    .pipe(g.if(!file && '*.js', gulp.dest(path.join(tmp, 'src'))))
    .pipe(g.if('!babelHelpers.js', gulp.dest(path.join(tmp, path.dirname(file)))));
}

export function copyLib() {
  return gulp.src(['src/bower/**/*.js', 'src/local_lib/**/*.js', '!src/bower/**/src/**'],
    { base: 'src' })
    .pipe(gulp.dest('.tmp/src'))
    .pipe(g.if(set.debug, g.rename({
      extname: '.min.js',
    })))
    .pipe(g.debug())
    .pipe(gulp.dest('.tmp'));
}


export function concatTemplate() {
  const pages = getDirectories('dist/pages');
  const pageStreams = [];
  pages.forEach((page) => {
    pageStreams.push(gulp.src(`dist/pages/${page}/**/*.js`)
      .pipe(g.debug())
      .pipe(g.concat('index.js'))
      .pipe(gulp.dest(`dist/pages/${page}`))
    );
  });
  return mergeStream(pageStreams).on('end', function deleteTemplate() {
    del.sync('dist/pages/**/template.js');
  });
}
