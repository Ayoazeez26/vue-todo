<template>
  <div class="relative" v-show="selectedTab === 'Completed'">
    <ul>
      <li
        class="done flex mb-3 items-center justify-between"
        v-for="(todo, index) in getTodos"
        v-show="!todo.active"
        :key="index"
      >
        <div class="flex items-center">
          <input
            type="checkbox"
            :value="todo.task"
            class="checkbox mr-2 w-5 h-5"
            :id="'todo' + index"
            @click="runCheck"
            checked
          />
          <label
            :class="{ 'line-through': !todo.active }"
            class="text-black font-medium text-lg"
            :for="'todo' + index"
          >
            {{ todo.task }}
          </label>
        </div>
        <img
          class="justify-self-end pointer w-5 h-5"
          src="../assets/trash-alt-regular.svg"
          alt="del btn"
          @click="delTask"
        />
      </li>
    </ul>
    <button
      @click="clearTab"
      v-if="checkState"
      class="absolute flex items-center -bottom-12 text-white right-0 bg-red-400 rounded px-3 py-2"
    >
      <img
        class="w-3 h-3"
        src="../assets/trash-alt-regular.svg"
        alt="del img"
      />
      Delete All
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  props: ["selectedTab"],
  computed: {
    ...mapGetters(["getTodos"]),
    checkState() {
      const doneItem = this.$store.state.allTodos.filter(
        (todo) => todo.active === false
      );
      return doneItem.length;
    },
  },
  methods: {
    runCheck(task) {
      this.$store.dispatch("runCheck", task.target.value);
    },
    delTask(e) {
      const task = e.target.parentElement.children[0].children[0].value;
      this.$store.dispatch("delTask", task);
    },
    ...mapActions(["clearTab"]),
  },
};
</script>

<style></style>
