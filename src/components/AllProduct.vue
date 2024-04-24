<template>
  <section class="allProduct">
    <div class="container">
      <div class="allProduct__content">
        <div
          class="allProduct__content__head flex justify-between items-center"
        >
          <h1>Все кроссовки</h1>
          <div class="flex gap-[55px]">
            <v-menu transition="slide-y-transition">
              <template v-slot:activator="{ props }">
                <v-btn color="white" v-bind="props"> сортировка </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, i) in itemsMenu" :key="i">
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <input type="text" name="" id="" placeholder="Поиск..." />
          </div>
        </div>

        <div
          class="allProduct__content__body grid grid-cols-3 gap-[20px] mt-[100px]"
        >
          <ProductCard
            :title="item.title"
            :image="item.imageUrl"
            :price="item.price"
            :id="item.id"
            v-for="(item, idx) in items"
            :key="idx"
            name=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import ProductCard from "../components/ProductCard.vue";
import axios from "axios";
const items = ref([]);
const itemsMenu = ref([
  "цена по возрастанию",
  "цена по убыванию",
  "сортировка",
]);
onMounted(async () => {
  try {
    const { data } = await axios.get(
      "https://0ba3c8ee34fc457f.mokky.dev/items1"
    );
    items.value = data;
  } catch (error) {
    console.log(error);
  }
  console.log(items.value);
});
</script>

<style lang="scss">
.allProduct {
  &__content {
    &__head {
      h1 {
        color: rgb(0, 0, 0);
        font-family: Inter;
        font-size: 32px;
        font-weight: 700;
        line-height: 39px;
        letter-spacing: 0%;
        text-align: left;
      }
      input {
        box-sizing: border-box;
        border: 1px solid rgb(243, 243, 243);
        border-radius: 10px;
        color: rgb(196, 196, 196);
        font-size: 14px;
        font-weight: 400;
        background: url("/public/svg/search.svg") no-repeat 10px;
        padding-left: 35px;
        gap: 10px;
        width: 250px;
        height: 45px;
      }
    }
    &__body {
    }
  }
}
</style>
