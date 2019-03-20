import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
// import { NodeConfig } from '@kad2.0/kad-core';

Vue.use(Vuex);

const plugins = [];
// if (!NodeConfig.isNodeProd) {
// 日志调试插件 logger 插件会生成状态快照，所以仅在开发环境使用
plugins.push(createLogger({}));
// }

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins
});
