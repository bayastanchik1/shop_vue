<template>
  <header class="header mt-[43px] pb-[43px]">
    <div class="container">
      <div class="header__content flex justify-between items-center">
        <div class="header__logo flex items-center gap-2">
          <router-link to="/">
            <img src="/svg/logo.svg" alt="" />
          </router-link>
          <div>
            <h3>VUE</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <nav class="header__nav flex justify-between items-center w-[338px]">
          <router-link to="/basket">
            <li class="flex items-center gap-2">
              <img src="/svg/basket.svg" alt="" />
              1205 руб.
            </li>
          </router-link>
          <router-link to="/favorite">
            <li class="flex items-center gap-2">
              <img src="/svg/love.svg" alt="" />
              Закладки
            </li>
          </router-link>
          <router-link to="/account">
            <li class="flex items-center gap-2">
              <img src="/svg/love.svg" alt="" />
              Профиль
            </li>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style>
.header {
  border-bottom: 1px solid rgb(234, 234, 234);
}
</style>
