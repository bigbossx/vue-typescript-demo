import * as types from './../mutation-types'
import {Commit} from "vuex";

export interface ListItem {
  id: number,
  title: string,
  status: boolean,
}

export interface State {
  todo_list: Array<ListItem>,
  mode: string
}


// initial state
const initState = {
  todo_list: [],
  mode: "ALL"
}

// getters
const getters = {
  getLists: (state: State) => {
    switch (state.mode) {
      case "ALL":
        return state.todo_list
      case "ACTIVE":
        return state.todo_list.filter(item => !item.status)
      case "COMPLETED":
        return state.todo_list.filter(item => item.status)
    }
  },
  getMode: (state: State) => {
    return state.mode
  }
}

// actions
const actions = {
  addToList(context: { commit: Commit, state: State }, data: ListItem): void {
    context.commit(types.ADD_TO_LIST, data)
  },
  deleteItem(context: { commit: Commit, state: State }, id: number): void {
    context.commit(types.DELETE_ITEM, id)
  },
  changeMode(context: { commit: Commit, state: State }, mode: string): void {
    context.commit(types.CHANGE_MODE, mode)
  },
  clearCompleted(context: { commit: Commit, state: State }): void {
    context.commit(types.CLEAR_COMPLETED)
  },

}

// mutations
const mutations = {
  [types.ADD_TO_LIST](state: State, payload: ListItem): void {
    state.todo_list.unshift(payload)
  },
  [types.DELETE_ITEM](state: State, payload: number): void {
    state.todo_list = state.todo_list.filter(item => item.id !== payload)
  },
  [types.CHANGE_MODE](state: State, payload: string): void {
    state.mode = payload
  },
  [types.CLEAR_COMPLETED](state: State): void {
    state.todo_list = state.todo_list.filter(item => !item.status)
  },
}

export default {
  state: initState,
  getters,
  actions,
  mutations,
}
