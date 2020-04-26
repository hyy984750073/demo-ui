<template>
  <div class="app-container page-animation">
    <aside>
      Nicola Pressi
      在制作这个动画悬停效果时想出了一些很好的点子。它适合自由职业者，也可以用来展示自己过去的职业经历。
      <br /><br />
      这种 CSS
      图像悬停效果非常适合首页上的欢迎消息，或者用来在登录部分添加个性化效果。对于在线商店来说，它可以用来强调一个邀约或限时促销活动。
      <br /><br />
      <a href="https://codepen.io/ibanez182/pen/rOmYKq" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <div class="data-container">
      <div class="badge">
        <div class="text">’Hallo!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Animation",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
@import url(https://fonts.googleapis.com/css?family=Raleway:300);
.page-animation {
  $primary-color: rebeccapurple;
  $easing: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  $base-size: 20rem;

  html {
    height: 100%;

    @media (max-width: ($base-size * 1.6)) {
      font-size: 12px;
    }
  }

  .data-container {
    background: linear-gradient(#333, #111);
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .badge {
    display: block;
    position: relative;
    width: $base-size;
    height: $base-size;
    cursor: pointer;
    background: url(https://source.unsplash.com/random/1000x1000) no-repeat 100%
      50%;
    background-size: 120%;
    border-radius: 50%;
    transition: $easing;
    box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.75);

    &:hover {
      box-shadow: 0px 0.5rem 2rem rgba(0, 0, 0, 0.75);
      background-position: 0% 50%;

      .text {
        transform: rotate(-45deg) translate(0px) rotate(-315deg);
        background: rgba($primary-color, 0.5);
        width: $base-size;
        letter-spacing: 1rem;
        line-height: $base-size;
        height: $base-size;
        margin-top: -($base-size / 2);
        margin-left: -($base-size / 2);
        transition: $easing, letter-spacing 1.5s ease-out;
      }
    }

    .text {
      display: block;
      position: absolute;
      width: ($base-size / 2);
      height: ($base-size / 2);
      line-height: ($base-size / 2);
      left: 50%;
      top: 50%;
      margin-top: -($base-size / 4);
      margin-left: -($base-size / 4);
      font-size: 2rem;
      font-family: Raleway, sans-serif;
      text-align: center;
      color: #fff;
      border-radius: 50%;
      background: $primary-color;
      transform: rotate(-180deg) translate(-($base-size / 2)) rotate(180deg);
      box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.5);
      transition: $easing;
    }
  }
}
</style>
