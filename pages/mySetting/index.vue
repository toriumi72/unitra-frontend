<script setup lang="ts">
import profile from '~/profile.json'
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

const onSignOut = async () => {
  try {
    await signOut()
    alert("ログアウトしました")
  } catch (error) {
    console.log(error)
    console.log("error")
  }
}

const profileData: any = ref(null)

const buttonList = ref([
  {
    name: "購入履歴",
    icon: "system-uicons:files-history",
    root: "history",
  },
  {
    name: "支払い方法",
    icon: "fluent:payment-24-regular",
    root: "payment",
  },
  {
    name: "設定",
    icon: "solar:settings-linear",
    root: "setting",
  },
  {
    name: "ヘルプ",
    icon: "material-symbols:help-outline-rounded",
    root: "help",
  },
])

</script>

<template>
  <div class="p-4">
    <div class="mb-5">
      <button
        @click="navigateTo(`mySetting/profile`)"
        class="flex items-center gap-3 w-full"
      >
        <ItemAvatar photoURL="" class="text-lg" />
        <div v-if="loggedInUser" class="flex flex-col text-left">
          <div v-if="userProfile" class="text-lg">
            {{ userProfile.displayName }}
          </div>
          <div v-else>
            No Name
          </div>
          <div v-if="userProfile" class="text-xs">
            {{ userProfile?.university }}
          </div>
          <div v-else>
            No University
          </div>
        </div>
      </button>
    </div>
    <div class="mb-2">
      <ButtonAction @click="navigateTo(`mySetting/profile`)" class="p-[0.8em] w-full bg-[#E7E7FF] text-[#6B4EFF] text-sm">
        View Profile
      </ButtonAction>
    </div>
    <div>
      <div v-for="(buttonItem, index) of buttonList" class="">
        <button @click="navigateTo(`mySetting/${buttonItem.root}`)" class="flex gap-2 items-center py-4 w-full">
          <div>
            <BlockIcon :name="buttonItem.icon" class="text-xl" />
          </div>
          <div class="">
            {{ buttonItem.name }}
          </div>
        </button>
      </div>
    </div>
    <div class="">
      <button @click="onSignOut" class="py-4 w-full">
        logout
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>