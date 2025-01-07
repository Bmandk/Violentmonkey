// ==UserScript==
// @name         Auto unmute
// @namespace    https://greasyfork.org/en/users/85671-jcunews
// @version      1.1.8
// @license      AGPLv3
// @author       jcunews
// @description  https://www.reddit.com/r/userscripts/comments/lnf8ba/request_auto_unmute_redgifscom_videos/
// @match        https://www.redgifs.com/ifr/*
// @match        https://www.redgifs.com/watch/*
// @grant        none
// ==/UserScript==

/* Note:
For embedded player, the video will be unmuted, but the player will think it's still muted
(the player's sound control is still in off state).
*/

((firstTime, setVolume) => {

  //config begin

  setVolume = -1; //0 to 1.0. or negative number to disable

  //config end

  firstTime = true;
  (function fn(a, b) {
    if (firstTime) {
      if (
        (a = document.querySelector(':is(.sidebar,.sideBar,.Sidebar,.SideBar,.SIDEBAR) :is([class*="Sound"],[class*="sound"],[class*="SOUND"])'))
        && (b = document.querySelector('.Player video')) && b.muted
      ) { //non embedded
        firstTime = false;
        a.click();
        b.muted = false;
        if (setVolume >= 0) b.volume = setVolume;
      } else if ((a = document.querySelector(".embeddedPlayer video")) && a.muted) { //enbedded
        firstTime = false;
        a.muted = false;
        if (setVolume >= 0) a.volume = setVolume;
      }
    }
    setTimeout(fn, 200)
  })()
})();
