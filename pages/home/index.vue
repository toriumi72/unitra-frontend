<script setup lang="ts">
const goodsList = ref([
  {
    "id": 1,
    "name": "Vintage Leather Jacket",
    "image_url": "https://example.com/images/vintage-leather-jacket.jpg",
    "price": 8500,
    "description": "A stylish vintage leather jacket in excellent condition."
  },
  {
    "id": 2,
    "name": "Apple iPhone 12 Pro Max",
    "image_url": "https://example.com/images/iphone-12-pro-max.jpg",
    "price": 90000,
    "description": "Apple iPhone 12 Pro Max 128GB, used but in great condition."
  },
  {
    "id": 3,
    "name": "Nintendo Switch Console",
    "image_url": "https://example.com/images/nintendo-switch.jpg",
    "price": 25000,
    "description": "Nintendo Switch Console with Neon Blue & Red Joy-Con Controllers."
  },
  {
    "id": 4,
    "name": "Sony WH-1000XM4 Wireless Headphones",
    "image_url": "https://example.com/images/sony-wh-1000xm4.jpg",
    "price": 18000,
    "description": "Sony WH-1000XM4 Wireless Noise-Canceling Over-Ear Headphones, like new."
  },
  {
    "id": 5,
    "name": "GoPro HERO9 Black",
    "image_url": "https://example.com/images/gopro-hero9-black.jpg",
    "price": 40000,
    "description": "GoPro HERO9 Black Action Camera with multiple accessories included."
  },
  {
    "id": 6,
    "name": "KitchenAid Artisan Stand Mixer",
    "image_url": "https://example.com/images/kitchenaid-artisan-mixer.jpg",
    "price": 30000,
    "description": "KitchenAid Artisan Series 5-Qt. Stand Mixer with Pouring Shield, barely used."
  },
  {
    "id": 7,
    "name": "Dyson V11 Cordless Vacuum",
    "image_url": "https://example.com/images/dyson-v11.jpg",
    "price": 60000,
    "description": "Dyson V11 Torque Drive Cordless Vacuum Cleaner, great for pet owners."
  },
  {
    "id": 8,
    "name": "Fujifilm X-T4 Mirrorless Camera",
    "image_url": "https://example.com/images/fujifilm-x-t4.jpg",
    "price": 120000,
    "description": "Fujifilm X-T4 Mirrorless Digital Camera Body, includes extra battery and charger."
  },
  {
    "id": 9,
    "name": "BOSE SoundLink Revolve Bluetooth Speaker",
    "image_url": "https://example.com/images/bose-soundlink-revolve.jpg",
    "price": 15000,
    "description": "BOSE SoundLink Revolve Portable Bluetooth Speaker, perfect for outdoor use."
  },
  {
    "id": 10,
    "name": "IKEA Poäng Armchair",
    "image_url": "https://example.com/images/ikea-poang-armchair.jpg",
    "price": 5000,
    "description": ""
  }
])

</script>

<template>
  <div v-for="(goodsItem, index) of goodsList">
    <button @click="navigateTo(`/chatList/${goodsItem.id}`)" class="flex gap-6">
      <div>
        {{ goodsItem.id }}
      </div>
      <div>
        {{ goodsItem.name }}
      </div>
      <div>
        {{ goodsItem.price }}
      </div>
      <div>
        {{ goodsItem.description }}
      </div>
    </button>
  </div>
</template>

<style scoped>

</style>