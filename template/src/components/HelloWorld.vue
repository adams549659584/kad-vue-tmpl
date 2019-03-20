<template>
  <div>
    <div class="ads" v-if="adList">
      <a v-for="(ad,index) in adList" :href="ad.Link" :key="index">
        <img :src="ad.Pic" :alt="ad.Name">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdStore from '@/store/modules/AdStore';
import { ValidatorHelper } from '@kad2.0/kad-core';
import { Toast } from 'vant';

@Component({
  components: {}
})
export default class HelloWorld extends Vue {
  // 初始化数据
  topAdSplace = 'v_ad_ptIndex';

  // 计算属性
  /**
   * 广告列表
   */
  get adList() {
    const that = this;

    if (!ValidatorHelper.isEmpty(AdStore.AdView)) {
      const ads = AdStore.AdView[that.topAdSplace];
      return ads;
    }
    return null;
  }

  /**
   * 获取广告
   */
  async getAd() {
    const that = this;
    const adParams = {
      adSplaceList: [that.topAdSplace]
    };
    await AdStore.getAdList(adParams);
    Toast('广告加载成功!!!');
  }

  // vue生命周期
  created() {
    this.getAd();
  }
}
</script>


<style lang="less" scoped>
</style>