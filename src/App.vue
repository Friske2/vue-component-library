<script setup>
import Button from './components/Button.vue'
const clickMe = () => {
  console.log('clicked')
}
</script>

<template>
  <div>
    <Button type="info" size="sm" @click="clickMe">Click Me</Button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
