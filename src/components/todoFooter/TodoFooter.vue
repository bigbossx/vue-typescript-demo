<template>
  <div style="display: flex;justify-content: space-around;padding: 10px">
    <span style="flex: 1"><span style="color: red">{{activeTotal}}</span> items left</span>
    <div style="flex:4;display: flex;justify-content: center;">
      <span style="padding: 5px 15px;" @click="changeMode('ALL')" v-bind:class="{active:mode==='ALL'}" >all</span>
      <span style="padding: 5px 15px;" @click="changeMode('ACTIVE')" v-bind:class="{active:mode==='ACTIVE'}">active</span>
      <span style="padding: 5px 15px;" @click="changeMode('COMPLETED')" v-bind:class="{active:mode==='COMPLETED'}">completed</span>
    </div>
    <a style="flex: 1" @click="clearCompleted">clear completed</a>
  </div>
</template>
<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {
    Getter,
    Action
  } from 'vuex-class'
  import { ListItem } from './../../store/todo-list/todolist.store'

  @Component
  export default class TodoFooter extends Vue {
    @Getter('getLists') lists: ListItem[]
    @Getter('getMode') mode:string
    @Action('changeMode') actionChangeMode: (mode) => void
    @Action('clearCompleted') actionClearCompleted: () => void
    get activeTotal (): number {
      return this.lists.filter(item => !item.status).length
    }

    changeMode (mode) {
      this.actionChangeMode(mode)
    }
    clearCompleted () {
      this.actionClearCompleted()
    }

  }
</script>
<style lang="scss">
  .active{
    border-radius: 5px;
    background: #33bf4f;
    color: #fff;
  }
</style>
