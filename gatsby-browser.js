/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/styles/global.css'

function replaceVerticalScrollByHorizontal(event) {
    if (event.deltaY != 0) {
      // manually scroll horizonally instead
    window.scroll(window.scrollX + event.deltaY * 5, window.scrollY);
    
    // prevent vertical scroll
      event.preventDefault();
  }
  return;
}

/* Listener on window once we start scrolling, we run our function 💨 */
window.addEventListener('wheel', replaceVerticalScrollByHorizontal);