import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import style from "./main.css";

// const main = document.querySelector("main");
// console.log(main);

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", about)
home();