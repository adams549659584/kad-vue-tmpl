export interface AdView {
  /**
   * 广告位编码
   */
  [key: string]: AdEnt[];
}

export interface AdEnt {
  /**
   * 广告位编码
   */
  AdPlaceId: string;

  /**
   * 排序(升序)
   */
  ADSort: number;

  /**
   * 开始时间 "/Date(1546823700000)/" 格式时间戳
   */
  BeginTime: string;

  /**
   * 创建时间 "/Date(1546823700000)/" 格式时间戳
   */
  CreateTime: string;

  /**
   * 广告介绍
   */
  Description: string;

  /**
   * 结束时间 "/Date(1546823700000)/" 格式时间戳
   */
  EndTime: string;

  /**
   * html代码
   */
  HtmlContent: string;

  /**
   * 广告编码
   */
  Id: string;

  /**
   * 链接
   */
  Link: string;

  /**
   * 广告名称
   */
  Name: string;

  /**
   * 链接图片
   */
  Pic: string;

  /**
   * 链接文字
   */
  Text: string;

  /**
   * 1-文字 2-图片 3-Html代码
   */
  Type: number;
}
