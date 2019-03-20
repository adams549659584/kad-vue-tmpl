import Vue from 'vue';
import Router from 'vue-router';
import { RouteHelper, IKadRouteConfigs } from '@kad2.0/kad-core';

Vue.use(Router);

export const KadRouteConfigs: IKadRouteConfigs = {
  home: {
    isDev: true,
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  about: {
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/About.vue'),
    meta: {
      title: '关于'
    }
  }
};

const router = RouteHelper.initRoutes('vue_common_m', KadRouteConfigs);
export default router;
