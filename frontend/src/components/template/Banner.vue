<template>
  <div>
    <swiper
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide
        v-for="item in dataUpComingMovie"
        :key="item"
      >
        <div class="hero relative">
          <img 
            class="w-full sm:h-1/2" 
            :src="`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`" 
            alt=""
          >
          <div class="absolute right-10 top-32 sm:visible invisible text-white max-w-lg">
            <h3 class="text-2xl mb-3"> {{ item.original_title }} </h3>
            <p class="mt-3 font-sans">{{ item.overview }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from "swiper";
  import { useStore } from 'vuex'

  const store             = useStore()
  const modules           = ref([Navigation])
  const dataUpComingMovie = ref()
  const breakpoint        = store.state.breakpointSwiper

  const getDataUpComingMovie = () => store.dispatch('getDataUpComingMovie')

onMounted( async () => {
  const dataUpcoming = await getDataUpComingMovie()
  dataUpComingMovie.value = dataUpcoming.slice(0,10)
})
</script>

<style lang="postcss" scoped>
.hero {
  max-height: 500px;
}
</style>