<template>
  <div class="app-container page-simple-tile">
    <aside>
      Chris Deacy 在制作可以高度定制的 CSS
      图像悬停效果时想出了一些很好的主意。如果你腻味了市面上的类似方案，并且想尝试一些可以让任何种类的内容都动起来的动画，那么这个效果对你来说就很合适。
      <br /><br />
      <a href="https://codepen.io/chrisdothtml/pen/OVmgwK" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <div class="tiles">
      <a class="tile" href="#"
        ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/1.jpg" />
        <div class="details">
          <span class="title">Lorem Ipsum Dolor</span
          ><span class="info"
            >Quisque vel felis lectus donec vitae dapibus magna</span
          >
        </div></a
      ><a class="tile" href="#"
        ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/2.jpg" />
        <div class="details">
          <span class="title">Lorem Ipsum Dolor</span
          ><span class="info"
            >Quisque vel felis lectus donec vitae dapibus magna</span
          >
        </div></a
      ><a class="tile" href="#"
        ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/3.jpg" />
        <div class="details">
          <span class="title">Lorem Ipsum Dolor</span
          ><span class="info"
            >Quisque vel felis lectus donec vitae dapibus magna</span
          >
        </div></a
      ><a class="tile" href="#"
        ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/4.jpg" />
        <div class="details">
          <span class="title">Lorem Ipsum Dolor</span
          ><span class="info"
            >Quisque vel felis lectus donec vitae dapibus magna</span
          >
        </div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleTile",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
/* Reset */
@import url(//codepen.io/chrisdothtml/pen/ojLzJK.css);
.page-simple-tile {
  // variables
  $anim-speed: 0.3s;

  // main styles
  .tiles {
    width: 1040px;
    font-size: 0;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .tile {
      display: inline-block;
      margin: 10px;
      text-align: left;
      opacity: 0.99;
      overflow: hidden;
      position: relative;
      border-radius: 3px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);

      &:before {
        content: "";
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.7) 100%
        );
        width: 100%;
        height: 50%;
        opacity: 0;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 2;
        transition-property: top, opacity;
        transition-duration: $anim-speed;
      }

      img {
        display: block;
        max-width: 100%;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }

      .details {
        font-size: 16px;
        padding: 20px;
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 3;

        span {
          display: block;
          opacity: 0;
          position: relative;
          top: 100px;
          transition-property: top, opacity;
          transition-duration: $anim-speed;
          transition-delay: 0s;
        }

        .title {
          line-height: 1;
          font-weight: 600;
          font-size: 18px;
        }

        .info {
          line-height: 1.2;
          margin-top: 5px;
          font-size: 12px;
        }
      }

      &:focus,
      &:hover {
        &:before,
        span {
          opacity: 1;
        }

        &:before {
          top: 50%;
        }

        span {
          top: 0;
        }

        .title {
          transition-delay: 0.15s;
        }

        .info {
          transition-delay: 0.25s;
        }
      }
    }
  }
}
</style>
