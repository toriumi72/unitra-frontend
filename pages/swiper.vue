<script setup lang="ts">
import { register } from 'swiper/element/bundle';

register();

const roomArray = ref([
  {
    id: 'room1',
    name: 'サマリー',
  },
  {
    id: 'room2',
    name: 'ハピ',
  },
  {
    id: 'room3',
    name: 'マンション100',
  },
  {
    id: 'room4',
    name: 'いちごの家',
  },
  {
    id: 'room5',
    name: 'クラッツィオ',
  },
  {
    id: 'room6',
    name: 'ファ',
  },
  {
    id: 'room7',
    name: 'ドレミ2113453',
  }
])


// const onProgress = (e:any) => {
  // const [swiper, progress] = e.detail;
// }

const onSlideTo = (e:any) => {
  e.detail[0].slideTo(e.detail[0].clickedIndex - 1, 500, true)
}

</script>

<template>
  <div class="space-y-4">
    <swiper-container 
      ref="tabs"
      class="tabs"
      :slides-per-view="`auto`" 
      :space-between="30" 
      :watchSlidesVisibility="true"
      :watchSlidesProgress="true" 
      :slideActiveClass="'swiper-slide-active'" 
      @tap="onSlideTo($event)"
    >
      <swiper-slide v-for="(room, index) of roomArray" class="w-auto opacity-30">
        <div class="">{{ room.name }}</div>
        <div class="line w-full h-1 bg-[#766C93] rounded-full opacity-0"></div>
      </swiper-slide>
    </swiper-container>
  
    <!-- thumbs swiper -->
    <swiper-container 
      ref="content"
      thumbs-swiper=".tabs"
      @slidechange=""
    >
      <swiper-slide v-for="(room, index) of roomArray">
        <div class="w-full h-[100vh]">{{ room.id }}</div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped>
.swiper-slide-thumb-active,
.swiper-slide-thumb-active .line{
  opacity: 1!important;
}

</style>