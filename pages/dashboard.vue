<template>
  <div class="mt-5">
   <Tabs/>
  </div>
</template>

<script>
import mechanicTasks from "@/data/mechanicTasks.json";
export default {
  middleware({store,redirect}){
    store.commit('setMechanicTasks',mechanicTasks);
    if (store.state.authenticated !=='true') {
    return redirect('/')
  }
  }
}
</script>

<style scoped>
div.mt-5 {
  padding-top: 1rem;
}
</style>
