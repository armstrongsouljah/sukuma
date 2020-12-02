<template>
  <div class="container"> 
      <Login slot="login" />
      <signup  slot="signup"/>
  </div> 
</template>
<script>
// import Signup from './Signup.vue';
const Login  = ()=> import('@/components/auth/Login.vue');
const Signup = ()=> import('@/components/auth/Signup.vue');
export default {
    name:'Auth',
    components: {
        Login,
        Signup
    }
}
</script>