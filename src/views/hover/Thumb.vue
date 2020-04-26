<template>
  <div class="app-container page-Thumb">
    <aside>
      这种悬停效果基于伪阴影效果并且基于
      CSS3，此外就没有什么要说的了。它最适合那些需要互动的简单元素。
      <br /><br />
      <a href="https://codepen.io/pirrera/details/tKFhI" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <div class="data-container">
      <div class="thumb">
        <a href="#">
          <span>the optimist lives on</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thumb",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
.page-Thumb {
  .data-container {
    background: #ddd;
    background: linear-gradient(#ddd, #e8e8e8);
    font-family: "Open Sans", sans-serif;
    height: 500px;
    margin: 0;
  }

  .thumb {
    width: 400px;
    height: 300px;
    margin: 70px auto;
    perspective: 1000px;
  }

  .thumb a {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("https://d13yacurqjgara.cloudfront.net/users/269311/screenshots/1508393/the_optimist_lives_on_by_huanle-d6yprp1_o_1x.jpg");
    background-size: 0, cover;
    transform-style: preserve-3d;
    transition: all 0.5s;
  }

  .thumb:hover a {
    transform: rotateX(80deg);
    transform-origin: bottom;
  }
  .thumb a:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 36px;
    background: inherit;
    background-size: cover, cover;
    background-position: bottom;
    transform: rotateX(90deg);
    transform-origin: bottom;
  }
  .thumb a span {
    color: white;
    text-transform: uppercase;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    font: bold 12px/36px "Open Sans";
    text-align: center;
    transform: rotateX(-89.99deg);
    transform-origin: top;
    z-index: 1;
  }
  .thumb a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 100px 50px rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    opacity: 0.15;
    transform: rotateX(95deg) translateZ(-80px) scale(0.75);
    transform-origin: bottom;
  }

  .thumb:hover a:before {
    opacity: 1;
    box-shadow: 0 0 25px 25px rgba(0, 0, 0, 0.5);
    transform: rotateX(0) translateZ(-60px) scale(0.85);
  }
}
</style>
