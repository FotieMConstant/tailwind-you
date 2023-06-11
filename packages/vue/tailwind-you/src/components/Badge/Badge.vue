
<template>
    <div v-if="size =='small'"
    class="bg-error-40 w-2 h-2 rounded-full dark:bg-error-80 dark:text-error-20">
    </div>
    <span v-if="size =='large'"
    class="bg-error-40 text-error-100 text-xs font-medium px-1 py-0.5 rounded-full dark:bg-error-80 dark:text-error-20">
      {{label}}
    </span>
  </template>
<script>
export default {
  name: "Badge",
  props:{
    label:{
      type: String,
      default: "999+"
    },
    size: {
      type: String,
      default: "small",
      validator: function (value) {
        return ['small', 'large'].indexOf(value) !== -1;
      },
    },
  }
}
</script>
  <style scoped>
  </style>
  