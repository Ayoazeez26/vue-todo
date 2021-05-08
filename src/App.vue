<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Raleway:wght@700&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
}
</style>
