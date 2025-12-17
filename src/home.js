const main = document.querySelector("main");

const displayHome = () => {
  if (main.classList.contains("home")) {
    return;
  }
  main.innerHTML = "";
  main.className = "";
  main.classList.add("home");
  const p = document.createElement("p");
  p.innerHTML = "This will appear";
  main.appendChild(p);
  homeContent();
};

const homeContent = () => {
  // main.innerHTML = `
  //     <h1>Vier Cafe</h1>
  //     <p>When things get noisy, Come back to tranquility</p>

  //     <div class="para">
  //       <h3>Eau de Lava</h3>
  //       <span>New Signature</span>
  //       <p>Made with secrets Ingredients full with love, Lava Coffee beans whose scent will captivate anyone.</p>
  //       <button>Take a Peek at the Menu</button>
  //     </div>

  // `;
};

export default displayHome;
