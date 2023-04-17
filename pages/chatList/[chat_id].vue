<script setup lang="ts">
definePageMeta({ layout: 'individual' })
const route = useRoute()
const chatId = ref(route.params.chat_id)

const messages = reactive([
  { sender: 'user1', content: 'こんにちは！' },
  { sender: 'user2', content: 'こんにちは、元気ですか？' },
  { sender: 'user1', content: '元気です！ありがとう！' },
])

const inputMessage = ref('')
const sendMessage = () => {
  if (inputMessage.value.trim()) {
    messages.push({ sender: 'user1', content: inputMessage.value.trim() })
    inputMessage.value = ''
    scrollToBottom()
  }
}

const messagesEnd = ref(null)
const scrollToBottom = () => {
  messagesEnd.value.scrollIntoView({ behavior: 'smooth' })
  console.log('scroll')
}

onMounted(() => {
  scrollToBottom()
})

//戻るボタン
const onGoBack = () => {
  window.history.back() 
}
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="sticky top-0 left-0 px-4 py-1 flex justify-between items-center w-full h-auto bg-white z-30">
      <div class="">
        <button
          @click="onGoBack"
          class=""
        >
          <BlockIcon class="text-xl" name="ic:round-close" />
        </button>
      </div>
      <div>
        {{ chatId }}
      </div>
      <div>
        <ButtonAction class="bg-black text-white shadow-md text-sm">
          お支払い方法選択 →
        </ButtonAction>
      </div>
    </div>
    <div class="h-full overflow-y-auto p-4 pb-28">
      <div v-for="(message, index) in messages" :key="index" class="mb-4">
        <div class="flex items-center justify-start gap-1" :class="{'justify-end': message.sender === 'user1'} ">
          <ItemAvatar photoURL="" v-if="message.sender !== 'user1'" class="text-xs" />
          <div
            class="inline-block px-4 py-2 max-w-[60%] break-words rounded-lg text-sm"
            :class="{
              'bg-[#6B4EFF] text-white': message.sender === 'user1',
              'bg-gray-300': message.sender !== 'user1',
            }"
          >
            {{ message.content }}
          </div>
        </div>
      </div>
      <div ref="messagesEnd"></div>
    </div>
    <div class="fixed bottom-0 left-0 w-full p-4 border-t border-gray-200 bg-white ">
      <form @submit.prevent="sendMessage" class="flex items-center">
        <input
          type="text"
          v-model="inputMessage"
          class="flex-grow p-2 border border-gray-300 rounded"
          placeholder="メッセージを入力"
        />
        <button
          type="submit"
          class="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          送信
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>





