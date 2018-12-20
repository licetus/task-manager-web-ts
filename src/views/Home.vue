<template>
  <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Welcome to Task Manager</h1>
      <Button type="primary" @click="handleClickButtonAdd" long>New Task</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
})
export default class Home extends Vue {

  private handleClickButtonAdd(): void {
    const a = 'a'
  }
}
</script>

<style lang="less">
</style>