// ==UserScript==
// @name        Reddit Enhancer
// @namespace   Violentmonkey Scripts
// @match       *://www.reddit.com/*
// @grant       none
// @version     1.1
// @author      Bmandk
// @description 06/04/2025, 22:55
// ==/UserScript==

//this.$ = this.jQuery = jQuery.noConflict(true);

function setCss() {
  let buttons =
  $(".flat-list.buttons > li:not(:has(> .stamp))");
  let size = "6px"
  buttons.css({
    "padding": "0",
    "margin": size + " 0"
  });
  buttons.children().css({
    "border-style":"solid",
    "border-width": 1,
    "padding": size,
    "background-color": "dark-grey",
    "color": "rgb(130, 130, 130)"
  });

  $('.linkflairlabel a').remove();
  buttons.last().remove();
}

$(document).ready(function() {
  setCss();
  setInterval(setCss, 500);
});
