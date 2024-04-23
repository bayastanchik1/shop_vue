<template>
  <div class="hero mt-[3.45pc] mb-[4pc]">
    <div class="container">
      <div class="hero__content">
        <div class="hero__content__left flex justify-between">
          <div class="flex flex-col">
            <div class="w-[99px] h-[40px]">
              <img src="/svg/adidasAndDisney.svg" alt="" />
            </div>
            <h1>
              Stan Smith,<br />
              <span>Forever!</span>
            </h1>
            <button>Купить</button>
          </div>
          <img src="/images/image 6.png" alt="" />
        </div>
        <div class="hero__content__right"></div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.hero__content {
  border-radius: 20px;

  background: rgb(244, 239, 233);
}
.hero__content__left {
  padding-left:30px;
  h1 {
    font-family: Inter;
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0%;
    text-align: left;
    span {
      color: rgb(165, 211, 100);
    }
  }
  button {
    border-radius: 110px;
    padding: 14px 17px;
    background: rgb(165, 211, 100);
    color: rgb(255, 255, 255);
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
