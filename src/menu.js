const displayMenu = () => {
  const main = document.querySelector("main");
  if (main.classList.contains("menu")) {
    return;
  }
  main.innerHTML = "";
  main.className = "";
  main.classList.add("menu");
  const p = document.createElement("p");
  p.innerHTML = "Menu will appear";
  main.appendChild(p);
};

export default displayMenu;
