const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const baseUrl = (() => {
  switch (process.env.VUE_APP_DEPLOY_ENV) {
    case 'tst':
      return '//tstres.360kad.com/{{siteId}}script/vue/{{cmsViewName}}/';
    case 'rc':
      return '//rcres.360kad.com/{{siteId}}script/vue/{{cmsViewName}}/';
    case 'prod':
      return '//res.360kad.com/{{siteId}}script/vue/{{cmsViewName}}/';
    default:
      return '/';
  }
})();

function resolve(dir) {
  var fullPath = path.join(__dirname, dir);
  return fullPath;
}

module.exports = {
  publicPath: baseUrl,
  devServer: {
    open: true,
    host: 'dev{{siteId}}}.360kad.com',
    // port: '8080',
    proxy: 'http://tst{{siteId}}.360kad.com'
  },
  filenameHashing: false,
  // webpack目录别名alias
  // https://cli.vuejs.org/zh/guide/css.html#引用静态资源
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('Kpublic', resolve('public'));
  },
  //需编译的模块
  transpileDependencies: [
    'vuex-module-decorators'
  ]
}