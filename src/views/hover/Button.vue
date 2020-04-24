<template>
  <div class="app-container page-button1">
    <aside>
      首先介绍的是按键悬停动画，也就是在指针悬停时创建一个动画轮廓。该效果由
      BhautikBharadavato 开发，用来强调那些行为召唤（call-toaction）按键。
      <br /><br />它很流畅，代码非常简单，可以缩短加载时间，还能轻松自定义。
      <p>
        <a href="https://codepen.io/davidicus/pen/emgQKJ" target="_blank"
          >点击在线编辑查看效果</a
        >
      </p>
    </aside>
    <div class="data-container">
      <span class="btn">Hover Me </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HoverButton",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
.page-button1 {
  .btn {
    cursor: pointer;
    position: relative;
    padding: 10px 20px;
    background: white;
    font-size: 28px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: all 1s;
    &:after,
    &:before {
      content: " ";
      width: 10px;
      height: 10px;
      position: absolute;
      border: 0px solid #fff;
      transition: all 1s;
      box-sizing: content-box;
    }
    &:after {
      top: -1px;
      left: -1px;
      border-top: 5px solid black;
      border-left: 5px solid black;
    }
    &:before {
      bottom: -1px;
      right: -1px;
      border-bottom: 5px solid black;
      border-right: 5px solid black;
    }
    &:hover {
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      // background:rgba(0,0,0,.5);
      // color:white;
      &:before,
      &:after {
        width: 100%;
        height: 100%;
        // border-color:white;
      }
    }
  }

  .data-container {
    background: #ffebee;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
