<template>
  <div class="bg-yellow mt-5">
    <div class="container-fluid">
      <div class="row">
        <div
          class="description col-xl-6 col mr-auto text-md-center text-sm-center text-lg-center"
        >
          <LoginLogo />
          <div class="punchline">
            <h1>Ready to work?</h1>
            <h4>
              Well.. that's how you do it
              <font-awesome-icon :icon="['fa', 'arrow-right']" />
            </h4>
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
    <div class="bg-green"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
   computed: mapState({
    isAuthenticated: state => state.authenticated
  }),
  created(){
    if(this.isAuthenticated){
      this.$router.push('dashboard');
    }
  }
  
}
</script>

<style scoped>
div.mt-5 {
  padding-top: 5rem;
}
</style>
