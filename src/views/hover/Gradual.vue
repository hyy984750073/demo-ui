<template>
  <div class="app-container page-Gradual">
    <aside>
      有人说混合模式悬停效果不能用 CSS 实现，他们应该看看 Jon Daiello 创建的这个悬停效果。见过它后，你就能知道这个概念是确实可行的了。
      <br /><br />
      <a href="https://codepen.io/jondaiello/details/WGZNZv" target="_blank">点击在线编辑查看效果</a>
    </aside>
    <div class="data-container">
      <span class="btn">Hover Me </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gradual",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
.page-Gradual {
  
}
</style>
