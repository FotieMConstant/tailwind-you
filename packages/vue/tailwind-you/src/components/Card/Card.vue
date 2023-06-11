
<template>
    <div class="bg-green-800 text-gray-900">
      <h4 class="text-lg">{{ title }}</h4>
      <p class="text-bas">{{ subText }}</p>
    </div>
  </template>
<script>
export default {
  name: "Card",
  props:{
    title:{
      type: String,
      default: "Title"
    },
    subText:{
      type: String,
      default: "subText"
    }
  }
}
</script>
  <style scoped>
  </style>
  