/* eslint-disable @typescript-eslint/no-explicit-any */
// Copyright (c) 2024 tong<admin>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { configurationItems } from '@/utils/config'
import request from '@/utils/request'

/**
 * @description：获取文章列表
 */
export function getArticleList(params?: object): any {
  return request.get(`${configurationItems.baseApi}/article/list`, params)
}
