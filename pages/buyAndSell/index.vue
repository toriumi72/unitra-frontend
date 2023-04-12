<script setup lang="ts">
import { register } from 'swiper/element/bundle';
import goodsArr from '~/goodsList.json';

register();

const goodsList:any = ref(goodsArr.arr);
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

//search
const searchName = ref("");
const searchNameLength = computed(() => {
  if (searchName.value.length === 0) {
    return 6
  }
  if (searchName.value.length > 10) {
    return 10
  }
  return searchName.value.length + 3
})
const focusInput = (event:any) => {
  const inputElement = event.target;
  inputElement.focus();
  inputElement.setSelectionRange(inputElement.value.length, inputElement.value.length);
}

//scroll位置の保持(シームレスにできた気がするから後で確認)

//swiper
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
      <swiper-slide class="w-auto opacity-30">
        <div class="w-auto">
          <input
            @click="focusInput($event)"
            v-model="searchName"
            placeholder="search"
            :size="searchNameLength"
            class="w-auto outline-none whitespace-nowrap overflow-hidden overflow-ellipsis text-center"
          />
        </div>
        <div class="line w-full h-1 mt-2 bg-[#644DAC] rounded-full opacity-0"></div>
      </swiper-slide>
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
      <swiper-slide>{{ searchName }}</swiper-slide>
      <swiper-slide v-for="(tab, index) of tabArr">
        <ListGoods class="mx-auto container px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <template v-for="goodsItem of goodsList">
            <button v-if="tab === '全て' || goodsItem.tags.some((tag:any) => tag === tab)" @click="navigateTo(`/buyAndSell/${goodsItem.id}`)">
              <ItemGoods :goodsItem="goodsItem" />
            </button>
          </template>
        </ListGoods>
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
