<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <img
          class="w-20 sm:ml-8 ml-0"
          src="/navbar-hero.png" 
          alt=""
        >
      </div>
      <div class="block sm:hidden">
        <button 
          @click="toggle" 
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg 
            class="fill-current h-3 w-3" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div 
        :class="open ? 'block': 'hidden'" 
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="sm:flex-grow text-white text-md">
          <a 
            href="#" 
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Series
          </a>
          <a 
            href="#" 
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Movies
          </a>
          <a 
            href="#" 
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white"
          >
            Genre
          </a>
        </div>
        <div>
          <input 
            class="bg-white rounded px-2 py-1 font-sans mt-4 sm:mt-0"
            type="" 
            name="" 
            value="" 
            placeholder="Search"
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
const toggle = () => {
  open.value = !open.value
}
</script>