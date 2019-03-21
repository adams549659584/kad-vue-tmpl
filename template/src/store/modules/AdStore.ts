import store from '@/store';
import { Module, VuexModule, getModule, MutationAction } from 'vuex-module-decorators';
import { IAdView } from '@/api/viewModel/Ad/IAdView';
import AdApi from '@/api/AdApi';
import { IGetAdListParams } from '@/api/viewModel/Ad/IGetAdListParams';

/**
 * State 定义
 *
 * @export
 * @interface IAdState
 */
export interface IAdState {
  AdView: IAdView;
}

@Module({
  namespaced: true,
  name: 'AdModule',
  store,
  dynamic: true
})
class AdModule extends VuexModule implements IAdState {
  AdView: IAdView = {};

  @MutationAction
  async getAdList(params: IGetAdListParams) {
    const apiResult = await AdApi.getAdList(params);
    if (apiResult.Result) {
      const result: Partial<IAdState> = {
        AdView: apiResult.Data
      };
      return result;
    } else {
      alert(apiResult.Message);
    }
  }
}

const AdStore = getModule(AdModule);
export default AdStore;
