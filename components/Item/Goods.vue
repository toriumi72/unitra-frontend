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

const props = defineProps<Props>();

const addToCart = () => {
  // カートへの追加処理を実装する
  console.log(`Product ${props.goodsItem.id} added to cart.`);
}
</script>

<template>

<div class="border rounded-md">
  <div class="mb-2 h-60 overflow-hidden bg-gray-100">
    <img :src="props.goodsItem.imageUrl" class="h-full w-full object-cover object-center" />
    <div class="absolute left-0 bottom-0 px-3 py-1.5 text-sm rounded-tr-lg bg-black/80">
      <div class="text-white">
        {{ props.goodsItem.price }}円
      </div>
    </div>
  </div>
  <div>
    <div class="mb-1 text-gray-500 transition duration-100 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
      {{ props.goodsItem.name }}
    </div>
  </div>
</div>


</template>


<style scoped>
</style>
