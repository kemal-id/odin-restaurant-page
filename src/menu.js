import selectedNav from "./selected.js";
const main = document.querySelector("main");

const menu = () => {
  if (main.classList.contains("menu")) {
    return;
  }
  main.innerHTML = "";
  main.className = "menu";
  selectedNav("menu");
  displayMenuContent();
};

const menuItems = [
  {
    name: "Lava Fried Rice",
    desc: "A Fried rice which return your soul into Volcano",
    price: 34,
    type: "mainDish",
  },
  {
    name: "Akai Gyu Don",
    desc: "A RiceBowl which reminds you of Lake of Lavaa",
    price: 28,
    type: "mainDish",
  },
  {
    name: "Hot Stick Tempura",
    desc: "Tempura that makes you shout HOT HOT",
    price: 14,
    type: "sideDish",
  },
  {
    name: "Sunny Side Egg",
    desc: "A Cheerful Egg with Two Suns!",
    price: 8,
    type: "sideDish",
  },
  {
    name: "Ginger Tea",
    desc: "Reminds you to soaking in a hot spring",
    price: 10,
    type: "beverage",
  },
  {
    name: "Black Tea",
    desc: "An Elegant drink with boiling hot water",
    price: 8,
    type: "beverage",
  },
];

class MenuItem {
  constructor(data) {
    this.name = data.name;
    this.desc = data.desc;
    this.price = data.price;
    this.type = data.type;
    this.uid = crypto.randomUUID();
  }

  getElementCard() {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.setAttribute("data-id", this.uid);
    card.setAttribute("data-category", this.type);

    // this is really easier than coding below.
    // card.innerHTML = `
    //  <div class="menu-detail">
    //     <h3 class="menu-name">${this.name}</h3>
    //     <p class="menu-desc">
    //       ${this.desc}
    //     </p>
    //     <p class="menu-price">$${this.price}</p>
    //   </div>
    //   <div class="menu-img"></div>
    // `;

    const menuDetail = document.createElement("div");
    menuDetail.className = "menu-detail";

    const menuName = document.createElement("h3");
    menuName.className = "menu-name";
    menuName.innerText = this.name;

    const menuDesc = document.createElement("p");
    menuDesc.className = "menu-desc";
    menuDesc.innerText = this.desc;

    const menuPrice = document.createElement("p");
    menuPrice.className = "menu-price";
    menuPrice.innerText = `$${this.price}`;

    menuDetail.appendChild(menuName);
    menuDetail.appendChild(menuDesc);
    menuDetail.appendChild(menuPrice);

    const menuImg = document.createElement("div");
    menuImg.className = "menu-img";

    card.appendChild(menuDetail);
    card.appendChild(menuImg);

    return card;
  }
}

const sortMenuItem = (menuData) => {
  const sorted = {
    beverage: [],
    mainDishes: [],
    sideDishes: [],
  };

  menuData.forEach((menuItem) => {
    if (menuItem.type == "beverage") {
      sorted.beverage.push(menuItem);
    }
    if (menuItem.type == "mainDish") {
      sorted.mainDishes.push(menuItem);
    }
    if (menuItem.type == "sideDish") {
      sorted.sideDishes.push(menuItem);
    }
  });

  return sorted;
};

const displayMenuContent = () => {
  main.innerHTML = `
      <h1>~Our Menu</h1>
      <div class="menu-container">
        <div class="menu-list main-dishes">
          <h2 class="catalog-title">Main Dishes</h2>
        </div>
        
        <div class="menu-list side-dishes">
          <h2 class="catalog-title">Side Dishes</h2>
        </div>

        <div class="menu-list beverage">
          <h2 class="catalog-title">Beverages</h2>
        </div>
      </div>`;

  const mainDish = document.querySelector(".main-dishes");
  const sideDish = document.querySelector(".side-dishes");
  const beverage = document.querySelector(".beverage");

  const menuList = [];
  menuItems.forEach((menu) => {
    const menuItem = new MenuItem(menu);
    menuList.push(menuItem);
  });

  const sortedMenu = sortMenuItem(menuList);

  for (const category in sortedMenu) {
    sortedMenu[category].forEach((menuItem) => {
      const menuCard = menuItem.getElementCard();
      if (menuItem.type == "mainDish") {
        mainDish.appendChild(menuCard);
      }
      if (menuItem.type == "sideDish") {
        sideDish.appendChild(menuCard);
      }
      if (menuItem.type == "beverage") {
        beverage.appendChild(menuCard);
      }
    });
  }
};

export default menu;
