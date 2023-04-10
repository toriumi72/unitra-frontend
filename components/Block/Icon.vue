<script setup lang="ts">
import type { IconifyIcon } from '@iconify/vue'
import { Icon as Iconify, loadIcon } from '@iconify/vue'
const nuxtApp = useNuxtApp()
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
const icon: Ref<IconifyIcon | null> = ref(null)
icon.value = await loadIcon(props.name).catch(_ => null)
watch(() => props.name, async () => {
  icon.value = await loadIcon(props.name).catch(_ => null)
})
</script>

<template>
  <Iconify v-if="icon" :icon="icon" class="inline-block"/>
</template>