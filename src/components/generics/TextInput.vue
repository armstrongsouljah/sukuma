<template>
  <div :class="visualClasses">
    <label :for="iD">{{inputLabel || 'Label'}}</label>
    <input :value="value" @input="$emit('input', $event.target.value)" :type="inputType" :id="iD" :placeholder="placeholder" />
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
    iD: String,
    inputLabel: String,
    value: String
  },
};
</script>