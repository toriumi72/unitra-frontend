<script setup lang="ts">
const { loggedInUser } = useAuth()
const { $fireAuth } = useNuxtApp()
console.log($fireAuth,"$fireAuth")
console.log(loggedInUser.value,"loggedInUser")
</script>
<template>
  <div>
    <!-- <template v-if="loggedInUser">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
    <template v-else>
      <Login />
      logged{{ loggedInUser }}
    </template> -->
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