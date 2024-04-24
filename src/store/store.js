import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasketProduct = defineStore("productBasket", () => {
  const product = ref([]);

  function addProductToBasket(data) {
    product.value = [...product.value, data];
  }
  function deleteProductToBasket(data) {
    product.value = product.value.filter((el) => el.id != data);
  }
  return {
    product,
    addProductToBasket,
    deleteProductToBasket,
  };
});
