import selectedNav from "./selected.js";


const about = () => {
  const main = document.querySelector("main");
  if (main.classList.contains("about")) {
    return;
  }

  // main.innerHTML = "";
  main.className = "";

  main.classList.add("about");
  // const p = document.createElement("p");
  // p.innerHTML = "About will appear";
  // main.appendChild(p);
  selectedNav("about");
};

export default about;
