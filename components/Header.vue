<template>
  <header>
    <nav class="navbar header navbar-expand-lg navbar-light fixed-top">
      <h1 class="navbar-brand">TaskWind - Task Management System</h1>

      
      <NuxtLink class="btn login-btn text-white ml-auto" to="/logout" v-if="isAuthenticated">Logout</NuxtLink>
      <NuxtLink class="btn login-btn text-white ml-auto" to="/" v-else>Login</NuxtLink>
      
    </nav>
  </header>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
export default {
  data(){
    return{
      
    }
  },
  computed: mapState({
    isAuthenticated: state => state.authenticated
  })
  }
</script>