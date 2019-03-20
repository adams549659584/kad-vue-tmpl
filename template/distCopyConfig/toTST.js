const rm = require('rimraf');
const config = require('./index');

const resToPath = '\\\\192.168.1.21\\Kad2.0测试环境\\Kad.WEB\\skin\\{{siteId}}script\\vue\\{{cmsViewName}}';

rm(resToPath, err => {
  if (err) throw err;
  console.log('已删除测试资源站旧文件');
  config.exists(config.resFromPath, resToPath, config.copy, function () {
    console.log('已复制到测试资源站');
  });
});