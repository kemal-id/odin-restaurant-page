import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import footer from "./footer.js";
import style from "./main.css";

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", about);
home();
footer();