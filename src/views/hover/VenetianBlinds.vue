<template>
  <div class="app-container page-VenetianBlinds">
    <aside>
      所有人都喜欢威尼斯式百叶窗，那么为什么不将它们转变为悬停效果呢？Dimitra
      创建的这个 CSS
      图像悬停效果就做到了这一点，你可以在代码里设置列数，并根据需要定制它。
      <br /><br />
      <a href="https://codepen.io/mimikos/details/JyYoEe" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <div class="data-container">
      <div class="placeholder"></div>
    </div>
  </div>
</template>

<script>
import {TweenMax} from 'gsap'
export default {
  name: "VenetianBlinds",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    var options = {
      imgSrc1:
        "//s3-us-west-2.amazonaws.com/s.cdpn.io/261873/TelephoneBanana.jpg",
      imgSrc2:
        "//s3-us-west-2.amazonaws.com/s.cdpn.io/261873/TelephoneBananaInverted.jpg",
      containerName: "placeholder",
      columns: 16,
      margin: 3
    };

    function VenetianBlinds(defaults) {
      var cols = defaults.columns;
      var margin = defaults.margin;
      var img1 = defaults.imgSrc1;
      var img2 = defaults.imgSrc2;
      var placeholder = document.getElementsByClassName(
        defaults.containerName
      )[0];
      var directionX, directionY;

      var column, blind, blindImg;
      var bgImg, rot;
      var colL;
      var colW = placeholder.offsetWidth / cols - margin;
      for (var i = 0; i < cols; i++) {
        colL = (colW + margin) * i;

        column = document.createElement("div");
        column.className = "column";
        column.style.width = colW + "px";
        column.style.left = colL + "px";
        placeholder.appendChild(column);

        for (var j = 0; j < 4; j++) {
          blind = document.createElement("div");
          blind.className = "blind";
          blind.style.width = colW + "px";
          blindImg = document.createElement("div");
          blindImg.className = "blindImg";

          switch (j) {
            case 0:
              TweenMax.set(blind, { rotationY: "0" });
              bgImg = img1;
              break;
            case 1:
              TweenMax.set(blind, { rotationY: "90" });
              bgImg = img2;
              break;
            case 2:
              TweenMax.set(blind, { rotationY: "180" });
              bgImg = img1;
              break;
            case 3:
              TweenMax.set(blind, { rotationY: "270" });
              bgImg = img2;
              break;
          }
          blindImg.style.width = placeholder.offsetWidth + "px";
          blindImg.style.backgroundImage = "url(" + bgImg + ")";
          blindImg.style.left = -colL + "px";

          column.appendChild(blind);
          blind.appendChild(blindImg);

          TweenMax.set(blind, {
            transformOrigin: "50% 50% " + -colW / 2,
            transformStyle: "preserve-3d"
          });
        }

        TweenMax.set(column, {
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
          rotationY: 0
        });

        column.addEventListener("mouseenter", function(event) {
          var elem = event.currentTarget;
          var rotY = elem._gsTransform.rotationY;

          if (directionX > 0) {
            TweenMax.to(elem, 1, {
              rotationY: Math.floor(rotY / 90) * 90 + 90,
              transformOrigin: "50% 50% -" + colW / 2,
              ease: Back.easeOut
            });
          } else {
            TweenMax.to(elem, 1, {
              rotationY: Math.floor(rotY / 90) * 90 - 90,
              transformOrigin: "50% 50% -" + colW / 2,
              ease: Back.easeOut
            });
          }
        });
      }
      document.addEventListener("mousemove", function(event) {
        directionX =
          event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        directionY =
          event.movementY || event.mozMovementY || event.webkitMovementY || 0;
      });
    }

    VenetianBlinds(options);
  }
};
</script>

<style lang="scss" scope>
.page-VenetianBlinds {
  .data-container {
    margin: 0;
    text-align: center;
    background-color: #1a1919;
  }

  .placeholder {
    display: inline-block;
    width: 800px;
    height: 600px;
    box-sizing: border-box;
    margin-top: 40px;
    position: relative;
  }

  .column,
  .blind,
  .blindImg {
    position: absolute;
    top: 0;
    height: 100%;
    box-sizing: border-box;
  }

  .blind {
    overflow: hidden;
  }

  .blindImg {
    width: 100%;
    background-size: cover;
  }
}
</style>
