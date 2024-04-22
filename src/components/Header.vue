<template>
  <header class="header mt-[43px] pb-[43px]">
    <div class="container">
      <div class="header__content flex justify-between items-center">
        <div class="header__logo flex items-center gap-2">
          <img src="/svg/logo.svg" alt="" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <nav class="header__nav flex justify-between items-center w-[338px]">
          <li class="flex items-center gap-2">
            <img src="/svg/basket.svg" alt="" />
            1205 руб.
          </li>
          <li class="flex items-center gap-2">
            <img src="/svg/love.svg" alt="" />
            Закладки
          </li>
          <li class="flex items-center gap-2">
            <img src="/svg/love.svg" alt="" />
            Профиль
          </li>
        </nav>
      </div>
    </div>
  </header>
</template>
<script setup></script>
<style>
.header {
  border-bottom: 1px solid rgb(234, 234, 234);
}
</style>
