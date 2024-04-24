<template>
  <div class="allProduct__content__body__card">
    <v-card class="mx-auto" max-width="344" hover>
      <v-card-item>
        <v-card-text>
          <img :src="image" alt="" />
        </v-card-text>
        <v-card-title>название: {{ title }}</v-card-title>
        <v-card-title>стоимость:{{ price }}$</v-card-title>
        <v-card class="flex mt-[20px]">
          <v-btn class="ml-[20px] mr-[25px]" variant="outlined">
            в избранное
          </v-btn>
          <v-btn variant="outlined"> в корзину </v-btn>
        </v-card>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useBasketProduct } from "../store/store";
const basketStore = useBasketProduct();
const props = defineProps({
  title: String,
  image: String,
  price: Number,
});
basketStore.addProductToBasket(1)
</script>

<style lang="scss"></style>
