const setSelectedNavBtn = (id) => {
const navs = document.querySelector(".navigation");
const navlis = [...navs.children];
const btnNavs = [];


navlis.forEach(el => btnNavs.push(el.firstChild));
btnNavs.forEach(btn => {
  btn.className = ""
})

let selected = btnNavs.find(el => el.id == id);
selected.className = "selected";
}

export default setSelectedNavBtn;