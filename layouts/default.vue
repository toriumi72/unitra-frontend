<script setup lang="ts">
const route = useRoute()
const localNavArray = ref([
  {
    slack: 'home',
    name: 'home',
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
    slack: 'like',
    name: 'いいね',
    icon: 'ic:outline-calendar-month',
    selectedIcon: 'ic:baseline-calendar-month'
  },
  {
    slack: 'setting',
    name: '設定',
    icon: 'ic:outline-calendar-month',
    selectedIcon: 'ic:baseline-calendar-month'
  }
])
</script>

<template>
  <div>
    <div class="fixed px-3 py-3 bottom-0 left-0 w-full h-auto z-[99]">
      <div class="flex items-center shadow rounded-full bg-white">
        <div class="grow flex items-center">
          <button v-for="(localNav, index) of localNavArray" @click="navigateTo('/' + localNav.slack)" class="basis-1/4 py-[calc(0.2vh_+_6px)]">
            <div class="text-[calc(2vh_+_8px)] leading-none text-[#B0A6CC]" :class="{ 'text-[#644DAC]': route.path === localNav.slack }">
              <BlockIcon v-show="route.path === localNav.slack" :name="localNav.selectedIcon" class="text-light"/>
              <BlockIcon v-show="route.path !== localNav.slack" :name="localNav.icon" class="text-light" />
              <div class="text-xs">
                {{ localNav.name }}
              </div>
            </div>
          </button>
        </div>
      </div>
      
    </div>
    <slot />
  </div>
</template>

<style scoped>
</style>