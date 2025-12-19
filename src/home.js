import natalie from "../assets/natali-n-gltUMFm_i4Q-unsplash.jpg";
import coffee from "../assets/coffee-icon.svg";
import selectNav from "./selected.js";

const main = document.querySelector("main");

const home = () => {
  if (main.classList.contains("home")) {
    return;
  }
  main.innerHTML = "";
  main.className = "home";
  selectNav("home");
  displayHomeContent();
};

const displayHomeContent = () => {
  //   main.innerHTML = `
  //     <div class="bg-image">
  //       <img src="../assets/natali-n-gltUMFm_i4Q-unsplash.jpg" id="home-bg" alt="Cafe Indoors by Natali N from Unsplash">
  //     </div>
  //     <div class="main-title">
  //       <h1>Vier Cafe</h1>
  //       <p>When things get noisy, Come back to tranquility</p>
  //     </div>

  //     <div class="item-example">
  //       <div class="item-title">
  //         <img src="../assets/coffee-icon.svg" alt="Coffee Icon">
  //         <h3>Eau de Lava</h3>
  //       </div>
  //       <p>Made with secrets Ingredients full with love, Lava Coffee beans whose scent will captivate anyone.</p>
  //       <button>Take a Peek at Our Menu <span>>>></span></button>
  //     </div>

  //  `;

  //bg image section
  const ImageContainer = document.createElement("div");
  ImageContainer.className = "bg-image";

  const bgImg = document.createElement("img");
  bgImg.src = natalie;
  bgImg.setAttribute("id", "home-bg");
  bgImg.setAttribute("alt", "Cafe Indoors by Natali N from Unsplash");
  ImageContainer.appendChild(bgImg);

  //hero section
  const hero = document.createElement("div");
  hero.className = "main-title";

  const title = document.createElement("h1");
  title.innerText = "Vier Cafe";

  const subTitle = document.createElement("p");
  subTitle.innerText = "When things get noisy, Come back to tranquility";

  hero.appendChild(title);
  hero.appendChild(subTitle);

  //item-example section
  const itemContainer = document.createElement("div");
  itemContainer.className = "item-example";

  const itemTitle = document.createElement("div");
  itemTitle.className = "item-title";
  const coffeeIcon = document.createElement("img");
  coffeeIcon.src = coffee;
  coffeeIcon.setAttribute("alt", "Coffee Icon");
  const itemName = document.createElement("h3");
  itemName.innerText = "Eau de Lava";

  itemTitle.appendChild(coffeeIcon);
  itemTitle.appendChild(itemName);

  const itemDesc = document.createElement("p");
  itemDesc.innerHTML = `Made with secrets Ingredients full with love.
  <br>Lava Coffee beans whose scent will captivate anyone.`;

  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = `Take a Peek at Our Menu <span>>>></span>`;

  itemContainer.appendChild(itemTitle);
  itemContainer.appendChild(itemDesc);
  itemContainer.appendChild(menuBtn);

  main.appendChild(ImageContainer);
  main.appendChild(hero);
  main.appendChild(itemContainer);

  //UUGH, hardcoded html is much simpler.
};

export default home;
