// ==UserScript==
// @name         Download Course Map (Canvas Modules)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://*.instructure.com/courses/*/modules
// @match        https://
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var assocRegex = new RegExp('^/courses/([0-9]+)/modules$');

  if (assocRegex.test(window.location.pathname)) {
     console.log('script running');
      add_button();
  }

  function add_button() {
  var parent = document.querySelector('div.header-bar-right');
  if (parent) {
    var el = parent.querySelector('#bjd-map');
    if (!el) {
      el = document.createElement('a');
      el.classList.add('btn');
      el.id = 'bjd-map';
      var icon = document.createElement('i');
      icon.classList.add('icon-download');
      el.appendChild(icon);
      var txt = document.createTextNode(' Download Map');
      el.appendChild(txt);
      el.addEventListener('click', downloadMap);
      parent.appendChild(el);
      }
    }
  }

  function downloadMap(){
    console.log('button clicked');
    var courseElements = document.getElementsByClassName('for-nvda');
    var elementTypes = document.getElementsByClassName('type_icon');
    var courseMap = ",LessonNumber%09ElementName%09Type%09URL";
    for (var i=0; i<courseElements.length; i++){
        courseMap+="%0D%0A";
        //add element lesson
        courseMap+='"' + (courseElements[i].parentElement.parentElement.parentElement.parentElement.parentElement.innerText.slice(0,10)) + '"%09';
        //add element name
        courseMap+='"' + (courseElements[i].innerText) + '"%09';
        //add element type
        courseMap+='"' + (elementTypes[i].title) + '"%09';
        //add element url
        courseMap+='"' + (courseElements[i].href) +'"';
    }
    console.log('map built');
    var courseMapFile = document.createElement('a');
    courseMapFile.href = 'data:text' + courseMap;
    courseMapFile.download = 'Course_Map.tsv';
    courseMapFile.click();
  }

})();
