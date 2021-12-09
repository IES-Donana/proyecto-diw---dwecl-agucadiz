//variables
let navegacion = document.getElementById("panelNav");
let menuHamburguesa = document.getElementById("hamburguesa");
let menu = document.getElementById("menu");
let btop = document.getElementById("barraTop");
let bbottom = document.getElementById("barraBottom");
let bmid = document.getElementById("barraMid");

//eventos
window.addEventListener("load", abrirMenu);
window.addEventListener("resize", abrirMenu);
menuHamburguesa.addEventListener("click", menuDesplegable);

//funciones
function abrirMenu() {
  console.log("abrirMenu");

  if (window.innerWidth < 768) {
    navegacion.style.display = "none";
    menuHamburguesa.style.display = "flex";
  } else {
    navegacion.style.display = "flex";
    menuHamburguesa.style.display = "none";
    menu.style.transform = "translate(-100%)";
    verBurguer();
  }
}

function menuDesplegable() {
  console.log("menuDesplegable");

  if (
    menu.style.transform == "translate(-100%)" ||
    menu.style.transform == ""
  ) {
    menu.style.transform = "translate(0%)";
    verCerrar();
  } else {
    menu.style.transform = "translate(-100%)";
    verBurguer();
  }
}

function verBurguer() {
  console.log("verBurguer");

  btop.style.transform = "";
  bbottom.style.transform = "";
  bmid.style.opacity = "100";
}

function verCerrar() {
  console.log("verCerrar");

  btop.style.transform = "translateY(140%) rotate(45deg)";
  bbottom.style.transform = "translateY(-140%) rotate(135deg)";
  bmid.style.opacity = "0";
}
