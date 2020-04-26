<template>
  <div class="app-container page-photo-modal">
    <aside>
      这是 CSS 图像悬停效果中的佼佼者，最早是从 CodePen Houston
      的一次演讲中诞生的资产。现在的版本是从最早的设计改编而成，现已向公众开放。
      <br /><br />
      <a href="https://codepen.io/shshaw/details/LBZyyM" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <div class="data-container">
      <div
        class="un-photo"
        style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/Vela-Stephen.jpg'); --row-total: 5;"
      >
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/Vela-Stephen.jpg"
        />

        <div class="un-photo__popup">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/Vela-Stephen.jpg"
          />
          <div class="un-photo__row" style="--row-index: 0; --random: 0.23">
            <div class="un-photo__row-inner"></div>
          </div>
          <div class="un-photo__row" style="--row-index: 1; --random: 0.72">
            <div class="un-photo__row-inner"></div>
          </div>
          <div class="un-photo__row" style="--row-index: 2; --random: 0.11">
            <div class="un-photo__row-inner"></div>
          </div>
          <div class="un-photo__row" style="--row-index: 3; --random: 0.50">
            <div class="un-photo__row-inner"></div>
          </div>
          <div class="un-photo__row" style="--row-index: 4; --random: 0.39;">
            <div class="un-photo__row-inner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoModal",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
.page-photo-modal {
  .data-container {
    display: flex;
    background: #181818;
    height: 600px;
  }

  img {
    max-width: 100%;
  }

  .un-photo {
    max-width: 150px;
    margin: auto;
    visibility: hidden; // position: relative;
    cursor: pointer;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    > img {
      visibility: visible;
      display: block;
      transition: opacity 0.3s linear,
        transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1) !important;
    }

    &:before {
      content: "";
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 2;
      visibility: visible;
      opacity: 0;
      transition: opacity 0.4s linear;
      pointer-events: none;
    }
  }

  .un-photo:hover {
    z-index: 999;

    > img {
      opacity: 1;
      transform: scale(1.2);
    }
  }

  /* ---------------------------------- */

  .un-photo__popup {
    z-index: 99;
    position: fixed;
    display: inline-block;
    width: 80%;
    max-width: 600px;
    max-height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: solid 1px red;
    pointer-events: none;
    background: inherit;
    visibility: visible;
    z-index: 999;

    img {
      opacity: 1;
      width: auto;
      height: auto;
      max-height: 100%;
      max-width: 100%;
      outline: solid 1px blue;
    }
  }

  @supports (--row-size: calc(100% / var(--row-total))) {
    .un-photo__popup {
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.4s linear;
    }

    .un-photo__row {
      --row-size: calc(100% / var(--row-total));
      position: absolute;
      width: 100%;
      left: 0%;
      top: calc(0% + (var(--row-size) * var(--row-index)));

      height: var(--row-size);
      background: inherit;
      overflow: hidden;

      transform-origin: 0 0; // transform: scale(0.5);
      transform-origin: calc(var(--random) * 50%) 50%;
      transform: scale(0.8) translate(0%, calc(var(--random) * 20%));

      transform: translate(0, 0) scale(1);
      animation-name: photo-bounce;
      animation-fill-mode: both;
      animation-direction: forwards;
      animation-delay: 0.1s;
      animation-duration: 0.4s;
      animation-timing-function: steps(1);
    }

    .un-photo__row-inner {
      opacity: 1;
      visibility: visible;
      position: absolute;
      background: inherit;
      width: 100%;
      height: calc(100% * var(--row-total));
      transform: translateY(
        calc(-1 * (100% / var(--row-total)) * var(--row-index))
      );
    }

    .un-photo:hover {
      .un-photo__popup {
        opacity: 1;
      }

      &:before {
        opacity: 0.4;
      }

      .un-photo__row {
        animation-name: photo-bounce2;
        animation-duration: 0.3s;
        animation-iteration-count: 1;
        animation-direction: reverse;
        animation-timing-function: steps(1);
      }
    }
  }

  @keyframes photo-bounce {
    25% {
      transform: translate(-10%, 0%) scale(1);
    }
    50% {
      transform: translate(10%, -2%) scale(1.3);
    }
    75% {
      transform: translate(-3%, 2%) scale(0.9);
    }
  }

  @keyframes photo-bounce2 {
    25% {
      transform: translate(5%, 0%) scale(1);
    }
    50% {
      transform: translate(-10%, -2%) scale(1.3);
    }
    75% {
      transform: translate(10%, 5%) scale(0.9);
    }
  }
}
</style>
