<script setup lang="ts">
import { ref } from 'vue'
const {
  addProfile,
} = useStore()
const {
  loggedInUser,
  userProfile
} = useAuth()

const addProfileData = ref({
  displayName: '',
  email: '',
  faculty: '',
  university: '',
  selfIntroduction: ''
})

const currentStep = ref(0)

const onAddProfile = async () => {
  try {
    await addProfile(loggedInUser.value, addProfileData.value)
    userProfile.value = addProfileData.value
    navigateTo('/mySetting')
  } catch (error) {
    console.log(error)
    console.log("error")
  }
}

const onNextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

const onPrevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const isCurrentStepFilled = computed(() => {
  switch (currentStep.value) {
    case 0:
      return addProfileData.value.displayName.trim() !== ''
    case 1:
      return addProfileData.value.email.trim() !== ''
    case 2:
      return addProfileData.value.university.trim() !== ''
    case 3:
      return addProfileData.value.faculty.trim() !== ''
    case 4:
      return addProfileData.value.selfIntroduction.trim() !== ''
    default:
      return false
  }
})
// const isCurrentStepFilled = computed(() => {
//   return addProfileData.value[Object.keys(addProfileData.value)[currentStep.value]].trim() !== ''
// })
</script>

<template>
  <div class="mx-auto max-w-md">
    <div class="p-6 bg-white rounded">
      <h1 class="mb-4 text-2xl font-semibold">プロフィール登録</h1>
      <div v-if="currentStep === 0">
        <label class="block">名前</label>
        <input v-model="addProfileData.displayName" placeholder="名前を入力してください" type="text" class="w-full p-2 border rounded">
      </div>
      <div v-else-if="currentStep === 1">
        <label class="block">メールアドレス</label>
        <input v-model="addProfileData.email" placeholder="メールアドレスを入力してください" type="email" class="w-full p-2 border rounded">
      </div>
      <div v-else-if="currentStep === 2">
        <label class="block">大学名</label>
        <input v-model="addProfileData.university" placeholder="大学名を入力してください" type="text" class="w-full p-2 border rounded">
      </div>
      <div v-else-if="currentStep === 3">
        <label class="block">学部</label>
        <input v-model="addProfileData.faculty" placeholder="学部を入力してください" type="text" class="w-full p-2 border rounded">
      </div>
      <div v-else-if="currentStep === 4">
        <label class="block">自己紹介</label>
        <textarea v-model="addProfileData.selfIntroduction" placeholder="自己紹介を入力してください" class="w-full h-32 p-2 border rounded"></textarea>
      </div>

      <div class="flex justify-between mt-4">
        <button 
          @click="onPrevStep" 
          class="py-2 px-4 font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded" 
          :disabled="currentStep === 0"
        >
          戻る
        </button>
        <button
          v-if="currentStep < 4"
          @click="onNextStep"
          class="py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-600 rounded"
          :disabled="!isCurrentStepFilled"
        >
          次に進む
        </button>
        <button
          v-else
          @click="onAddProfile"
          class="py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-600 rounded"
        >
          登録
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>


