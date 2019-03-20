import store from '@/store';
import { Module, VuexModule, getModule, MutationAction } from 'vuex-module-decorators';
import { AdView } from '@/api/viewModel/Ad/AdView';
import AdApi, { IGetAdListParams } from '@/api/AdApi';

/**
 * State 定义
 *
 * @export
 * @interface IAdState
 */
export interface IAdState {
  AdView: AdView;
}

@Module({
  namespaced: true,
  name: 'AdModule',
  store,
  dynamic: true
})
class AdModule extends VuexModule implements IAdState {
  AdView: AdView = {};

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
