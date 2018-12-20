<template>
  <div class="welcome">
    <img alt="Vue logo" src="../assets/logo.png">
    <Button type="primary" @click="handleClickButton">{{ buttonText }}</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import config from '@/config/config'

@Component
export default class Welcome extends Vue {
  private timeout!: number
  private currentTime!: number
  private intervalCode!: number

  constructor() {
    super()
    this.timeout = config.welcomePageInterval
    this.currentTime = this.timeout
  }

  // computed
  private get time(): number {
    return Math.ceil(this.currentTime / 1000)
  }

  private get buttonText(): string {
    return `( ${this.time} ) jump`
  }

  // methods
  public handleClickButton(): void {
    this.goHome()
    clearInterval(this.intervalCode)
  }

  private timeCount(): void {
    this.currentTime -= 1000
  }

  private goHome(): void {
    this.$router.push('/home')
  }

  // life circle
  private initPage(): void {
    this.intervalCode = setInterval(() => {
      if (this.currentTime > 0) {
        this.timeCount()
      } else {
        this.goHome()
        clearInterval(this.intervalCode)
      }
    }, 1000)
  }

  private mounted(): void {
    this.initPage()
  }
}
</script>
