<template>
  <div class="label-title">
    <span class="text-md text-white font-sans">{{ title }}</span>
  </div>
</template>

<script setup> 
defineProps({
  title: {
    type: String,
    default: '',
  }
})
</script>