<template>
  <div class="mt-5">
    <Tabs />
  </div>
</template>

<script>
import {mechanicTasks} from "@/data/mechanicTasks.json";
import {electricianTasks} from "@/data/electricianTasks.json";
import {custodianTasks} from "@/data/custodianTasks.json";

export default {
  middleware({ store, redirect }) {
    if (store.state.authenticated !== "true") {
      return redirect("/");
    }
    store.commit("setMechanicTasks", mechanicTasks);
    store.commit("setElectricianTasks", electricianTasks);
    store.commit("setCustodianTasks", custodianTasks);
    
  },
};
</script>

<style scoped>
div.mt-5 {
  padding-top: 1rem;
}
</style>
