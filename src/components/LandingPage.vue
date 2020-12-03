<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  }
}
</script>
