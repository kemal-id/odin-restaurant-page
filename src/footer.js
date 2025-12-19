const footer = () => {
  const body = document.querySelector("body");
  body.appendChild(getFooterContent());
}

const getFooterContent = () => {
  const foot = document.createElement("footer");
  foot.innerHTML = `
    <p>Background Image by Natali N from Unsplash</p>
    <p>Coffee icon from uxwing</p>
  `
  return foot;
}

export default footer