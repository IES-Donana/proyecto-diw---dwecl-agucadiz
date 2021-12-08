//variables
let navegacion = document.getElementById("panelNav");
let menuHamburguesa = document.getElementById("hamburguesa");
let menu = document.getElementById("menu");
let btop = document.getElementById("barraTop");
let bbottom = document.getElementById("barraBottom");
let bmid = document.getElementById("barraMid");

//eventos
window.addEventListener("load", visualizarBurguer);
window.addEventListener("resize", visualizarBurguer);
menuHamburguesa.addEventListener("click", toggleMenu);

//funciones
function visualizarBurguer() {
  if (window.innerWidth < 768) {
    navegacion.style.display = "none";
    menuHamburguesa.style.display = "flex";
  } else {
    navegacion.style.display = "flex";
    menuHamburguesa.style.display = "none";
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
