<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to Task Manager</h1>
    <Button type="primary" @click="handleClickButtonAdd" :loading="isLoading" long>New Task</Button>
    <div class="content">
      <Spin v-if="isListing"></Spin>
      <template v-for="(item, key) of taskList">
        <CardList :task="item" :key="key" @on-click="handleClickTask" @on-change="handleClickCheckbox"></CardList>
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
  private isLoading: boolean

  private currentTask: Task
  private taskList: Task[]


  constructor() {
    super()
    this.isListing = false
    this.isLoading = false

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
    console.log('add')
  }

  private handleClickTask(id: number): void {
    if (!this.isLoading) {
      this.isLoading = true
      this.getTask(id)
      console.log('task: ', this.currentTask)
    }
  }

  private handleClickCheckbox(id: number): void {
    console.log('check: ', id)
  }

  private async addTask(task: Task) {
    try {
      const res = await api.task.add(task)
      if (typeof res === 'number') {
        this.$Message.success('create new task successfully!')
      }
      this.isLoading = false
    } catch (error) {
      this.isLoading = false
      errorHandler(error)
    }
  }

  private async deleteTask(id: number) {
    try {
      const res = await api.task.delete(id)
      if (res === 204) {
        this.$Message.success('delete task successfully!')
      }
      this.isLoading = false
    } catch (error) {
      this.isLoading = false
      errorHandler(error)
    }
  }

  private async updateTask(task: Task, id: number) {
    try {
      const res = await api.task.update(task, id)
      if (res === 204) {
        this.$Message.success('modify task successfully!')
      }
      this.isLoading = false
    } catch (error) {
      this.isLoading = false
      errorHandler(error)
    }
  }

  private async getTask(id: number) {
    try {
      const res = await api.task.get(id)
      this.currentTask = res
      this.isLoading = false
    } catch (error) {
      this.isLoading = false
      errorHandler(error)
    }
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