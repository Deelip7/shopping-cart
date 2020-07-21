let cart_btn = document.querySelector(".cart_btn");
let card = document.querySelector(".card");
let card__image = document.querySelector(".card__image");
let card_title = document.querySelector(".card_title");
let card__price = document.querySelector(".card__price");

let cart_empty = document.querySelector(".cart_empty");
let shopping_cart_item = document.querySelector(".shopping__cart");
let shopping_cart = document.querySelector(".shopping__cart_item");
let totalPrice = document.querySelector(".shopping__cart_totalPrice");
let totalItem = document.querySelector(".shopping__cart_totalItem");

let shopping__cart_item_image = document.querySelector(
  ".shopping__cart_item_image"
);
let shopping__cart_item_name = document.querySelector(
  ".shopping__cart_item_name"
);

let shopping__cart_item_price = document.querySelector(
  ".shopping__cart_item_price"
);

(function () {
  let addToCartBtn = document.querySelectorAll(".card__addbtn");
  addToCartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      cart_empty.classList.add("hidden");
      cart_empty.classList.add("hidden");

      currentItem_img = event.target.parentElement.children[0].children[0];
      currentItem_name = event.target.parentElement.children[1].innerText;
      currentItem_price = event.target.parentElement.children[2].innerText;

      let inDiv = document.createElement("div");
      inDiv.classList.add("shopping__cart_item");

      let x = document.createElement("div");
      x.classList.add("shopping__cart_item_image");
      x.appendChild(currentItem_img.cloneNode(true));
      inDiv.appendChild(x);

      let y = document.createElement("div");
      // y.appendChild(currentItem_name.cloneNode(true));
      y.innerText = currentItem_name;
      inDiv.appendChild(y);

      let z = document.createElement("div");
      // z.appendChild(currentItem_price.cloneNode(true));
      z.classList.add("item_price");

      z.innerText = currentItem_price;
      inDiv.appendChild(z);
      shopping_cart_item.appendChild(inDiv);
      this.innerHTML = "Added";
      // ----------------------------------------------------------------------------
      let price = showTotal();
      totalPrice.innerText = `Total Cost: ${price}`;
    });
  });
})();

cart_btn.addEventListener("click", () => {
  shopping_cart_item.classList.toggle("show");
});

function showTotal() {
  const total = [];
  let counter = 0;
  let items = document.querySelectorAll(".item_price");
  items.forEach(function (item) {
    total.push(parseFloat(item.textContent));
    counter++;
  });
  totalItem.innerText = `Total Item: ${counter}`;
  const totalAmount = total.reduce(function (total, item) {
    total += item;
    return total;
  }, 0);

  return Math.round(totalAmount * 100) / 100;
}
