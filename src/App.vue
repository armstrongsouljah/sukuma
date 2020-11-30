<template>
  <div>
    <NavBar /> 
    <router-view></router-view>
  </div>
</template>

<script>
const NavBar = () => import('@/components/layout/NavBar.vue');

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>
