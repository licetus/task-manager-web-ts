import config from '../config/config'

const state = {
  host(): string {
    switch (process.env.NODE_ENV) {
      case 'development':
        return config.localHost
      case 'production':
        return config.serverHost
      default: return config.localHost
    }
  },

  apiHost(): string {
    switch (process.env.NODE_ENV) {
      case 'development':
        return config.localApiHost
      case 'production':
        return config.serverApiHost
      default: return config.localApiHost
    }
  },

  httpRequestInterval(): number {
    return config.httpRequestInterval
  },

  uploadInterval(): number {
    return config.uploadInterval
  },
}

export default state
