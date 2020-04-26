<template>
  <div class="app-container page-creative-menu">
    <aside>
      菜单是网站上互动性最强的部分之一，因此值得网站管理员的关注。为了让它以最简单的方式弹出来，请使用
      CSS 图像悬停效果，比如说 Abdel Rhman 创建的这个效果就很不错。该效果基于
      CSS3，可在所有类型的接口上使用。
      <br /><br />
      <a href="https://codepen.io/abdelRhman345/pen/PXMmdv" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Portifilio</a></li>
      <li><a href="#">Content</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CreativeMenu",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
.page-creative-menu {
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
  }

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    li {
      list-style: none;
      a {
        position: relative;
        display: block;
        text-transform: uppercase;
        margin: 20px 0;
        padding: 10px 20px;
        text-decoration: none;
        color: #262626;
        font-family: sans-serif;
        font-size: 18px;
        font-weight: 600;
        transition: 0.5s;
        z-index: 1;
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-top: 2px solid #262626;
          border-bottom: 2px solid #262626;
          transform: scaleY(2);
          opacity: 0;
          transition: 0.3s;
        }
        &:after {
          content: "";
          position: absolute;
          top: 2px;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #262626;
          transform: scale(0);
          opacity: 0;
          transition: 0.3s;
          z-index: -1;
        }
        &:hover {
          color: #fff;
          &:before {
            transform: scaleY(1);
            opacity: 1;
          }
          &:after {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
