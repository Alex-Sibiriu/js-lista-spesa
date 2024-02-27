const shoppingList = document.getElementById('output');
const productList = ["Pane", "Latte", "Uova", "Frutta", "Verdura", "Latte", "Uova", "Frutta", "Verdura", "Latte", "Uova", "Frutta", "Verdura", "Uova", "Frutta", "Verdura", "Latte", "Uova", "Frutta", "Verdura", "Uova", "Frutta", "Verdura"];
let counter = 0;

while (counter < productList.length) {
  shoppingList.innerHTML += `<li class='pe-4 pb-3'>${productList[counter]}</li>`;
  counter++;
}

const products = document.querySelectorAll('li');

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function(event) {
    let clickedElement = event.target;
    clickedElement.classList.toggle("product_clicked");

    let allClicked = true;
    for (let c = 0; c < products.length; c++) {
      if (!products[c].classList.contains("product_clicked")) {
        allClicked = false;
      }
    }

    const message = document.querySelector('.message');
    if (allClicked) {
      message.innerHTML = 'Hai finito di fare la spesa';
    } else {
      message.innerHTML = 'Non hai ancora finito di fare la spesa';
    }
  });
}