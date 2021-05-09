<template>
  <div class="w-11/12 md:w-1/2 mx-auto flex flex-col items-center">
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
    <div class="mt-6 w-full">
      <input-form :selectedTab="selectedTab" />
      <all :selectedTab="selectedTab" />
      <active :selectedTab="selectedTab" />
      <completed :selectedTab="selectedTab" />
    </div>
  </div>
</template>

<script>
import InputForm from "./InputForm.vue";
import All from "./All.vue";
import Active from "./Active.vue";
import Completed from "./Completed.vue";
// import { mapActions } from "vuex";
export default {
  components: {
    InputForm,
    All,
    Active,
    Completed,
  },
  data() {
    return {
      tabs: ["All", "Active", "Completed"],
      selectedTab: "All",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
