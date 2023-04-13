<script setup lang="ts">
const route = useRoute()
console.log(route.path)
const localNavArray = ref([
  {
    slack: 'buyAndSell',
    name: '教科書検索',
    icon: 'teenyicons:home-outline',
    selectedIcon: 'teenyicons:home-solid'
  },
  {
    slack: 'chatList',
    name: 'チャット',
    icon: 'teenyicons:search-property-outline',
    selectedIcon: 'teenyicons:search-property-solid'
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
    icon: 'ic:outline-calendar-month',
    selectedIcon: 'ic:baseline-calendar-month'
  },
  {
    slack: 'mySetting',
    name: '設定',
    icon: 'ic:outline-calendar-month',
    selectedIcon: 'ic:baseline-calendar-month'
  }
])
</script>

<template>
  <div class="fixed bottom-0 left-0 w-full h-auto z-[99]">
    <div class="flex px-3 py-2 items-center shadow bg-white">
      <div class="grow flex items-center">

        <div class="absolute left-1/2 flex items-center justify-center h-12 w-12 -top-4 -translate-x-1/2 rounded-3xl bg-indigo-500 text-white shadow-lg sm:-top-8 sm:h-16 sm:w-16">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
          </svg>
        </div>

        <button v-for="(localNav, index) of localNavArray" @click="navigateTo('/' + localNav.slack)" class="basis-1/5 py-[calc(0.2vh_+_6px)]">
          <div class="text-[calc(2vh_+_8px)] leading-none text-[#B0A6CC]" :class="{ 'text-[#644DAC]': route.path === '/' + localNav.slack }">
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