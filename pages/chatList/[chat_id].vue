<script setup lang="ts">
const route = useRoute()
const chatId = ref(route.params.chat_id)
console.log(route.params.chat_id)
</script>

<template>
  <div>
    {{ chatId }}
  </div>
</template>

<style scoped>

</style>