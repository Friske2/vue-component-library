<template>
  <button>
    <slot></slot>
  </button>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>