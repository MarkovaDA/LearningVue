<template>
  <li>{{ todo }}</li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: String
    }
  }
</script>

<style>
</style>