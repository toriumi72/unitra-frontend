<script setup lang="ts">
type Props = {
  photoURL: any
}
const props = defineProps<Props>()

</script>
<template>
  <div class="w-[3em] h-[3em] rounded-full shadow-xl overflow-hidden">
    <img class="w-full h-full object-cover" src="/images/test.png" alt="">
  </div>
</template>
<style scoped></style>