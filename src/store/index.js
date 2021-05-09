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
    runCheck: (state, payload) => {
      state.allTodos.forEach((todo) => {
        if (todo.task === payload) {
          todo.active = !todo.active;
        }
      });
    },
    delTask: (state, payload) => {
      state.allTodos.forEach((item, index) => {
        if (item.task === payload) {
          state.allTodos.splice(index, 1);
        }
      });
    },
    clearTab: (state) => {
      state.allTodos = state.allTodos.filter((todo) => todo.active === true);
    },
  },
  actions: {
    addTodo: (context, payload) => {
      context.commit("addTodo", payload);
    },
    runCheck: (context, payload) => {
      context.commit("runCheck", payload);
    },
    delTask: (context, payload) => {
      context.commit("delTask", payload);
    },
    clearTab: (context) => {
      context.commit("clearTab");
    },
  },
  modules: {},
});
