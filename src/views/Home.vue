<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to Task Manager</h1>
    <Button type="primary" @click="handleClickButtonAdd" long>New Task</Button>
    <div class="content">
      <Spin v-if="isListing"></Spin>
      <template v-for="(item, key) of taskList">
        <CardList :task="item" :key="key"></CardList>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CardList from '../components/card-list.vue'
import api from '../facades/api'
import { Task } from '../model/interfaces'
import { errorHandler } from '../utils'

@Component({
  components: {
    CardList,
  },
})
export default class Home extends Vue {
  private isListing: boolean

  private currentTask: Task
  private taskList: Task[]


  constructor() {
    super()
    this.isListing = false

    this.currentTask = {
      id: 0,
      isCompleted: false,
      title: '',
      content: '',
      deadline: 0,
    }
    this.taskList = []
  }

  private handleClickButtonAdd(): void {
    const a = 'a'
  }

  private async getTaskList() {
    try {
      const res = await api.task.getList()
      if (res.items.length > 0) {
        this.taskList = res.items
      }
      this.isListing = false
    } catch (error) {
      this.isListing = false
      errorHandler(error)
    }
  }

  private initPage() {
    this.isListing = true
    this.getTaskList()
  }

  private mounted() {
    this.initPage()
  }
}
</script>

<style lang="less">
</style>