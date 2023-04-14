<script setup lang="ts">
import goodsArr from '~/goodsList.json'
//＊2つのページで同じデータを読み込むのは効率が悪いので、後で修正する 
definePageMeta({ layout: 'individual' })

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
  <!-- <ClientOnly> -->
    <div class="h-screen w-full">
      <!-- 商品画像 -->
      <div class="sticky inset-0">
        <div class="h-2/5 w-full">
          <img class="w-full h-full object-cover" src="/images/test.png" :alt="item.name" />
        </div>
        <!-- ＊ボタンバグってて、ホットリロードの時しか前面に来ない（透明なだけか？レンダリングの順序的な問題か（画像だから）？） -->
        <button
          @click="onGoBack"
          class="absolute top-4 right-4 w-[3em] h-[3em] bg-white rounded-full shadow-md"
        >
          <BlockIcon class="text-xl" name="ic:round-close" />
        </button>
      </div>

      <!-- 商品詳細 -->
      <div class="h-auto mt-[-8px] p-4 flex flex-col bg-white rounded-lg">
        <div class="text-2xl font-semibold mb-2">{{ item.name }}</div>
        <div class="mb-4 flex flex-wrap space-x-2">
          <span
            v-for="(tag, index) in item.tags"
            :key="index"
            class="px-3 py-1 space-x-3 bg-[#6B4EFF] text-white rounded-full"
          >
            {{ tag }}
          </span>
        </div>
        <div class="mb-4">
          <span class="text-lg font-semibold">{{ item.price }}円</span>
        </div>
        <div class="mb-6 space-y-4">
          <div class="">出品者: {{ item.seller }}</div>
          <div class="">{{ item.description }}</div>
          <div class="">出版年: {{ item.publication_year }}</div>
          <div class="">使用年: {{ item.used_in_class }}</div>
          <div class="">状態: {{ item.condition }}</div>
          <div v-if="item.negotiable === true" class="">交渉: 可</div>
          <div v-else class="">交渉: 不可</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
        </div>


      </div>
      <!-- 取引へのボタン -->
      <div class="fixed bottom-0 left-0 flex justify-center mt-auto p-4 w-full">
        <ButtonAction class="w-full bg-black text-white shadow-md">
          取引へ
        </ButtonAction>
      </div>
    </div>
  <!-- </ClientOnly> -->
</template>


<style scoped>
</style>