<template>
  <section class="basket h-[100vh]">
    <div class="container">
      <div v-if="items.length === 0" class="flex justify-center mt-[10pc]">
        <center class="flex flex-col items-center gap-3">
          <div class="w-[70px] h-[70px]">
            <img src="/public/svg/smileNoFavorite.svg" alt="" />
          </div>
          <h1>У вас нет избранных продуктов</h1>
          <p>
            Вы нищеброд? <br />
            Оформите хотя бы один заказ.
          </p>
          <router-link to="/">
            <button class="basket__content__button mt-[1pc]">
              Вернуться назад
            </button>
          </router-link>
        </center>
      </div>
      <div v-else class="basket__content grid grid-cols-3">
        <FavoriveProductCard
          :title="item.title"
          :image="item.image"
          :price="item.price"
          :id="item.id"
          v-for="(item, idx) in items"
          :key="idx"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, watchEffect } from "vue";
import BasketProductCard from "../components/BasketProductCard.vue";
import { useBasketProduct } from "../store/store";
import FavoriveProductCard from "@/components/FavoriveProductCard.vue";

const basketStore = useBasketProduct();
const items = ref(basketStore.favorite);

watchEffect(() => {
  items.value = basketStore.favorite;
});
</script>
<style lang="scss">
.basket {
  &__content {
    &__button {
      border-radius: 18px;
      padding: 17px 25px;
      color: rgb(255, 255, 255);
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: center;
      background: rgb(157, 212, 88);
    }
  }
}
</style>
