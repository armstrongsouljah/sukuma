<template>
  <div :class="wrapperClasses">
    <button :type="buttonType" :class="buttonClasses">
      <slot>Submit</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    buttonClasses: {
      type: Array,
    },
    wrapperClasses: {
      type: Array,
    },
    buttonType: {
      type: String,
    },
  },
};
</script>