import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import errorParser from './error-parser'
import state from '../store/state'

interface InstanceOption {
  authenticated: boolean
  upload: boolean
}
class Instance {
  public instance: AxiosInstance
  private option: InstanceOption
  private config: AxiosRequestConfig

  constructor(option: InstanceOption) {
    this.option = option
    this.config = {
      baseURL: state.apiHost(),
      timeout: this.option.upload ? state.uploadInterval() : state.httpRequestInterval(),
      headers: this.option.authenticated ? { 'X-Auth-Key': sessionStorage.getItem('token') } : {},
      validateStatus: () => true, // TODO: Add validater
    }
    this.instance = axios.create(this.config)
    this.instance.interceptors.response.use(errorParser)
  }
}

const createAuthInstance = new Instance({ authenticated: true, upload: false }).instance
const createUploadInstance = new Instance({ authenticated: true, upload: true }).instance

export {
  createAuthInstance,
  createUploadInstance,
}
