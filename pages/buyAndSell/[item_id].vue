<script setup lang="ts">
//＊2つのページで同じデータを読み込むのは効率が悪いので、後で修正する 
definePageMeta({ layout: 'individual' })

const {
  bookList,
  addChatItem,
  updateBookItem,
} = useStore()
const {
  loggedInUser,
  userProfile,
} = useAuth()

const route = useRoute()
const itemId = ref(route.params.item_id)
console.log(itemId.value)
const bookItem = ref(bookList.value.find((bookItem: any) => bookItem.id == itemId.value))

onMounted(() => {
  
})

//chatへのボタン
const addChatData = ref({
  productId: itemId.value,
  buyerId: loggedInUser.value.uid,
  sellerId: bookItem.value.sellerId,
})
const onGoToChat = async () => {
  if (!bookItem.value) {
    console.error('bookItem is undefined')
    return
  }
  if (bookItem.value.interestedBuyers && bookItem.value.interestedBuyers.includes(loggedInUser.value.uid)) {
    navigateTo(`/chatList/${itemId.value}`)
  }
  else {
    await updateBookItem(bookItem.value.id, { interestedBuyers: [loggedInUser.value.uid] })
    await addChatItem(addChatData.value)
    .then(() => {
      navigateTo(`/chatList/${itemId.value}`)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

//戻るボタン
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
          <img class="w-full h-full object-cover" src="/images/test.png" :alt="bookItem.name" />
        </div>
        <button
          @click="onGoBack"
          class="absolute top-4 right-4 w-[3em] h-[3em] bg-white rounded-full shadow-md"
        >
          <BlockIcon class="text-xl" name="ic:round-close" />
        </button>
      </div>

      <!-- 商品詳細 -->
      <div class="h-auto mt-[-8px] p-4 flex flex-col bg-white rounded-lg">
        <div class="text-2xl font-semibold mb-2">{{ bookItem.name }}</div>
        <div class="mb-4 flex flex-wrap space-x-2">
          <span
            v-for="(tag, index) in bookItem.tags"
            :key="index"
            class="px-3 py-1 space-x-3 bg-[#6B4EFF] text-white rounded-full"
          >
            {{ tag }}
          </span>
        </div>
        <div class="mb-4">
          <span class="text-lg font-semibold">{{ bookItem.price }}円</span>
        </div>
        <div class="mb-6 space-y-4">
          <div class="">出品者: {{ bookItem.seller }}</div>
          <div class="">{{ bookItem.description }}</div>
          <div class="">出版年: {{ bookItem.publication_year }}</div>
          <div class="">使用年: {{ bookItem.used_in_class }}</div>
          <div class="">状態: {{ bookItem.condition }}</div>
          <div v-if="bookItem.negotiable === true" class="">交渉: 可</div>
          <div v-else class="">交渉: 不可</div>
        </div>

      </div>
      <!-- 取引、編集へのボタン -->
      <div v-if="bookItem.sellerId !== loggedInUser.uid" class="fixed bottom-0 left-0 flex justify-center mt-auto p-4 w-full">
        <ButtonAction @click="onGoToChat" class="p-[0.8em] w-full bg-black text-white shadow-md">
          取引チャットへ
        </ButtonAction>
      </div>
      <div v-else class="fixed bottom-0 left-0 flex justify-center mt-auto p-4 w-full"> 
        <ButtonAction @click="" class="p-[0.8em] w-full bg-black text-white shadow-md">
          編集
        </ButtonAction>
      </div>
    </div>
  <!-- </ClientOnly> -->
</template>


<style scoped>
</style>