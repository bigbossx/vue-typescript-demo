<template>
  <div>
    <draggable v-model="draggleList" group="people" @start="drag=true" @end="drag=false">
      <div :class="[{item,done:item.status}]" v-for="item of draggleList" :key="item.id">
        <input type="checkbox" v-model="item.status" />
        <span style="flex: 8">{{item.title}}</span>
        <span style="flex: 1" @click="deleteItem(item.id)">X</span>
      </div>
    </draggable>
  </div>
</template>
<script lang="ts">

  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {ListItem} from './../../store/todo-list/todolist.store'
  import draggable from 'vuedraggable'
  import {
    Getter,
    Action
  } from 'vuex-class'

  @Component({
    components: {
      draggable
    },
    watch: {
      lists () {
        this.draggleList = this.lists
      }
    }
  })
  export default class TodoItem extends Vue {
    @Getter('getLists') lists: ListItem[]
    @Action('deleteItem') actionDeleteItem: (id: number) => void
    draggleList=[]
    deleteItem (id: number) {
      this.actionDeleteItem(id)
    }

  }
</script>
<style lang="scss">
  .item{
    display: flex;
    padding: 10px;
    font-size: 20px;
    justify-content: space-around;
    background-image: linear-gradient(45deg,#0cf528,#35495e);
    background-repeat: repeat-x;
    color: white;
    border-bottom: 1px solid #fff;
    border-radius: 5px;
  }
  .done{
    background: #b1a9a9 !important;
    text-decoration: line-through;
  }
</style>
