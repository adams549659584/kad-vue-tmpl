import { AdView } from './viewModel/Ad/AdView';
import { BaseApi } from '@kad2.0/kad-core';

/**
 * 获取广告位发布接口参数
 */
export interface IGetAdListParams {
  /**
   * 广告位编码集合
   */
  adSplaceList: string[];
}

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
    return super.post<AdView>(uri, params);
  }
}
