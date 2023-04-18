<script setup lang="ts">
import chatArr from '~/chatList.json'
const chatList: any = ref(chatArr.arr)

const router = useRouter()
</script>

<template>
  <div class="">
    <div class="mx-auto">
      <div class="text-2xl font-bold mb-6">チャット一覧</div>
      <div v-for="(chatItem, index) in chatList" :key="index" class="">
        <button
          @click="navigateTo(`/chatList/${chatItem.id}`)"
          class="flex items-center gap-3 py-3 px-4 w-full"
        >
          <ItemAvatar photoURL="" class="text-sm" />
          <div class="flex flex-col text-left">
            <div class="">
              {{ chatItem.name }}
            </div>
            <div class="text-xs">
              {{ chatItem.lastMessage }}
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

