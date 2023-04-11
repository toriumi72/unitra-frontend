<script setup lang="ts">
import { register } from 'swiper/element/bundle';

register();

const tabArr = ref([
  "全て",
  "プログラミング",
  "物理",
  "数学",
  "化学",
  "生物",
  "地学",
  "地理",
  "世界史",
  "歴史",
])


// const onProgress = (e:any) => {
  // const [swiper, progress] = e.detail;
// }

const onSlideTo = (e:any) => {
  e.detail[0].slideTo(e.detail[0].clickedIndex - 1, 500, true)
}

</script>

<template>
  <div class="">
    <!-- thumbs swiper -->
    <swiper-container 
      ref="tabs"
      class="tabs sticky top-0 pt-3 px-4 bg-white shadow-[0px_5px_6px_-1px_rgba(0,0,0,0.03)] z-[50]"
      :slides-per-view="`auto`" 
      :space-between="30" 
      :watchSlidesVisibility="true"
      :watchSlidesProgress="true" 
      :slideActiveClass="'swiper-slide-active'" 
      @tap="onSlideTo($event)"
    >
      <swiper-slide v-for="(tab, index) of tabArr" class="w-auto opacity-30">
        <div class="">{{ tab }}</div>
        <div class="line w-full h-1 mt-2 bg-[#644DAC] rounded-full opacity-0"></div>
      </swiper-slide>
    </swiper-container>
  
    <!-- contents swiper -->
    <swiper-container 
      ref="content"
      thumbs-swiper=".tabs"
      @slidechange=""
      class="bg-[#EFF0F0]"
    >
      <swiper-slide v-for="(tab, index) of tabArr">
        <div class="w-full px-4">
          <slot />
        </div>
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