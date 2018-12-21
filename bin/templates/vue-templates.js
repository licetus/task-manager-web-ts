const upperCamelCase = require('uppercamelcase')

class Template {
  constructor(fileName) {
    this.buffer =
`<template>
  <div class="${fileName}">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

@Component
export default class ${upperCamelCase(fileName)} extends Vue {
  // props
  @Prop() private prop!: number

  // data
  constructor() {
    super()
  }

  // watch
  // @Watch('path')
  // private handlePath<T>(val: T, oldVal: T) {}

  // computed
  private get computed() { return }

  // methods
  private initPage() {}

  // life cycle
  private mounted() {
    this.initPage()
  }
}
</script>

<style scoped lang="less">
</style>
`
  }
}

module.exports = { Template }
