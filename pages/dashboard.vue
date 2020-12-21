<template>
  <div class="mt-5">
   <Tabs/>
  </div>
</template>

<script>
import mechanicTasks from "@/data/mechanicTasks.json";
export default {
  middleware({store}){
    store.commit('setMechanicTasks',mechanicTasks);
  }
}
</script>

<style scoped>
div.mt-5 {
  padding-top: 1rem;
}
</style>
