
"use strict";window.onload=function(){var overlay=document.getElementById("overlay");var navigations=document.getElementsByClassName("nav-link");overlay.addEventListener('click',function(){closeNav();});Object.keys(navigations).map(function(i){navigations.item(i).onclick=closeNav;});function closeNav(){document.getElementById("btn-menu").checked=false;}};