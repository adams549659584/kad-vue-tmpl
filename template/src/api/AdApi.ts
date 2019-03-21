import { IAdView } from './viewModel/Ad/IAdView';
import { BaseApi } from '@kad2.0/kad-core';
import { IGetAdListParams } from './viewModel/Ad/IGetAdListParams';
/**
 * 广告相关接口
 */
export default class AdApi extends BaseApi {
  /**
   *
   * @param params 获取多广告位发布接口参数
   */
  static getAdList(params: IGetAdListParams) {
    const uri = `/Ad/GetList`;
    return super.post<IAdView>(uri, params);
  }
}
