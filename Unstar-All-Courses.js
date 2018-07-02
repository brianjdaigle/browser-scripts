// ==UserScript==
// @name         Unstar All Courses (Canvas)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.instructure.com/courses
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
  var assocRegex = new RegExp('^/courses');
  if (assocRegex.test(window.location.pathname)) {
    add_button();
  }

  function add_button() {
  var parent = document.querySelector('div.header-bar');
  if (parent) {
    var el = parent.querySelector('#bjd-map');
    if (!el) {
      el = document.createElement('a');
      el.classList.add('btn');
      el.id = 'bjd-map';
      var icon = document.createElement('i');
      icon.classList.add('icon-download');
      el.appendChild(icon);
      var txt = document.createTextNode(' Unstar All');
      el.appendChild(txt);
      el.addEventListener('click', unstarAll);
      parent.appendChild(el);
      }
    }
  }

  function unstarAll(){
    var courseStars = document.getElementsByClassName('icon-star');
      //I didn't think I'd need this while loop, but for some reason array.prototype.foreach doesn't
      //actually do each element saved in courseStars the first time through. It only does every other one.
      //The while loop makes it repeat until they are all done. Maybe I can troubleshoot this later.
    while (courseStars.length > 0) {
      courseStars = document.getElementsByClassName('icon-star');
      Array.prototype.forEach.call(courseStars, function(courseStar){
          courseStar.click();
      });
    }
  }
})();
