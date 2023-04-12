<script setup lang="ts">
import goodsArr from '~/goodsList.json'

const route = useRoute()
const goodsList: any = ref(goodsArr.arr)
const itemId = ref(route.params.item_id)
const item = ref(goodsList.value.find((goodsItem: any) => goodsItem.id == itemId.value))

onMounted(() => {
  
})

const onGoBack = () => {
  window.history.back()
}
</script>

<template>
  <ClientOnly>
    <div class="h-screen">
      <!-- 商品画像 -->
      <div class="h-1/2 w-full">
        <img class="w-full h-full object-cover" :src="item.image" :alt="item.name" />
      </div>

      <!-- 閉じるボタン -->
      <button
        @click="onGoBack"
        class="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md"
      >
        &times;
      </button>

      <!-- 商品詳細 -->
      <div class="h-1/2 p-4 flex flex-col">
        <h1 class="text-2xl font-semibold mb-4">{{ item.name }}</h1>
        <div class="mb-4 flex flex-wrap">
          <span
            v-for="(tag, index) in item.tags"
            :key="index"
            class="mr-2 mb-2 px-3 py-1 bg-gray-300 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
        <div class="mb-4">
          <span class="text-lg font-semibold">{{ item.price }}円</span>
        </div>
        <div class="mb-4">出版年: {{ item.publishedYear }}</div>
        <div class="mb-4">{{ item.description }}</div>

        <!-- 取引へのボタン -->
        <div class="mt-auto">
          <button
            class="w-full py-2 bg-blue-500 text-white rounded-md shadow-md"
          >
            取引へ
          </button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
</style>