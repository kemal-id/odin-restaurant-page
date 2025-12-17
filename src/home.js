const displayHome = () => {
  const main = document.querySelector("main");
  if (main.classList.contains("home")) {
    return;
  }
  main.innerHTML = "";
  main.className = "";
  main.classList.add("home");
  const p = document.createElement("p");
  p.innerHTML = "This will appear";
  main.appendChild(p);
};

export default displayHome;
