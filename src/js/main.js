import '../styles/global.scss'
import '../styles/style.scss'
import { tns } from 'tiny-slider/src/tiny-slider.js';

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
tns({
  container: '.my-slider',
  items: 3,
  nav: false,
  controls: false,
  mouseDrag: true,
  autoPlay: true,
  slideBy: 'page',
  autoplayTimeout: 300,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2
    },
    700: {
      gutter: 30
    },
    900: {
      items: 3
    }
  }
});