<template>
  <div class="welcom">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import config from '@/config/config.js'
import router from '@/router';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Welcome extends Vue {
  private timeout!: number
  private currentTime!: number

  constructor() {
    super()
    this.timeout = config.welcomePageInterval
    this.currentTime = this.timeout
  }

  private get time() {
    return Math.ceil(this.currentTime / 1000)
  }

  private timeCount(): void {
    setInterval(() => {
      this.currentTime -= 1
    }, 1000)
  }

  private goHome(): void {
    this.$router.push('/home')
  }

  private initPage(): void {
    if (this.time > 0) {
      this.timeCount()
    } else {
      this.goHome()
    }
  }

  private mouted(): void {
    this.timeCount()
  }
}
</script>
