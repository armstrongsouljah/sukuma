<template>
  <div :class="visualClasses">
    <label :for="iD">{{inputLabel || 'Label'}}</label>
    <input :type="inputType" :id="iD" :placeholder="placeholder" />
  </div>
</template>
<script>
export default {
  name: "TextInput",
  props: {
    visualClasses: {
      type: Array,
    },
    placeholder: {
      type: String,
    },
    inputType: {
      type: String,
    },
    iD: {
        type: String
    },
    inputLabel: {
        type: String
    }
  },
};
</script>