import selectedNav from "./selected.js";

const displayMenu = () => {
  const main = document.querySelector("main");
  if (main.classList.contains("menu")) {
    return;
  }
  // main.innerHTML = "";
  main.className = "";
  main.classList.add("menu");
  // const p = document.createElement("p");
  // p.innerHTML = "Menu will appear";
  // main.appendChild(p);
  selectedNav("menu");
};

export default displayMenu;
