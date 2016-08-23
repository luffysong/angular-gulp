import webpack from 'webpack';
import _ from 'lodash';
import set from './set';
export default {
  base: 'src',
  getPrefix(url) {
    if (_.isObject(url)) {
      return url.prefix || url.replace(this.base, '');
    }
    return url.replace(this.base, '');
  },
  out: 'dist',
  tmp: '.tmp',
  presets: set.debug ? [] : ['es2015'],
  pages: 'src/pages',
  commonScript: 'src/common/index.js',
};

// webpackPlugins start
const webpackPluginsProd = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
  }),
];

const webpackPluginsDebug = [];
const webpackPluginsCommon = [];

// webpackPlugins end

function getWebackPulgins() {
  return webpackPluginsCommon.concat(set.debug ? webpackPluginsDebug : webpackPluginsProd);
}

const webpackConfig = {
  plugins: getWebackPulgins(),
  externals: {
    krData: 'krData',
  },
  devtool: 'source-map',
};

export {
  webpackConfig,
};

