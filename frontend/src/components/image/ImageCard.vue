<template>
  <div class="image-card">
    <img 
      :src="url"
      alt=""
    >
  </div>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>

<style lang="postcss" scoped>
  img {
    width: 100%;
    max-height: 300px;
  }
</style>