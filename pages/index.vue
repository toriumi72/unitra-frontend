<script setup lang="ts">
const {
  getProfile,
} = useStore()
const {
  loggedInUser,
  userProfile,
} = useAuth()
onMounted(async() => {
  // if (loggedInUser.value) {
  //   await getProfile(loggedInUser.value)
  //   .then((res) => {
  //     if (res) {
  //       userProfile.value = res
  //     } 
  //   })
  // }
  // else {
  //   console.log("ログインしてください")
  // } 
  console.log("userProfile", userProfile.value) 
})
</script>

<template>
  <div>
    logged:{{ loggedInUser }}
  </div>
  <div>
    userProfile:{{ userProfile }}
  </div> 
</template>

<style scoped>

</style>