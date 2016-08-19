import fs from 'fs';
import path from 'path';

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file =>
    fs.statSync(path.join(srcpath, file)).isDirectory()
  );
}

export {
  getDirectories,
};
