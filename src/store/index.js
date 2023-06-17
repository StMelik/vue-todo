import { LOCAL_STORAGE_TODO_LIST_KEY } from '@/constants';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const updateLocalTodoList = (todoList) => {
  localStorage.setItem(LOCAL_STORAGE_TODO_LIST_KEY, JSON.stringify(todoList));
}

export default new Vuex.Store({
  state: {
    todoList: []
  },

  getters: {
    todoList(state) {
      return state.todoList
    }
  },

  mutations: {
    addTodo(state, text) {
      const newTodo = {
        id: Date.now(),
        editable: false,
        text
      };

      state.todoList.push(newTodo);

      updateLocalTodoList(state.todoList);
    },

    editTodo(state, id) {
      const todoItem = state.todoList.find((todo) => todo.id === id);

      todoItem.editable = true;
    },

    saveEditableTodo(state, text) {
      const editableTodo = state.todoList.find((todo) => todo.editable);

      editableTodo.text = text;
      editableTodo.editable = false;

      updateLocalTodoList(state.todoList);
    },

    deleteTodo(state, id) {
      state.todoList = state.todoList.filter((todo) => todo.id !== id);

      updateLocalTodoList(state.todoList);
    },

    setTodoList(state, todoList) {
      state.todoList = todoList;
    }
  },

  actions: {
    initTodoList({ commit }) {
      const localTodoList = localStorage.getItem(LOCAL_STORAGE_TODO_LIST_KEY);

      if (localTodoList) {
        commit('setTodoList', JSON.parse(localTodoList));
      }
    }
  }
});
