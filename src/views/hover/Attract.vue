<template>
  <div class="app-container page-attract">
    <h1>有bug 可参考在线编辑 TODO:</h1>
    <aside>
      这种 CSS
      图像悬停效果非常适合某些类型的页面和网站。如果你的站点要在一个单独的部分中展示团队风采，那么你绝对想要尝试一下这种效果。
      <br /><br />
      它的每个元素都有动态效果，用在页面的其他部分也很合适。Louis Hoebregts
      在构建它时只使用了 HTML5 和 CSS3，因此不必担心它的响应速度。
      <br /><br />
      <a href="https://codepen.io/Mamboleoo/pen/XgBvrJ" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <ul>
      <li>
        <button>🦊</button>
      </li>
      <li>
        <button>🐶</button>
      </li>
      <li>
        <button>🦄</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Attract",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    class HoverButton {
      constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
      }

      attachEventsListener() {
        window.addEventListener("mousemove", e => this.onMouseMove(e));
        window.addEventListener("resize", e => this.calculatePosition(e));
      }

      calculatePosition() {
        TweenMax.set(this.el, {
          x: 0,
          y: 0,
          scale: 1
        });
        const box = this.el.getBoundingClientRect();
        this.x = box.left + box.width * 0.5;
        this.y = box.top + box.height * 0.5;
        this.width = box.width;
        this.height = box.height;
      }

      onMouseMove(e) {
        let hover = false;
        let hoverArea = this.hover ? 0.7 : 0.5;
        let x = e.clientX - this.x;
        let y = e.clientY - this.y;
        let distance = Math.sqrt(x * x + y * y);
        if (distance < this.width * hoverArea) {
          hover = true;
          if (!this.hover) {
            this.hover = true;
          }
          this.onHover(e.clientX, e.clientY);
        }

        if (!hover && this.hover) {
          this.onLeave();
          this.hover = false;
        }
      }

      onHover(x, y) {
        TweenMax.to(this.el, 0.4, {
          x: (x - this.x) * 0.4,
          y: (y - this.y) * 0.4,
          scale: 1.15,
          ease: Power2.easeOut
        });
        this.el.style.zIndex = 10;
      }
      onLeave() {
        TweenMax.to(this.el, 0.7, {
          x: 0,
          y: 0,
          scale: 1,
          ease: Elastic.easeOut.config(1.2, 0.4)
        });
        this.el.style.zIndex = 1;
      }
    }

    const btn1 = document.querySelector("li:nth-child(1) button");
    new HoverButton(btn1);

    const btn2 = document.querySelector("li:nth-child(2) button");
    new HoverButton(btn2);

    const btn3 = document.querySelector("li:nth-child(3) button");
    new HoverButton(btn3);
  }
};
</script>

<style lang="scss" scope>
.page-attract {
  body {
    display: flex;
    height: 100vh;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/unsplahBg2.jpg)
      no-repeat center / cover;
  }
  ul {
    padding: 0;
  }
  li {
    display: inline-block;
    list-style-type: none;
    margin: 0 20px;
    &:nth-child(1) button {
      background: #f3ffbd;
    }
    &:nth-child(2) button {
      background: #247ba0;
    }
    &:nth-child(3) button {
      background: #ff1654;
    }
  }
  button {
    position: relative;
    background: rebeccapurple;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid white;
    color: white;
    font-family: Verdana;
    font-weight: bold;
    font-size: 50px;
    cursor: pointer;
    padding: 0;
  }
}
</style>
