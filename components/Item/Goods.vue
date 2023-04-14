<script setup lang="ts">
type Props = {
  goodsItem: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    publicationYear: number;
    usedInClass: string;
    condition: string;
    negotiable: boolean;
    tags: string[];
  }
}

//Bookmarkボタンを押した時の処理
const bookmarked = ref(false)
const onBookmark = (event: MouseEvent | TouchEvent) => {
  event.preventDefault()
  bookmarked.value = !bookmarked.value
  console.log('bookmarked')
}
const props = defineProps<Props>();

</script>

<template>

<div class="border rounded-md">
  <div class="h-52 overflow-hidden bg-gray-100">
    <img :src="props.goodsItem.imageUrl" class="h-full w-full object-cover object-center" />
    <div class="absolute left-0 bottom-0 px-3 py-1.5 text-sm rounded-tr-lg bg-black/80">
      <div class="text-white">
        {{ props.goodsItem.price }}円
      </div>
    </div>
    <div class="absolute right-0 top-0 z-30">
      <button @click="onBookmark($event)" @touchstart="onBookmark($event)" class="w-full h-full">
        <BlockIcon :name="'ic:baseline-bookmark'" class="text-2xl" :class="{ 'text-[#6B4EFF]': bookmarked }" />
      </button>
    </div>
  </div>
  <div>
    <div class="p-2 text-left text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
      {{ props.goodsItem.name }}
    </div>
  </div>
</div>


</template>


<style scoped>
</style>
