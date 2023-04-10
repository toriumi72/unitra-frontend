<script setup lang="ts">
const route = useRoute()
const itemId = ref(route.params.item_id)
</script>

<template>
  <div>
    {{ itemId }}
  </div>
</template>

<style scoped>

</style>