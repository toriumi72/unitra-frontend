<script setup lang="ts">

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
html {
  touch-action: manipulation;
}
body * {
  position: relative;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
  transition-delay: 2s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>