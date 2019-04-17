<template>
  <div style="display: flex;padding-bottom: 20px">
    <input style="padding:20px 10px;flex: 3;margin-right: 20px" placeholder="what needs to be done?" v-model="inputValue"
           @keypress.enter="handleSave" />
    <button style="flex: 1" @click="handleSave">yes!</button>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  import {
    Action
  } from 'vuex-class'

  @Component
  export default class InputBar extends Vue {
    @Action('addToList') actionAddToList: (data) => void
    inputValue: string = ''

    handleSave () {
      if (this.inputValue === '') return false
      let listItem = {
        id: new Date().getTime(),
        status: false,
        title: this.inputValue
      }
      this.actionAddToList(listItem)
      this.inputValue = ''
    }
  }
</script>
<style lang="scss">
  input{
    outline: none;
    border: none;
    border: 2px solid #33bf4f;
    color: #33bf4f;
    font-size: 30px;
    border-radius: 5px;
  }
  ::placeholder { /* Firefox, Chrome, Opera */
    color: #33bf4f;
  }
  button{
    outline: none;
    border: none;
    background: #33bf4f;
    color: white;
    font-size: 30px;
    border-radius: 10px;
    border: 2px solid #33bf4f;
  }

</style>
