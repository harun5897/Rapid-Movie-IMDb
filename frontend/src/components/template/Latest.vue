<template>
  <div class="sm:ml-14 ml-5">
    <h3 class="text-2xl text-white mb-3"> Latest </h3>
    <swiper
      :navigation="true"
      :modules="modules"
      :slides-per-view="2"
      :space-between="20"
      :breakpoints="breakpoint"
    >
      <swiper-slide
        v-for="item in dataTrandingMovie"
        :key="item"
        class="swiper-slide text-center"
        @click="movieDetail(item.id)"
      >
        <div class="relative">
          <ImageCard 
            :url="`https://image.tmdb.org/t/p/w500${item.poster_path}`" 
          />
          <span> Rating {{ item.vote_average.toFixed(1) }} </span>
        </div>
        <LabelTitle
          class="mt-2" 
          :title="item.original_title" 
        />
      </swiper-slide>
    </swiper>
    <Modal 
      v-if="showModal" 
      :data="dataDetilMovie" 
      @showModal="closeModal"
    />
  </div>
</template>

<script setup>
import ImageCard  from "@/components/image/ImageCard.vue"
import LabelTitle from "@/components/label/LabelTitle.vue"
import Modal from "@/components/modal/Modal.vue"
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from "swiper";
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// Ref
const showModal         = ref(false)
const modules           = ref([Navigation])
const dataTrandingMovie = ref()
const dataDetilMovie    = ref()
const breakpoint        = store.state.breakpointSwiper

// Method
const getDataTrandingMovie = () => store.dispatch('getDataTrandingMovie')
const getDetilMovie        = (id) =>  store.dispatch('getDetilMovie', id)
const closeModal           = (val) => showModal.value = val
const movieDetail          = async (id) => {
  dataDetilMovie.value = await getDetilMovie(id)
  showModal.value      = true
}

onMounted(async () => {
  dataTrandingMovie.value = await getDataTrandingMovie()
})
</script>

<style lang="postcss" scoped>
  span {
    @apply text-slate-300 text-sm font-sans bg-gray-800 py-1 px-2 text-left absolute top-0 left-0;
  }
  .swiper-slide {
    cursor: pointer;
  }
</style>