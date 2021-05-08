<template>
  <div class="w-1/2 mx-auto flex flex-col items-center">
    <h1 class="text-4xl text-gray-700 font-bold mb-12">#todo</h1>
    <div
      class="header relative text-sm flex justify-between font-semibold items-center text-gray-700 w-full"
    >
      <h4
        v-for="(tab, index) in tabs"
        :key="index"
        class="cursor-pointer relative"
        :class="{ activeTab: selectedTab === tab }"
        @click="selectedTab = tab"
      >
        {{ tab }}
      </h4>
    </div>
    <div
      class="all mt-6 w-full"
      v-show="selectedTab === 'All' || selectedTab === 'Active'"
    >
      <form class="flex justify-between items-center" @submit.prevent="addTodo">
        <input
          type="text"
          placeholder="add details"
          v-model="newTodo"
          class="border focus:outline-none rounded-lg p-3 w-3/4"
        />
        <button
          class="bg-blue-500 focus:outline-none font-semibold text-sm text-white py-3 px-6 rounded-lg"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul class="mt-3">
        <li
          class="flex items-center"
          v-for="(todo, index) in getTodos"
          :key="index"
        >
          <input
            type="checkbox"
            v-model="checkedTasks"
            class="checkbox mr-2 w-5 h-5"
          />
          <label class="text-black font-medium text-lg" for="checkbox">
            {{ todo.task }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tabs: ["All", "Active", "Completed"],
      selectedTab: "All",
      newTodo: "",
      checkedTasks: [],
    };
  },
  computed: {
    ...mapGetters(["getTodos"]),
  },
  methods: {
    addTodo() {
      if (this.todo != "") {
        const newTodo = {
          task: this.newTodo,
          active: true,
        };
        this.newTodo = "";
        this.$store.dispatch("addTodo", newTodo);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: "Raleway", sans-serif;
}
.header::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: -15%;
  width: 130%;
  height: 1px;
  background-color: #bdbdbd;
}
.activeTab::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: -20%;
  width: 150%;
  height: 4px;
  background-color: #2f80ed;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
</style>
