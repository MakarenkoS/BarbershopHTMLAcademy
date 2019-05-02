"use strict";

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click",function(){
	if (navMain.classList.contains("main-nav--opened")) {
		navMain.classList.remove("main-nav--opened");
		navMain.classList.add("main-nav--closed");
	} else {
		navMain.classList.remove("main-nav--closed");
		navMain.classList.add("main-nav--opened");
	}
}) 

