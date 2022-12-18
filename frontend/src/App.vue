<template>
  <div class="">
    <Navbar class="w-full fixed bg-gray-900 shadow-2xl z-10" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from '@/components/template/Navbar.vue' 
</script>