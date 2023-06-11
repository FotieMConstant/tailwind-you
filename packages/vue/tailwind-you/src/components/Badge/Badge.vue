
<template>
    <div v-if="size =='small'"
    class="bg-red-100 text-red-700 w-2 h-2 rounded-full dark:bg-red-700 dark:text-white">
    </div>
    <span v-if="size =='large'"
    class="bg-red-100 text-red-700 text-xs font-medium px-1 py-0.5 rounded-full dark:bg-red-700 dark:text-white">
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
  