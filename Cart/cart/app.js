let add = document.getElementById("phone-plus");
let remove = document.getElementById("phone-minus");
let phoneQuantity = document.getElementById("phone-quantity");

let caseAdd = document.getElementById("case-plus");
let caseRemove = document.getElementById("case-minus");
let caseQuantity = document.getElementById("case-quantity");
// product one price
let phonePrice = document.getElementById("phone-price");
let casePrice = document.getElementById("case-price");

let productOnePrice = 1219;
let productTwoPrice = 59;

add.addEventListener("click", () => {
  //   console.log(typeof phoneQuantity.value);
  let quantity = parseFloat(phoneQuantity.value);
  quantity = quantity + 1;
  phoneQuantity.value = quantity;
  phonePrice.innerHTML = quantity * productOnePrice;
  calculatePrice();
});

remove.addEventListener("click", () => {
  let quantity = parseFloat(phoneQuantity.value);
  quantity = quantity - 1;
  if (quantity >= 0) {
    phoneQuantity.value = quantity;
    phonePrice.innerHTML = quantity * productOnePrice;
  }
  calculatePrice();
});

caseAdd.addEventListener("click", () => {
  //   console.log(typeof phoneQuantity.value);
  let quantity = parseFloat(caseQuantity.value);
  quantity = quantity + 1;
  caseQuantity.value = quantity;
  casePrice.innerHTML = quantity * productTwoPrice;
  calculatePrice();
});

caseRemove.addEventListener("click", () => {
  let quantity = parseFloat(caseQuantity.value);
  quantity = quantity - 1;
  if (quantity >= 0) {
    caseQuantity.value = quantity;
    casePrice.innerHTML = quantity * productTwoPrice;
  }
  calculatePrice();
});

function calculatePrice() {
  let subTotal = document.getElementById("sub-total");
  let total = document.getElementById("total-price");
  let vat = document.getElementById("tax-amount");

  console.log(typeof phonePrice.innerText);
  console.log(typeof casePrice.innerText);

  let priceOfPhone = parseFloat(phonePrice.innerText);
  let priceOfCase = parseFloat(casePrice.innerText);

  let subTotalPrice = priceOfCase + priceOfPhone;

  subTotal.innerHTML = subTotalPrice;

  let tax = subTotalPrice / 5;
  vat.innerHTML = tax;

  grandTotal = tax + subTotalPrice;
  total.innerHTML = grandTotal;
}
