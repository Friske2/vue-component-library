<template>
  <div v-if="isBlock" class="d-grid gap-2">
    <button :disabled="disabled" :class="`btn ${className} ${sizeName}`">
      <slot></slot>
    </button>
  </div>
  <button v-else :disabled="disabled" :class="`btn ${className} ${sizeName}`">
      <slot></slot>
    </button>
</template>
<script>
import { ref,onMounted } from 'vue'
export default {
  props:{
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value)
      }
    },
    isOutline: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isBlock: {
      type: Boolean,
      default: false
    }
  },
  setup({type,isOutline,size}) {
    const className = ref('')
    const sizeName = ref('')
    onMounted(()=>{
        className.value = `${isOutline ? 'btn-outline-'+type : 'btn-'+type}`
        sizeName.value = `btn-${size}`
    })
    return {
      className,
      sizeName
    }
  }
}


</script>