<template>
  <ul v-show="selectedTab === 'Active'">
    <li
      class="flex mt-3 items-center"
      v-for="(todo, index) in getTodos"
      v-show="todo.active"
      :key="index"
    >
      <input
        type="checkbox"
        :value="todo.task"
        class="checkbox mr-2 w-5 h-5"
        :id="'todo' + index"
        @click="runCheck"
      />
      <label
        :class="{ 'line-through': !todo.active }"
        class="text-black font-medium text-lg"
        :for="'todo' + index"
      >
        {{ todo.task }}
      </label>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["selectedTab"],
  computed: {
    ...mapGetters(["getTodos"]),
  },
  methods: {
    runCheck(task) {
      this.$store.dispatch("runCheck", task.target.value);
    },
  },
};
</script>

<style></style>
