<template>
  <div class="modal">
    <div class="bg-gray-900 sm:w-3/4 md:w-1/2 rounded font-sans border">
      <div class="modal-header px-4 py-2 text-white flex justify-end">
        <h3 
          class="close text-2xl hover:text-blue-600" 
          @click="modalTriger()"
        >
          &#x2718;
        </h3>
      </div>
      <div class="modal-body px-3 pb-3 text-white">
        <iframe
          class="w-full sm:h-96 md:h-80 xl:h-96"
          :src="`https://www.youtube.com/embed/${data.videos.results[0].key}`"
        ></iframe>
        <p class="mt-5 text-xl font-semibold">{{ data.original_title }}</p>
        <p class="mt-3 mb-10">{{ data.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// emit and props
const emit  = defineEmits(['showModal'])
const props = defineProps({
  data: {
      type: Object,
      default: () => ({}),
  }
})

// ref
const isShow = ref(false)

//Method
const modalTriger = () => {
  isShow.value    = false
  emit('showModal', false)
}
isShow.value = props.show
</script>

<style lang="postcss" scoped>
  .modal {
    @apply fixed left-0 top-3 flex justify-center items-center bg-black bg-opacity-50 z-10 h-screen;
  }
  .close {
    cursor: pointer;
  }
</style>