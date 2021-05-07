<template>
  <div class="w-1/2 mx-auto">
    <h1 class="text-4xl text-gray-700 font-bold mb-12">#todo</h1>
    <div
      class="header relative text-sm flex justify-between font-semibold items-center text-gray-700"
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
    <div class="all" v-show="selectedTab === 'All'">
      <form @submit.prevent="addTodo">
        <input
          type="text"
          placeholder="add details"
          v-model="newTodo"
          class="border rounded-lg p-3"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["All", "Active", "Completed"],
      selectedTab: "All",
    };
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
