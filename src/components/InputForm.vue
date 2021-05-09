<template>
  <div class="all" v-show="selectedTab === 'All' || selectedTab === 'Active'">
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
  </div>
</template>

<script>
export default {
  props: ["selectedTab"],
  data() {
    return {
      newTodo: "",
    };
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

<style></style>
