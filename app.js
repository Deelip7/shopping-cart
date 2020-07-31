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
let cartStatus = document.querySelector(".shopping__cart_added");

let shopping__cart_item_image = document.querySelector(
  ".shopping__cart_item_image"
);
let shopping__cart_item_name = document.querySelector(
  ".shopping__cart_item_name"
);

let shopping__cart_item_price = document.querySelector(
  ".shopping__cart_item_price"
);
let itemIncrease = 1;
let counter = 0;
let itemAdded;
let addToCartBtn = document.querySelectorAll(".card__addbtn");

// ---------------------------------------------------------------------

(function () {
  addToCartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      if (this.innerHTML == "Add to Cart") {
        cart_empty.classList.add("hidden");

        let currentItem_img =
          event.target.parentElement.children[0].children[0];
        let currentItem_name = event.target.parentElement.children[1].innerText;
        let currentItem_price =
          event.target.parentElement.children[2].innerText;

        let inDiv = document.createElement("div");
        inDiv.classList.add("shopping__cart_item");

        let itemCount = document.createElement("input");
        itemCount.setAttribute("type", "number");
        itemCount.setAttribute("min", "1");
        itemCount.classList.add("itemCount");
        itemCount.setAttribute("value", 1);

        let x = document.createElement("div");
        x.classList.add("shopping__cart_item_image");
        x.appendChild(currentItem_img.cloneNode(true));
        inDiv.appendChild(x);

        let y = document.createElement("div");
        y.classList.add("item_name");
        y.innerText = currentItem_name;
        y.appendChild(itemCount);
        inDiv.appendChild(y);

        let z = document.createElement("div");
        z.classList.add("item_price");
        z.innerText = currentItem_price;
        inDiv.appendChild(z);

        let removebtn = document.createElement("div");
        removebtn.classList.add("item_removebtn");
        removebtn.innerText = "x";
        // "<img src='https://img.icons8.com/dusk/64/000000/cancel.png' />";
        y.appendChild(removebtn);

        // ---------------------------------------------------------------------
        itemCount.addEventListener("change", updateValue);
        function updateValue(e) {
          let itemIncrease = e.target.value;
          let parsedPrice = parseFloat(currentItem_price.replace(/[$]+/g, ""));
          let updatedValue = (parsedPrice * itemIncrease).toFixed(2);
          z.innerText = "$" + updatedValue;
          showTotal();
          countItems();
        }

        shopping_cart_item.appendChild(inDiv);
        cart_btn.innerHTML = "<img src='/Images/full_cart2.PNG' />";
        cartStatus.style.display = "flex";
        removeItem(removebtn, inDiv, this);
        showTotal();
        countItems();
      }
      this.innerHTML = "Added";
    });
  });
})();
// -----------------------------Toggle Cart ----------------------------------------

cart_btn.addEventListener("click", () => {
  shopping_cart_item.classList.toggle("show");
});
// -----------------------------showTotal----------------------------------------
function showTotal() {
  const total = [];
  let items = document.querySelectorAll(".item_price");
  items.forEach(function (item) {
    let addTotal = item.textContent;
    let parsedTotal = parseFloat(addTotal.replace(/[$]+/g, ""));
    total.push(parsedTotal);
  });
  const totalAmount = total.reduce(function (total, item) {
    total += item;
    return total;
  }, 0);

  itemAdded = total > "0" ? true : false;
  totalPrice.innerText = `Sub Total :  $${
    Math.round(totalAmount * 100) / 100
  } USD`;
}

// -----------------------------Remove item from cart-----------------------------------
function removeItem(removebtn, inDiv, x) {
  removebtn.addEventListener("click", () => {
    inDiv.remove();
    showTotal();
    if (itemAdded === false) {
      cart_empty.classList.remove("hidden");
      cart_btn.innerHTML = "<img src='/Images/empty_cart2.PNG'/>";
      cartStatus.style.display = "none";
    } else if (itemAdded === true) {
      cartStatus.style.display = "flex";
    }
    x.innerText = "Add to Cart";
    countItems();
  });
}
// -----------------------------showTotal----------------------------------------
function countItems() {
  const numItem = [];
  let numitemAdded = document.querySelectorAll(".itemCount");
  numitemAdded.forEach(function (e) {
    numItem.push(e.value);
  });
  const totalItemAdded = numItem.reduce(function (numItem, e) {
    numItem += +e;
    return numItem;
  }, 0);
  totalItem.innerText = `Items in Cart : ${totalItemAdded}`;
}
