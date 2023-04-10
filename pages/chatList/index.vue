<script setup lang="ts">
const chatList = ref([
  {
    "id": 1,
    "name": "Alice"
  },
  {
    "id": 2,
    "name": "Bob"
  },
  {
    "id": 3,
    "name": "Carol"
  },
  {
    "id": 4,
    "name": "David"
  },
  {
    "id": 5,
    "name": "Eve"
  },
  {
    "id": 6,
    "name": "Frank"
  },
  {
    "id": 7,
    "name": "Grace"
  },
  {
    "id": 8,
    "name": "Hank"
  },
  {
    "id": 9,
    "name": "Ivy"
  },
  {
    "id": 10,
    "name": "Jack"
  }
])


</script>

<template>
  <div>
    chatList
  </div>
  <div v-for="(chatItem, index) of chatList">
    <button @click="navigateTo(`/chatList/${chatItem.id}`)" class="flex gap-6">
      <div>
        {{ chatItem.id }}
      </div>
      <div>
        {{ chatItem.name }}
      </div>
    </button>
  </div>
</template>

<style scoped>

</style>