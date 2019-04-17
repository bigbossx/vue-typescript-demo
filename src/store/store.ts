import Vue from 'vue'
import Vuex from 'vuex'
import TodoList from "./todo-list/todolist.store"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version:"0.0.1"
  },
  mutations: {

  },
  actions: {

  },
  modules:{
    TodoList
  }
})
