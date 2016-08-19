import loadPlugins from 'gulp-load-plugins';
import gulp from 'gulp';
import LessAutoprefix from 'less-plugin-autoprefix';
import set from './config/set';
const g = loadPlugins();
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

export default function style() {
  return gulp.src(['src/styles/*.less'])
    .pipe(g.if(set.debug, g.sourcemaps.init()))
    .pipe(g.less({
      plugins: [autoprefix],
    }))
    .pipe(g.if(set.debug, g.sourcemaps.write()))
    .pipe(g.if(!set.debug, g.cssnano({
      safe: true,
    })))
    .pipe(gulp.dest('dist/styles'));
}
