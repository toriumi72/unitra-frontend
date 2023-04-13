<script setup lang="ts">
// type Props = {
//   icon: any
// }
// const props = defineProps<Props>()
</script>
<template>
  <button class="rounded-full overflow-hidden">
    <div class="py-[0.8em] flex items-center justify-center">
      <slot />
      <!-- <BlockIcon :name="props.icon" class="ml-1 w-[1.5em] h-[1.5em]" /> -->
    </div>
  </button>
</template>
<style scoped>

</style>