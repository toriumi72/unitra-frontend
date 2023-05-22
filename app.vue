<script setup lang="ts">
const {
  loggedInUser,
  userProfile,
} = useAuth()

const {
  getProfile,
  addProfile,
  updateProfile,
} = useStore()

watch(loggedInUser, async (newValue) => {
  console.log("loggedInUser", newValue)
  if (newValue) {
    await getProfile(newValue)
      .then((res) => {
        if (res) {
          userProfile.value = null
          userProfile.value = res
          console.log("userProfileを取得しました")
        }
      })
      .catch((error) => {
        console.error("Failed to get profile:", error)
      })
  } else {
    console.log("ログインしてください")
  }
})


</script>
<template>
  <div>
    <VitePwaManifest />
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <!-- <div v-else>
      <ProfileRegister />
    </div> -->
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
  transition: opacity 0s ease;
  transition-delay: 0s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>