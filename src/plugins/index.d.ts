import Vue, { VueConstructor } from 'vue';
import { AxiosInstance } from 'axios';
import { Message } from 'iview'

declare global {
  interface Window {
    axios: AxiosInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance,
    $Message: Message
  }
  interface VueConstructor {
    $axios: AxiosInstance,
    $Message: Message
  }
}
