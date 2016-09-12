import loadPlugins from 'gulp-load-plugins';
import gulp from 'gulp';
import LessAutoprefix from 'less-plugin-autoprefix';
import set from './config/set';
const g = loadPlugins();
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
// 错误处理
function handler(err) {
  console.log(err);
  this.emit('end');
}
export default function style(globs, out) {
  return gulp.src(globs)
    .pipe(g.plumber({
      errorHandler: handler,
    }))
    .pipe(g.if(set.debug, g.sourcemaps.init()))
    .pipe(g.less({
      plugins: [autoprefix],
    }))
    .pipe(g.if(set.debug, g.sourcemaps.write()))
    .pipe(g.if(!set.debug, g.cssnano({
      safe: true,
    })))
    .pipe(g.plumber.stop())
    .pipe(gulp.dest(out));
}
