const shoppingList = document.getElementById('output');
const productList = ["Pane", "Latte", "Uova", "Frutta", "Verdura"];
let counter = 0;

while (counter < productList.length) {
  shoppingList.innerHTML += `<li>${productList[counter]}</li>`;
  counter++;
}