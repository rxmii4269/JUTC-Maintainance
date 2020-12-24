<template>
  <b-nav>
    <b-avatar></b-avatar>
    <b-nav-item-dropdown id="nav7_ddown" right>
      <b-dropdown-item>
        <h6 class="text-capitalize">{{this.currentUser.username}}</h6>
      </b-dropdown-item>
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
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isAuthenticated: (state) => state.authenticated,
    }),
    currentUser() {
      return this.$store.getters.loggedInUser(sessionStorage.getItem('username'));
    },
  },
};
</script>

<style>
#nav7_ddown__BV_toggle_{
  color: #ffffff;
}
</style>
