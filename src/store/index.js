import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTodos: [],
  },
  getters: {
    getTodos: (state) => {
      return state.allTodos;
    },
  },
  mutations: {
    addTodo: (state, payload) => {
      state.allTodos.push(payload);
    },
  },
  actions: {
    addTodo: (context, payload) => {
      context.commit("addTodo", payload);
    },
  },
  modules: {},
});
