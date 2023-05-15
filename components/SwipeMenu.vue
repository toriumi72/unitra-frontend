<script setup lang="ts">
import { usePointerSwipe } from '@vueuse/core'
import type { UseSwipeDirection } from '@vueuse/core'

const emit = defineEmits(['close'])

const target = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)

const containerHight = computed(() => container.value?.offsetHeight)

const top = ref('0')
const opacity = ref(1)

const closeMenu = () => {
  top.value = '0'
  opacity.value = 1
  emit('close') // emit close event
}

const onNavTo = () => {
  closeMenu()
  navigateTo('/')
}

const { distanceY, isSwiping } = usePointerSwipe(target, {
  onSwipe(e: PointerEvent) {
    if (containerHight.value) {
      if (distanceY.value < 0) {
        const distance = Math.abs(distanceY.value)
        top.value = `${distance}px`
        opacity.value = 1.25 - distance / containerHight.value
      }
      else {
        top.value = '0'
        opacity.value = 1
      }
    }
  },
  onSwipeEnd(e: PointerEvent, direction: UseSwipeDirection) {
    if (distanceY.value < 0 && containerHight.value && (Math.abs(distanceY.value) / containerHight.value) >= 0.5) {
      closeMenu()
    }
    else {
      top.value = '0'
      opacity.value = 1
    }
  }
})
</script>

<template>
  <div ref="container" class="absolute left-0 bottom-0 w-full h-[300px] m-auto flex items-center justify-center overflow-hidden rounded-t-3xl z-[999]">
    <div
      ref="target"
      class="absolute w-full h-full top-0 left-0 bg-[#3eaf7c] rounded-t-3xl"
      :class="{ 'transition-all duration-200 ease-linear': !isSwiping }"
      :style="{ top, opacity }"
    >
      <div class="absolute top-0 left-[50%] text-3xl">
        <button>
          <BlockIcon name="mdi:horizontal-line"/>
        </button>
      </div>
      <div>
        <button @click="onNavTo" class="text-white font-bold py-2 px-4 rounded">
          出品する
        </button>
      </div>
      <div>       
        <button @click="" class="text-white font-bold py-2 px-4 rounded">
          購入する
        </button>
      </div>
    </div>
  </div>
</template>