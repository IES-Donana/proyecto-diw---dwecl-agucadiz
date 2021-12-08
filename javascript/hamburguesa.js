let panel = document.getElementById("panelNav");
let burguer = document.getElementById("hamburguesa");
let menu = document.getElementById("menu");
let btop = document.getElementById("barraTop");
let bbottom = document.getElementById("barraBottom");
let bmid = document.getElementById("barraMid");

window.addEventListener("load", visualizarBurguer);
window.addEventListener("resize", visualizarBurguer);
burguer.addEventListener("click", toggleMenu);

function visualizarBurguer() {
  //Podría hacerse con media queries
  if (window.innerWidth < 768) {
    panel.style.display = "none";
    burguer.style.display = "flex";
  } else {
    panel.style.display = "flex";
    burguer.style.display = "none";
    menu.style.transform = "translate(-100%)";
    convertirEnBurguer();
  }
}

function toggleMenu() {
  if (
    menu.style.transform == "translate(-100%)" ||
    menu.style.transform == ""
  ) {
    menu.style.transform = "translate(0%)";
    convertirEnCerrar();
  } else {
    menu.style.transform = "translate(-100%)";
    convertirEnBurguer();
  }
}

function convertirEnBurguer() {
  btop.style.transform = "";
  bbottom.style.transform = "";
  bmid.style.opacity = "100";
}

function convertirEnCerrar() {
  btop.style.transform = "translateY(140%) rotate(45deg)";
  bbottom.style.transform = "translateY(-140%) rotate(135deg)";
  bmid.style.opacity = "0";
}
