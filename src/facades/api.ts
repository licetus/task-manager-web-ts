import qs from 'querystringify'
import { CancelToken, CancelTokenSource, AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios'
import { createAuthInstance, createUploadInstance } from './base'
import { RequestQuery } from '../model/interfaces'

class Api {
  public add: (data: object) => AxiosPromise
  public delete: (id: number) => AxiosPromise
  public update: (data: object, id: number) => AxiosPromise
  public get: (id: number) => AxiosPromise
  public getList: (query?: RequestQuery) => AxiosPromise

  constructor(requestName: string) {
    this.add = async (data: object) => {
      return createAuthInstance.post(requestName, data).then((res) => res.data)
    }
    this.delete = async (id: number) => {
      return createAuthInstance.delete(`${requestName}/${id}`).then((res) => res.data)
    }
    this.update = async (data: object, id: number) => {
      return createAuthInstance.patch(`${requestName}/${id}`, data).then((res) => res.data)
    }
    this.get = async (id: number) => {
      return createAuthInstance.get(`${requestName}/${id}`).then((res) => res.data)
    }
    this.getList = async (query?: RequestQuery) => {
      const str = query ? `?${qs.stringify(query)}` : ''
      return createAuthInstance.get(`${requestName}str`).then((res) => res.data)
    }
  }
}

const api = {
  task: new Api('task'),
}

export default api
