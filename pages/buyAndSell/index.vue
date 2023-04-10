<script setup lang="ts">
import goodsArr from '~/goodsList.json';
const goodsList:any = ref(goodsArr);
</script>

<template>
  <ClientOnly>
    <ListGoods class="mx-auto container px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <button v-for="goodsItem of goodsList">
        <ItemGoods :goodsItem="goodsItem" />
      </button>
    </ListGoods>
  </ClientOnly>
</template>

<style scoped>

</style>