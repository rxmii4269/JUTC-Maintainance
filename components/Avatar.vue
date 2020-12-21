<template>
  <b-nav>
    <b-avatar></b-avatar>
    <b-nav-item-dropdown id="nav7_ddown" right>
      <b-dropdown-item
        ><NuxtLink
          class="text-dark"
          to="/logout"
          v-if="isAuthenticated"
          >Logout</NuxtLink
        >
        <NuxtLink class="" to="/" v-else
          >Login</NuxtLink
        ></b-dropdown-item
      >
    </b-nav-item-dropdown>
  </b-nav>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapState({
    isAuthenticated: (state) => state.authenticated,
  }),
};
</script>