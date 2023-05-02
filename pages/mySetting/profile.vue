<script setup lang="ts">
import type { LoggedInUser, UserProfile } from '@/types'
const {
  getProfile,
  addProfile,
  updateProfile,
} = useStore()
const {
  loggedInUser,
  userProfile,
  signOut,
} = useAuth()
const onUpdateProfile = async () => {
  try {
    if (profileData.value) {
      await updateProfile(loggedInUser.value, profileData.value)
      userProfile.value = profileData.value
    }
  } catch (error) {
    console.log(error)
    console.log("error")
  }
}

const profileData = ref<any | null>(null)
onMounted(async () => {
  await getProfile(loggedInUser.value)
    .then((res) => {
      if (res) {
        profileData.value = res
      }
    })
    .catch((error) => {
      console.error("Failed to get profile:", error)
    })
})
</script>

<template>
  <ClientOnly>
    <div>
      {{ userProfile }}
    </div>
    <div>
      {{ profileData }}
    </div>
    <div v-if="profileData">
      <input v-model="profileData.displayName" type="text">
    </div>
    <div class="bg-gray-100 min-h-screen">
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-2xl font-bold mb-4">プロフィール編集</h1>
        <div class="bg-white p-6 rounded shadow">
          <form v-if="profileData" @submit.prevent="onUpdateProfile">
            <div class="mb-4">
              <label class="block mb-2 text-gray-700">ユーザー名</label>
              <input
                type="text"
                v-model="profileData.displayName"
                placeholder="名前を入力してください"
                class="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-gray-700">メールアドレス</label>
              <input
                type="email"
                v-model="profileData.email"
                placeholder="メールアドレスを入力してください"
                class="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-gray-700">自己紹介</label>
              <textarea
                v-model="profileData.selfIntroduction"
                placeholder="自己紹介を入力してください"
                class="w-full border border-gray-300 p-2 rounded h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              更新
            </button>
          </form>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped></style>
