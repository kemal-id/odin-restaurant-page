import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import style from "./main.css";

// const main = document.querySelector("main");
// console.log(main);

const homeBtn = document.querySelector(".home-button");
const menuBtn = document.querySelector(".menu-button");
const aboutBtn = document.querySelector(".about-button");

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", about)
// home();