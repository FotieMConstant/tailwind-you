
<template>
  <button class="lv-button" @click="$emit('onClick')">
    <slot>
      Some Useful Default Content
    </slot>
  </button>
  </template>
  
  <script>
  export default {
    name: "badge",
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
  .lv-button {
    background-color: greenyellow;
    color: white;
    outline: none;
    border: none;
  }
  </style>
  