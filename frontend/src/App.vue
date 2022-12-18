<template>
  <div class="">
    <Navbar class="z-50 w-full fixed bg-gray-900 shadow-2xl" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from '@/components/template/Navbar.vue' 
</script>