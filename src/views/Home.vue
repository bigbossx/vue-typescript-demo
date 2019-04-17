<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Todo-list demo by Vue3.6 + TypeScript and draggable"/>
    <input-bar></input-bar>
    <div class="list-box">
      <todo-item></todo-item>
    </div>
    <todo-footer></todo-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import InputBar from '@/components/inputBar/InputBar'
import TodoItem from '@/components/todoItem/TodoItem'
import TodoFooter from '@/components/todoFooter/TodoFooter'

@Component({
  components: {
    HelloWorld,
    InputBar,
    TodoItem,
    TodoFooter
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
  .home{
    max-width: 750px;
    margin: 0 auto;
  }
  .list-box{
    border-radius: 5px;
  }
</style>
