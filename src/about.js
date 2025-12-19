import selectedNav from "./selected.js";
const main = document.querySelector("main");

const about = () => {
  const main = document.querySelector("main");
  if (main.classList.contains("about")) {
    return;
  }
  main.innerHTML = "";
  main.className = "about";
  selectedNav("about");
  displayAboutContent();
};

const contactList = [
  {
    name: "Tereshia",
    phone: "980285938",
    email: "tsh@vier.com",
  },
  {
    name: "Alansya",
    phone: "988809356",
    email: "als@vier.com",
  },
];

const getContactCard = (contact) => {
  const card = document.createElement("ul");
  card.className = "contact-card";
  card.innerHTML = `          
    <li><span>Name</span>${contact.name}</li>
    <li><span>Phone Number</span>${contact.phone}</li>
    <li><span>Email</span>${contact.email}</li>`;

  return card;
};

const displayAboutContent = () => {
  main.innerHTML = `
    <div class="about-container">
      <div class="about-header">
        <h2>Vier Cafe</h2>
        <p class="cafe-about">We opened with aspirations to become home to our customers, away from the hustle bustle of
          everyday lives.<br>
          With our humble abode, We hoped every customer will have a brief respite against the raging tide currents
          called expectations.<br>
          With our signatures, We believe our customers will come out energized to rove this vast universe.<br>
          Only by then, Vier Cafe could deliver its meaning.
        </p>
      </div>
      <div class="contacts">
        <h3>Get in touch with our Crew</h3>
      </div>
    </div>
  `;

  const contactCardContainer = document.querySelector(".contacts")

  contactList.forEach(ct => {
    const contactCard = getContactCard(ct);
    contactCardContainer.appendChild(contactCard);
  })
};

export default about;
