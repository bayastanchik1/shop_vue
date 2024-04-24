import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasketProduct = defineStore("productBasket", () => {
  const product = ref([]);

  function addProductToBasket(data) {
    product.value = [...product.value, data];
  }

  return {
    product,
    addProductToBasket,
  };
});
