<template>
  <div class="app-container page-PortraitImage">
    <aside>
      Lab21 带来的这款悬停效果适合用来展示人像照片。该效果是使用自定义 CSS
      变量构建的。
      <br /><br />
      <a href="https://codepen.io/lab21/details/QQvPrX" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <div class="data-container">
      <div class="portrait" id="portrait">
        <div class="fill cover-img"></div>
        <div class="fill z-10 hover">
          <div class="fill cover-img hover-img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortraitImage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    var root = document.getElementById("portrait");

    var mouse_monitor = function(e) {
      let x = e.clientX / innerWidth;
      let y = e.clientY / innerHeight;

      let move_x = x > 0.5 ? "-30px" : "30px";
      let move_y = y > 0.5 ? "-20px" : "20px";

      root.style.setProperty("--translate-x", move_x);
      root.style.setProperty("--translate-y", move_y);
    };

    root.addEventListener("mousemove", mouse_monitor);
  }
};
</script>

<style lang="scss" scope>
.page-PortraitImage {
  .data-container {
    margin: 0;
    padding: 0;
    background-color: #222;
    --translate-x: 30px;
    --translate-y: -20px;
  }

  .portrait {
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    height: 600px;
    position: relative;
    overflow: hidden;

    &:hover {
      .hover {
        opacity: 0.4;
      }
      .hover-img {
        transform:translate(var(--translate-x), var(--translate-y));
      }
    }
  }

  .fill {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }

  .z-10 {
    z-index: 10;
  }

  .hover {
    transition: all 380ms cubic-bezier(0.16, 0.01, 0.77, 1);
    opacity: 0;
    //padding: 0 30px 20px 0;
  }

  .hover-img {
    transition: opacity, transform 320ms cubic-bezier(0.16, 0.01, 0.77, 1);

    &:after {
      content: "";
      @extend .fill;
      background-color: #ffeb3b;
      mix-blend-mode: color; //overlay, darken
    }
  }

  .cover-img {
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    background-image: url(https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7c08dc233ca06b278c5129d67cedb4c8);
  }
}
</style>
