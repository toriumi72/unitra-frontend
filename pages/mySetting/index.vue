<script setup lang="ts">
import profile from '~/profile.json'
const {
  getUserData,
} = useStore()
const {
  loggedInUser,
  signOut,
} = useAuth()

const userData = ref<any>(null)
onMounted(() => {
  getUserData()
  .then((res: any) => {
    userData.value = res
    console.log(res)
  })
  .catch((err: any) => {
    console.log(err)
  })
  console.log(loggedInUser.value)
})

const onSignOut = async () => {
  try {
    await signOut()
    alert("ログアウトしました")
  } catch (error) {
    console.log(error)
    console.log("error")
  }
}

const profileData: any = ref(profile)

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
          <div class="text-lg">
            {{ loggedInUser.uid }}
          </div>
          <div class="text-xs">
            {{ profileData.university }}
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