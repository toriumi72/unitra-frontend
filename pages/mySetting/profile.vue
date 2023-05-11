<script setup lang="ts">
import { ref, onMounted } from 'vue'
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

const editingProfile = ref<UserProfile | null>(null)

const onUpdateProfile = async () => {
  try {
    if (editingProfile.value) {
      await updateProfile(loggedInUser.value, editingProfile.value)
      await getProfile(loggedInUser.value)
      .then((res) => {
        if (res) {
          userProfile.value = JSON.parse(JSON.stringify(res))
        }
      })
      .catch((error) => {
        console.error("Failed to get profile:", error)
      })
    }
  } catch (error) {
    console.log(error)
    console.log("error")
  }
}

onMounted(async () => {
  await getProfile(loggedInUser.value)
    .then((res) => {
      if (res) {
        editingProfile.value = JSON.parse(JSON.stringify(res))
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
      {{ editingProfile }}
    </div>
    <div v-if="editingProfile"  class="bg-gray-100 min-h-screen">
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-2xl font-bold mb-4">プロフィール編集</h1>
        <div class="bg-white p-6 rounded shadow">
          <form @submit.prevent="onUpdateProfile">
            <div class="mb-4">
              <label class="block mb-2 text-gray-700">ユーザー名</label>
              <input
                type="text"
                v-model="editingProfile.displayName"
                placeholder="名前を入力してください"
                class="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-gray-700">メールアドレス</label>
              <input
                type="email"
                v-model="editingProfile.email"
                placeholder="メールアドレスを入力してください"
                class="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-gray-700">大学名</label>
              <input
                type="text"
                v-model="editingProfile.university"
                placeholder="大学名を入力してください"
                class="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-gray-700">学部名</label>
              <input
                type="text"
                v-model="editingProfile.faculty"
                placeholder="学部名を入力してください"
                class="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-gray-700">自己紹介</label>
              <textarea
                v-model="editingProfile.selfIntroduction"
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
    <div v-else>
      <ProfileRegister />
    </div>
  </ClientOnly>
</template>

<style scoped></style>
