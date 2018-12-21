<template>
  <div class="card-list">
    <Card :padding="10">
      <Row type="flex" justify="space-between" align="middle">
        <Col :span="2">
          <Checkbox v-model="task.isCompleted" @on-change="handleClickCheckbox(task.id)" />
        </Col>
        <Col :span="22">
          <a href="javascript:void(0)" @click="handleClickTask(task.id)">
            <Row type="flex" justify="space-between" align="middle">
              <Col><span class="task-title">{{task.title}}</span></Col>
              <Col><span class="task-content">{{task.content}}</span></Col>
              <Col><span class="task-deadline">{{deadline}}</span></Col>
            </Row>
          </a>
        </Col>
      </Row>
      
      
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Vue } from 'vue-property-decorator'
import * as moment from 'moment-mini-ts'
import { Task } from '../model/interfaces'

@Component
export default class CardList extends Vue {
  // props
  @Prop() private task!: Task

  // data
  constructor() {
    super()
  }

  // watch
  // @Watch('path')
  // private handlePath<T>(val: T, oldVal: T) {}

  // computed
  private get deadline() {
    return moment.utc(this.task.deadline).format('YY/MM/DD')
  }

  // emits
  @Emit('on-click')
  private emitOnClickTask(id: number) {
    return id
  }

  @Emit('on-change')
  private emitOnChangeTask(id: number) {
    return id
  }

  // methods
  private handleClickTask(id: number) {
    this.emitOnClickTask(id)
  }

  private handleClickCheckbox(id: number) {
    this.emitOnChangeTask(id)
  }

  // private initPage() {}

  // // life cycle
  // private mounted() {
  //   this.initPage()
  // }
}
</script>

<style lang="less">
.card-list {
  a {
    color: inherit;
  }
  a:hover {
    color: inherit;
  }
  .task-title {
    font-weight: bold;
  }
}
</style>
