<template>
  <div class="app-container page-glowing-icon">
    <aside>
      发光图标是由 Diego Lopes
      创建的简单悬停效果。这个效果最适合设计精炼且色调较深的网站。这些效果可以为你的网站增添个性，而不会影响内容的简洁性，也不会拖累加载时间。
      <br /><br />
      <a href="https://codepen.io/dig-lopes/pen/WLVGda" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <div class="data-container">
      <ul>
        <li>
          <a href="#">
            <svg-icon icon-class="eye-open" />
          </a>
        </li>
        <li>
          <a href="#">
            <svg-icon icon-class="people" />
          </a>
        </li>
        <li>
          <a href="#">
            <svg-icon icon-class="example" />
          </a>
        </li>
        <li>
          <a href="#">
            <svg-icon icon-class="wechat" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlowingIcon",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
.page-glowing-icon {
  .data-container {
    margin: 0;
    padding: 0;
    background: #262626;
    height: 500px;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ul li {
    list-style: none;
    margin: 0 15px;
  }

  ul li a {
    position: relative;
    display: block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 63px;
    background: #333;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: 0.5s;
  }

  ul li a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #ffee10;
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  ul li a:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #ffee10;
  }

  ul li a:hover {
    color: #ffee10;
    box-shadow: 0 0 5px #ffee10;
    text-shadow: 0 0 5px #ffee10;
  }
}
</style>
