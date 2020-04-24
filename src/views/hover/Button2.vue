<template>
  <div class="app-container page-button2">
    <aside>
      David Conner 整理了一份 CSS
      图像悬停效果的集合，帮助大家轻松按需取用。这些效果完全基于 CSS3 和 HTML5。

      <br /><br />你可以根据网站的设计自定义悬停效果，使其与页面完美融合。这些效果还可以扩展，并且在移动设备上也有出色的表现。David
      Conner 调整了效果背后的代码，你直接拿来用即可。 <br /><a
        href="https://codepen.io/bhautikbharadava/pen/OdPzdW"
        target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <section class="buttons">
      <div class="container">
        <a href="https://twitter.com/Dave_Conner" class="btn btn-1">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Hover
        </a>
        <!--svg hover inspired by https://codepen.io/karimbalaa/pen/qERbBY?editors=110 -->
        <!--End of Button 1 -->

        <a href="https://twitter.com/Dave_Conner" class="btn btn-2">Hover</a>
        <!--End of Button 2 -->

        <a href="https://twitter.com/Dave_Conner" class="btn btn-3">Hover</a>
        <!--End of Button 3 -->

        <a href="https://twitter.com/Dave_Conner" class="btn btn-4"
          ><span>Hover</span></a
        >
        <!--End of Button 4 -->

        <a href="https://twitter.com/Dave_Conner" class="btn btn-5">Hover</a>
        <!--End of Button 5 -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HoverButton2",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
.page-button2 {
  $red: #e1332d;
  $white: #fff;

  * {
    box-sizing: inherit;
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease;
  }

  html,
  body {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  // Main wrap
  .buttons {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    width: 100%;
  }

  // Button wrap
  .container {
    background: $red;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em 1em;
    text-align: center;
    height: 500px;

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  //default button
  .btn {
    color: #fff;
    cursor: pointer;
    // display: block;
    font-size: 16px;
    font-weight: 400;
    line-height: 45px;
    margin: 0 0 2em;
    max-width: 160px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    @media (min-width: 600px) {
      margin: 0 1em 2em;
    }

    &:hover {
      text-decoration: none;
    }
  }

  //button-1
  .btn-1 {
    background: darken($red, 1.5%);
    font-weight: 100;

    svg {
      height: 45px;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    rect {
      fill: none;
      stroke: #fff;
      stroke-width: 2;
      stroke-dasharray: 422, 0;
      transition: all 0.35s linear;
    }
    &:hover {
      background: rgba($red, 0);
      font-weight: 900;
      letter-spacing: 1px;

      rect {
        stroke-width: 5;
        stroke-dasharray: 15, 310;
        stroke-dashoffset: 48;
        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }

  //button-2
  .btn-2 {
    letter-spacing: 0;
    &:hover,
    &:active {
      letter-spacing: 5px;
    }
    &:after,
    &:before {
      backface-visibility: hidden;
      border: 1px solid rgba(#fff, 0);
      bottom: 0px;
      content: " ";
      display: block;
      margin: 0 auto;
      position: relative;
      transition: all 280ms ease-in-out;
      width: 0;
    }
    &:hover:after,
    &:hover:before {
      backface-visibility: hidden;
      border-color: #fff;
      transition: width 350ms ease-in-out;
      width: 70%;
    }

    &:hover:before {
      bottom: auto;
      top: 0;
      width: 70%;
    }
  }

  //button -3
  .btn-3 {
    background: lighten($red, 3%);
    border: 1px solid darken($red, 4%);
    box-shadow: 0px 2px 0 darken($red, 5%), 2px 4px 6px darken($red, 2%);
    font-weight: 900;
    letter-spacing: 1px;
    transition: all 150ms linear;
    &:hover {
      background: darken($red, 1.5%);
      border: 1px solid rgba(#000, 0.05);
      box-shadow: 1px 1px 2px rgba(#fff, 0.2);
      color: lighten($red, 18%);
      text-decoration: none;
      text-shadow: -1px -1px 0 darken($red, 9.5%);
      transition: all 250ms linear;
    }
  }

  //button-4
  .btn-4 {
    border: 1px solid;
    overflow: hidden;
    position: relative;

    span {
      z-index: 20;
    }

    &:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: 1;
    }
    &:hover {
      &:after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }

  //button-5
  .btn-5 {
    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    &:hover {
      border: 1px solid;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
        0 0 20px rgba(255, 255, 255, 0.2);
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      text-shadow: 1px 1px 2px #427388;
    }
  }
}
</style>
