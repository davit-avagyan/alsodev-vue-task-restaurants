<template>
  <label :class="labelClass">
    <input
      :type="type"
      :class="classes.join(' ')"
      :placeholder="placeholder"
    />
  </label>
</template>

<script setup>
const { type, classes, placeholder, labelClass } = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  classes: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Адрес доставки'
  },
  labelClass: {
    type: String,
    required: true
  }
})
</script>