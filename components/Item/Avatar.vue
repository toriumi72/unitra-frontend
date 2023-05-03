<script setup lang="ts">
const {
  loggedInUser,
  userProfile
} = useAuth()
type Props = {
  photoURL: any
}
const props = defineProps<Props>()
</script>
<template>
  <div class="w-[3em] h-[3em] rounded-full shadow-xl overflow-hidden">
    <img v-if="userProfile" class="w-full h-full object-cover" :src="userProfile.profileImageUrl" alt="">
    <img v-else class="w-full h-full object-cover" src="/images/test.png" alt="">
  </div>
</template>
<style scoped></style>