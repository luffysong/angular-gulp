import loadPlugins from 'gulp-load-plugins';
import gulp from 'gulp';
import path from 'path';
import mergeStream from 'merge-stream';
import templateConfig from './config/templates';
import { getDirectories } from './utls';
const g = loadPlugins();

export default function buildTemplates() {
  const sources = [];
  const pages = getDirectories(templateConfig.pages)
    .map(dir => path.join(templateConfig.pages, dir));
  pages.forEach((template) => {
    const source = gulp.src(`${template}/**/*.html`)
      .pipe(g.htmlmin({
        removeComments: true,
        processScripts: ['text/ng-template'],
      }))
      .pipe(g.angularTemplatecache(`${templateConfig.getPrefix(template)}/template.js`, {
        standalone: true,
        module: template,
        transformUrl: url => path.join(templateConfig.getPrefix(template), url),
      }))
      .pipe(gulp.dest(templateConfig.out));
    sources.push(source);
  });
  return mergeStream(sources);
}
