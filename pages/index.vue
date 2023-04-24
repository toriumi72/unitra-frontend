<script setup lang="ts">
const { loggedInUser } = useAuth()
</script>

<template>
  <div>
    logged{{ loggedInUser }}
  </div>
</template>

<style scoped>

</style>