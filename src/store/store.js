import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasketProduct = defineStore("productBasket", () => {
  const product = ref([]);
  const favorite = ref([]);

  function addProductToBasket(data) {
    product.value = [...product.value, data];
  }
  function addProductToFavorite(data) {
    favorite.value = [...favorite.value, data];
  }
  function deleteProductToBasket(data) {
    product.value = product.value.filter((el) => el.id != data);
  }
  function deleteProductToFarovites(data) {
    favorite.value = favorite.value.filter((el) => el.id != data);
  }
  return {
    product,
    favorite,
    addProductToFavorite,
    addProductToBasket,
    deleteProductToBasket,
    deleteProductToFarovites,
  };
});
