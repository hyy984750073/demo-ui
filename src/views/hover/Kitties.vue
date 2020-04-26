<template>
  <div class="app-container page-kitties">
    <aside>
      这个效果的作者做了一件了不起的事情：Ana Tudor
      在制作效果代码时录下了自己的工作过程，从而鼓励人们创建自己的悬停效果。
      <br /><br />
      <a href="https://codepen.io/thebabydino/details/OEVgRx" target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <div class="data-container">
      <div translate="no">
        <article>
          <h3>tiger</h3>
          <figure>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2017/17_07_art_tiger.jpg"
            />
          </figure>
        </article>
        <article>
          <h3>lion</h3>
          <figure>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2017/17_07_art_lion.jpg"
            />
          </figure>
        </article>
        <article>
          <h3>leopard</h3>
          <figure>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2017/17_07_art_leopard.jpg"
            />
          </figure>
        </article>
        <article>
          <h3>cougar</h3>
          <figure>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2017/17_07_art_cougar.jpg"
            />
          </figure>
        </article>
        <article>
          <h3>cheetah</h3>
          <figure>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2017/17_07_art_cheetah.jpg"
            />
          </figure>
        </article>
        <a
          data-txt="watch me code this"
          href="https://youtu.be/KF7fRl5uB-8"
          target="_blank"
          id="btn--yp"
          >watch me code this</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Kitties",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
}
</script>

<style lang="scss" scope>
// @import "compass/css3";
.page-kitties {
  $gl: linear-gradient(currentColor, currentColor);

  @mixin poly($n: 5, $roff: 0) {
    $p: ();
    $ba: 360deg / $n;

    @for $i from 0 to $n {
      $ca:($roff + $i) * $ba;
      // $x:50% * (1 + cos($ca));
      // $y:50% * (1 + sin($ca));
      // $p:$p, $x $y;
    }
    --cpval: polygon($p);
    -webkit-clip-path: var(--cpval);
    clip-path: var(--cpval);
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    background: #000;
  }

  .data-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #222 $gl 50%/ 2px repeat-y;
    color: #ddd;
  }

  article {
    --s: -1;
    display: flex;
    align-items: center;
    height: calc(100vh / var(--n));
    transform: translate(calc(var(--s) * 50%));

    &:nth-child(2n) {
      --s: 1;

      img {
        @include poly($roff: 0.5);

        &:hover {
          @include poly($roff: -0.5);
        }
      }
    }
  }

  h3 {
    order: var(--s);
    font: 700 2em segoe script, cursive;
    text-transform: capitalize;
  }

  figure,
  img {
    height: 100%;
  }

  figure {
    background: $gl calc((1 - var(--s)) * 50%) 50%/ 50% 2px no-repeat;
    filter: drop-shadow(2px 2px 3px currentcolor);
  }

  img {
    display: block;
    margin: 0 1em;
    @include poly();
    transition: 0.7s;

    &:hover {
      @include poly($roff: 1);
    }
  }
}
</style>
