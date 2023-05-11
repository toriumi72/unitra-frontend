<script setup lang="ts">
const {
  getProfile,
  addBookItem
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

const tabArr = ref([
  "全て",
  "プログラミング",
  "物理",
  "数学",
  "化学",
  "生物",
  "地学",
  "地理",
  "世界史",
  "歴史",
])
const bookItemAddData = ref({
  condition: "",
  description: "",
  imageUrl: "",
  name: "",
  price: 0,
  shipping: "",
  soled: false,
  sellerId: loggedInUser.value.uid,
  negotiable: false,
  tags: [],
  usedClass: "",
  isPurchased: false,
  isDelivered: false,
})
const onAddBookItem = () => {
  addBookItem(bookItemAddData.value)
}
</script>

<template>
  <div>
    logged:{{ loggedInUser }}
  </div>
  <div>
    userProfile:{{ userProfile }}
  </div> 
  <div>
    <div class="border">
      <div>
        <input type="text" v-model="bookItemAddData.name" placeholder="name">
      </div>
      <div>
        <label><input type="radio" v-model="bookItemAddData.condition" value="良い" checked>良い</label>
        <label><input type="radio" v-model="bookItemAddData.condition" value="普通">普通</label>
        <label><input type="radio" v-model="bookItemAddData.condition" value="悪い">悪い</label>
      </div>
      <div>
        <input type="text" v-model="bookItemAddData.description" placeholder="description">
      </div>
      <div>
        <input type="text" v-model="bookItemAddData.imageUrl" placeholder="imageUrl">
      </div>
      <div>
        <input type="text" v-model="bookItemAddData.price" placeholder="price">
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            v-model="bookItemAddData.negotiable"
          />
          値引き相談可
        </label>
      </div> 
      <div>
        <label v-for="tag in tabArr" :key="tag">
          <input
            type="checkbox"
            :value="tag"
            v-model="bookItemAddData.tags"
          />
          {{ tag }}
        </label>
      </div>
      <div>
        <input type="text" v-model="bookItemAddData.usedClass" placeholder="usedClass">
      </div>
      <button @click="onAddBookItem">
        BookItemを追加
      </button>
      <div>
        {{ bookItemAddData }}
      </div>
    </div>
  </div>
  
  <SwipeMenu />
</template>

<style scoped>

</style>