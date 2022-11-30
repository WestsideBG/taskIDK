import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let price = document.getElementsByClassName("price")[0].innerHTML

  let products = document.getElementsByClassName("product")
  for (let index = 0; index < products.length; index++) {
    products[index].setAttribute("data-price", price) 
  }
});
