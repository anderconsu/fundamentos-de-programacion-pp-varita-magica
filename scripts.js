// Funciones
const getRandom = (array) => {
  let x = Math.floor(Math.random() * (array.length - 1));
  return array[x];
};

// Captar elementos del DOM
const a = document.getElementsByTagName("a");
const img = document.querySelectorAll("img");
const text = document.querySelectorAll("p");
const articlesec = document.querySelectorAll("article, section");
// Quitar accion por defecto al hacer click en los enlaces
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function (ev) {
    ev.preventDefault();
  });
}

// Arrays
const magicArray = [
  "assets/magic-1.gif",
  "assets/magic-2.gif",
  "assets/magic-3.gif",
  "assets/magic-4.gif",
  "assets/magic-5.gif",
  "assets/magic-6.gif",
];
const colores = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#f4a261", "#e76f51"];

// ===== Eventos al hacer click //
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    img[i].src = getRandom(magicArray);
  });
}

for (let i = 0; i < text.length; i++) {
  text[i].addEventListener("click", function () {
    text[i].style.backgroundColor = getRandom(colores);
    text[i].style.color = getRandom(colores);
  });
}

for (let i = 0; i < articlesec.length; i++) {
  articlesec[i].addEventListener("click", function () {
    articlesec[i].style.backgroundColor = getRandom(colores);
  });
}
// ===== Eventos al mover el raton //
for (let i = 0; i < img.length; i++) {
  let original = img[i].src;
  img[i].addEventListener("mouseover", function () {
    img[i].src = "assets/abracadabra.gif";
  });
  img[i].addEventListener("mouseout", function () {
    img[i].src = original;
  });
}
for (let i = 0; i < text.length; i++) {
  text[i].addEventListener("mouseover", function () {
    text[i].style.backgroundColor = getRandom(colores);
    text[i].style.color = getRandom(colores);
  });
  text[i].addEventListener("mouseout", function () {
    text[i].style.backgroundColor = "";
    text[i].style.color = "";
  });
}

for (let i = 0; i < articlesec.length; i++) {
  articlesec[i].addEventListener("mouseover", function () {
    articlesec[i].style.backgroundColor = getRandom(colores);
  });
  articlesec[i].addEventListener("mouseout", function () {
    articlesec[i].style.backgroundColor = "";
  });
}
