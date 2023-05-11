<script setup lang="ts">
import {
  usePointerSwipe,
  useLocalStorage,
} from '@vueuse/core'
import type { UseSwipeDirection } from '@vueuse/core'
// type Props = {
//   swiperContainer: number,
// }
// const props = defineProps<Props>()

const target = ref<Element | null>(null)
const container = ref<HTMLElement | null>(null)
const containerWidth = computed(() => container.value?.offsetWidth)
const containerHight = computed(() => container.value?.offsetHeight)
const left = ref('0')
const right = ref('0')
const opacity = ref(1)

const { distanceX, distanceY, isSwiping } = usePointerSwipe(target, {
  onSwipe(e: PointerEvent) {
    if (containerWidth.value) {
      if (distanceX.value < 0) {
        const distance = Math.abs(distanceX.value)
        left.value = `${distance}px`
        opacity.value = 1.25 - distance / containerWidth.value
      }
      else if (distanceX.value > 0) {
        const distance = Math.abs(distanceX.value)
        right.value = `${distance}px`
        opacity.value = 1.25 - distance / containerWidth.value
      }
      else {
        left.value = '0'
        right.value = '0'
        opacity.value = 1
      }
    }
  },
  onSwipeEnd(e: PointerEvent, direction: UseSwipeDirection) {
    if (distanceX.value < 0 && containerWidth.value && (Math.abs(distanceX.value) / containerWidth.value) >= 0.1) {
      left.value = '100%'
      opacity.value = 0
      swipeDate(-1)
    }
    else if (distanceX.value > 0 && containerWidth.value && (Math.abs(distanceX.value) / containerWidth.value) >= 0.1) {
      right.value = '100%'
      opacity.value = 0
      swipeDate(1)
    }
    else {
      left.value = '0'
      right.value = '0'
      opacity.value = 1
    }
    left.value = '0'
    right.value = '0'
    opacity.value = 1
  },
})

const swipeDate = (add: number) => {
  // const result = currentSelect.value + add
  // if (result > stop.value) {
  //   currentSelect.value = 0
  // }
  // else if (result < 0) {
  //   currentSelect.value = stop.value
  // }
  // else {
  //   currentSelect.value = result
  // }
  console.log('swiperDate')
}


//上記のコードを親コンポーネントで使えるようにする。


</script>

<template>
  <div ref="container" class="w-full h-[100px] bg-black/50">
    <div ref="target" class="w-full h-full" >

    </div>
  </div>
</template>

<style>

</style>