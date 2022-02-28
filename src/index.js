const burgerikon = document.querySelector("nav .burger");
const burgercontent = document.querySelector("nav .burgercontent");

burgerikon.addEventListener("click", fjernBurger);

function fjernBurger() {
  burgerikon.classList.toggle("left-0");
  burgerikon.classList.toggle("left-full");

  burgercontent.classList.toggle("left-0");
  burgercontent.classList.toggle("left-full");
}
