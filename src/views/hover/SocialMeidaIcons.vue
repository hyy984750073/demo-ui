<template>
  <div class="app-container page-SocialMeidaIcons">
    <aside>
      在线上营销推广活动中，你肯定要在社交媒体上推广内容。但是，人们在访问网站时往往会忽略那些社交媒体按钮，因为它们没有得到合适的强调。
      <br /><br />
      所以你应该使用悬停效果来引导用户点击这些按钮。来自 Ephraim Sangma
      的这个效果应该能完美适合你的需求，因此请尝试一下。
      <br /><br />
      <a href="https://codepen.io/ephs23/pen/NeQZGx" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <div class="data-container">
      <ul>
        <li>
          <a href="#"><svg-icon icon-class="wechat" /></a>
        </li>
        <li>
          <a href="#"><svg-icon icon-class="qq" /></a>
        </li>
        <li>
          <a href="#"><svg-icon icon-class="wechat" /></a>
        </li>
        <li>
          <a href="#"><svg-icon icon-class="qq" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMeidaIcons",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
.page-SocialMeidaIcons {
  .data-container {
    margin: 0;
    padding: 0;
    height: 500px;
    background: #262626;
  }

  ul {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ul li {
    list-style: none;
  }

  ul li a {
    width: 80px;
    height: 80px;
    background-color: #fff;
    text-align: center;
    line-height: 80px;
    font-size: 35px;
    margin: 0 10px;
    display: block;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: 3px solid #fff;
    z-index: 1;
  }

  ul li a .svg-icon {
    position: relative;
    color: #262626;
    transition: 0.5s;
    z-index: 3;
  }

  ul li a:hover .svg-icon  {
    color: #fff;
    transform: rotateY(360deg);
  }

  ul li a:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: 0.5s;
    z-index: 2;
  }

  ul li a:hover:before {
    top: 0;
  }

  ul li:nth-child(1) a:before {
    background: #3b5999;
  }

  ul li:nth-child(2) a:before {
    background: #55acee;
  }

  ul li:nth-child(3) a:before {
    background: #0077b5;
  }

  ul li:nth-child(4) a:before {
    background: #dd4b39;
  }
}
</style>
