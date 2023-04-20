<script setup lang="ts">
const route = useRoute()
console.log(route.path)
const localNavArray = ref([
  {
    slack: 'buyAndSell',
    name: '教科書検索',
    icon: 'mingcute:home-1-line',
    selectedIcon: 'mingcute:home-1-fill'
  },
  {
    slack: 'chatList',
    name: 'チャット',
    icon: 'mingcute:message-3-line',
    selectedIcon: 'mingcute:message-3-fill'
  },
  {
    slack: '',
    name: '',
    icon: '',
    selectedIcon: ''
  },
  {
    slack: 'like',
    name: 'いいね',
    icon: 'ic:baseline-bookmark-border',
    selectedIcon: 'ic:baseline-bookmark'
  },
  {
    slack: 'mySetting',
    name: '設定',
    icon: 'mdi:account-circle-outline',
    selectedIcon: 'mdi:account-circle'
  }
])
</script>

<template>
  <div class="fixed bottom-0 left-0 w-full h-auto z-[99]">
    <div class="flex px-3 pt-2 pb-5 items-center shadow bg-white">
      <div class="grow flex items-center">

        <div class="absolute left-1/2 flex items-center justify-center h-12 w-12 -top-4 -translate-x-1/2 rounded-3xl bg-indigo-500 text-white shadow-lg sm:-top-8 sm:h-16 sm:w-16">
          <BlockIcon name="akar-icons:shopping-bag" class="text-2xl" />
        </div>

        <button v-for="(localNav, index) of localNavArray" @click="navigateTo('/' + localNav.slack)" class="basis-1/5 py-[calc(0.2vh_+_6px)]">
          <div class="text-[calc(2vh_+_8px)] leading-none" :class="{ 'text-[#6B4EFF]': route.path === '/' + localNav.slack }">
            <BlockIcon v-show="route.path === '/' + localNav.slack" :name="localNav.selectedIcon" class="text-light"/>
            <BlockIcon v-show="route.path !== '/' + localNav.slack" :name="localNav.icon" class="text-light"/>
          </div>
        </button>
      </div>
    </div>
  </div>
  <div class="bg-white pb-20">
    <slot />
  </div>
</template>

<style scoped>
</style>