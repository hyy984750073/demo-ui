<template>
  <div class="app-container page-direction-awate">
    <aside>
      Noel Delgado
      开发了这种带有方向感知的悬停效果，但这种效果肯定并不常见。用户喜欢用这种效果来展示产品或视觉元素。
      <br /><br />这种悬停效果对于画廊概念来说很合适。作者本人在展示他的悬停效果时就使用了一个画廊模板。
      <br /><br /><a
        href="https://codepen.io/noeldelgado/pen/pGwFx"
        target="_blank"
        >点击在线编辑查看效果</a
      >
    </aside>
    <header>
      <div class="container">
        <h1>Direction-aware hover effect</h1>
        <p>CSS &amp; bits of JS</p>
      </div>
    </header>
    <div class="container">
      <ul>
        <li class="out-right">
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li class="in-right">
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li class="out-left">
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li class="out-left">
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li>
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li class="out-top">
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li class="out-right">
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li class="out-top">
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li>
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li>
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li>
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
        <li>
          <a class="normal" href="#">
            <svg viewBox="0 0 80 76" x="0px" y="0px">
              <g>
                <path
                  d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="info">
            <h3>Single-origin coffee whatever</h3>
            <p>
              Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic
              meh messenger bag Truffaut jean shorts.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// - Noel Delgado | @pixelia_me

const nodes = [].slice.call(document.querySelectorAll("li"), 0);
const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
const classNames = ["in", "out"]
  .map(p => Object.values(directions).map(d => `${p}-${d}`))
  .reduce((a, b) => a.concat(b));

const getDirectionKey = (ev, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = l - (width / 2) * (width > height ? height / width : 1);
  const y = t - (height / 2) * (height > width ? width / height : 1);
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

class Item {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("mouseover", ev => this.update(ev, "in"));
    this.element.addEventListener("mouseout", ev => this.update(ev, "out"));
  }

  update(ev, prefix) {
    this.element.classList.remove(...classNames);
    this.element.classList.add(
      `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
    );
  }
}

nodes.forEach(node => new Item(node));

export default {
  name: "DirectionAwate",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scope>
@import url(https://fonts.googleapis.com/css?family=Bree+Serif);
.page-direction-awate {
  $duration: 300ms;
  $timing-fn: ease;
  $turquoise: #1abc9c;
  $wet-asphalt: #34495e;
  $midnight-blue: #2c3e50;
  $clouds: #ecf0f1;

  /* the important bits */
  li {
    perspective: 400px;
  }

  .info {
    // hide-initial-state
    transform: rotate3d(1, 0, 0, 90deg);

    width: 100%;
    height: 100%;
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    pointer-events: none;
    background-color: transparentize($turquoise, 0.1);
  }

  .in-top .info {
    transform-origin: 50% 0%;
    animation: in-top $duration $timing-fn 0ms 1 forwards;
  }
  .in-right .info {
    transform-origin: 100% 0%;
    animation: in-right $duration $timing-fn 0ms 1 forwards;
  }
  .in-bottom .info {
    transform-origin: 50% 100%;
    animation: in-bottom $duration $timing-fn 0ms 1 forwards;
  }
  .in-left .info {
    transform-origin: 0% 0%;
    animation: in-left $duration $timing-fn 0ms 1 forwards;
  }

  .out-top .info {
    transform-origin: 50% 0%;
    animation: out-top $duration $timing-fn 0ms 1 forwards;
  }
  .out-right .info {
    transform-origin: 100% 50%;
    animation: out-right $duration $timing-fn 0ms 1 forwards;
  }
  .out-bottom .info {
    transform-origin: 50% 100%;
    animation: out-bottom $duration $timing-fn 0ms 1 forwards;
  }
  .out-left .info {
    transform-origin: 0% 0%;
    animation: out-left $duration $timing-fn 0ms 1 forwards;
  }

  @keyframes in-top {
    from {
      transform: rotate3d(-1, 0, 0, 90deg);
    }
    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }
  @keyframes in-right {
    from {
      transform: rotate3d(0, -1, 0, 90deg);
    }
    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }
  @keyframes in-bottom {
    from {
      transform: rotate3d(1, 0, 0, 90deg);
    }
    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }
  @keyframes in-left {
    from {
      transform: rotate3d(0, 1, 0, 90deg);
    }
    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }

  @keyframes out-top {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
      transform: rotate3d(-1, 0, 0, 104deg);
    }
  }
  @keyframes out-right {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
      transform: rotate3d(0, -1, 0, 104deg);
    }
  }
  @keyframes out-bottom {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
      transform: rotate3d(1, 0, 0, 104deg);
    }
  }
  @keyframes out-left {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
      transform: rotate3d(0, 1, 0, 104deg);
    }
  }

  /* you can ignore this ones */
  ul {
    padding: 0;
    margin: 0 0 50px;

    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }

  li {
    position: relative;
    float: left;
    width: 200px;
    height: 200px;
    margin: 5px;
    padding: 0;
    list-style: none;

    a {
      display: inline-block;
      vertical-align: top;
      text-decoration: none;
      border-radius: 4px;
    }

    h3 {
      margin: 0;
      font-size: 16px;
      color: transparentize(#fff, 0.1);
    }

    p {
      font-size: 12px;
      line-height: 1.5;
      color: transparentize(#fff, 0.2);
    }

    .normal {
      width: 100%;
      height: 100%;
      background-color: $clouds;
      color: transparentize($wet-asphalt, 0.4);
      box-shadow: inset 0 2px 20px darken($clouds, 2);
      text-align: center;
      font-size: 50px;
      line-height: 200px;

      svg {
        pointer-events: none;
        width: 50px;
        path {
          fill: transparentize($wet-asphalt, 0.8);
        }
      }
    }
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
  }

  h1 {
    margin: 0 auto 5px;
    text-align: center;
  }

  h3 {
    font-family: "Bree Serif", serif;
  }

  .container {
    width: 840px;
    margin: 0 auto;
  }

  header {
    font-family: "Bree Serif", serif;
    text-align: center;
    margin: 50px 0 25px;
    color: $wet-asphalt;

    p {
      margin: 0;
      color: transparentize($wet-asphalt, 0.6);
    }
  }
}
</style>
