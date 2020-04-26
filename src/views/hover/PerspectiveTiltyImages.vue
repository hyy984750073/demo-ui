<template>
  <div class="app-container page-PerspectiveTiltyImages">
    <aside>
      Henry Desroches
      创建了这种悬停效果，但并没打算把它当成产品来发布。实际上这是一个实验，一开始是为了习惯
      CSS 中的过渡效果函数，但最后的成品效果太好了，所以人们开始在网站上使用它。
      <br /><br />
      <a href="https://codepen.io/xdesro/details/mBmgNj" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <div class="data-container">
      <div translate="no">
        <div class="side left"></div>
        <div class="side right"></div>
        <div class="wrapper">
          <div class="front image"></div>
          <div class="back image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerspectiveTiltyImages",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
.page-PerspectiveTiltyImages {
  .data-container {
    background: #111;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 700px;
  }
  .side {
    position: absolute;
    width: 50vw;
    top: 0;
    bottom: 0;
    z-index: 10;
    &.left {
      left: 0;
      &:hover {
        & ~ .wrapper {
          .front {
            transform: matrix3d(
                0.94,
                0,
                0.34,
                -0.0002,
                0,
                1,
                0,
                0,
                -0.34,
                0,
                0.94,
                0,
                1,
                0,
                10,
                1
              )
              translateX(-10px);
          }
          .back {
            transform: matrix3d(
                0.94,
                0,
                0.34,
                -0.00025,
                0,
                1,
                0,
                0,
                -0.34,
                0,
                0.94,
                0,
                1,
                0,
                10,
                1
              )
              translateX(30px);
          }
        }
      }
    }
    &.right {
      right: 0;
      &:hover {
        & ~ .wrapper {
          .front {
            transform: matrix3d(
                0.94,
                0,
                0.34,
                0.0002,
                0,
                1,
                0,
                0,
                -0.34,
                0,
                0.94,
                0,
                1,
                0,
                10,
                1
              )
              translateX(30px);
          }
          .back {
            transform: matrix3d(
                0.94,
                0,
                0.34,
                0.0005,
                0,
                1,
                0,
                0,
                -0.34,
                0,
                0.94,
                0,
                1,
                0,
                10,
                1.1
              )
              translateX(-100px);
          }
        }
      }
    }
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .image {
    perspective: 200px;
    transition: all 0.2s ease;
    background-image: url("https://images.unsplash.com/photo-1504492729478-4ea346b648ae?dpr=1&auto=compress,format&fit=crop&w=376&h=502&q=80&cs=tinysrgb&crop=");
    height: 300px;
    width: 500px;
    background-size: cover;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.8);
  }
  .front {
    margin-right: 50px;
    z-index: 1;
  }
  .back {
    margin-left: 100px;
    margin-top: -150px;
    background-position: bottom;
  }
}
</style>
