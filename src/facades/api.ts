import qs from 'querystringify'
import { CancelToken, CancelTokenSource, AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios'
import { createAuthInstance, createUploadInstance } from './base'
import { Task, RequestQuery } from '../model/interfaces'

class Api {
  public add: (data: Task) => any
  public delete: (id: number) => any
  public update: (data: Task, id: number) => any
  public get: (id: number) => any
  public getList: (query?: RequestQuery) => any

  constructor(requestName: string) {
    this.add = async (data: Task) => {
      return createAuthInstance.post(requestName, data).then((res) => res.data)
    }
    this.delete = async (id: number) => {
      return createAuthInstance.delete(`${requestName}/${id}`).then((res) => res.data)
    }
    this.update = async (data: Task, id: number) => {
      return createAuthInstance.patch(`${requestName}/${id}`, data).then((res) => res.data)
    }
    this.get = async (id: number) => {
      return createAuthInstance.get(`${requestName}/${id}`).then((res) => res.data)
    }
    this.getList = async (query?: RequestQuery) => {
      const str = query ? `?${qs.stringify(query)}` : ''
      return createAuthInstance.get(`${requestName}${str}`).then((res) => res.data)
    }
  }
}

const api = {
  task: new Api('task'),
}

export default api
