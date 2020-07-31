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

        let wrapperDiv = document.createElement("div");
        let itemCount = document.createElement("input");
        let image = document.createElement("div");
        let name = document.createElement("div");
        let price = document.createElement("div");
        let removebtn = document.createElement("div");

        wrapperDiv.classList.add("shopping__cart_item");
        image.classList.add("shopping__cart_item_image");
        name.classList.add("item_name");
        price.classList.add("item_price");
        itemCount.classList.add("itemCount");
        removebtn.classList.add("item_removebtn");

        cart_btn.innerHTML = "<img src='/Images/full_cart2.PNG' />";
        name.innerText = currentItem_name;
        price.innerText = currentItem_price;
        removebtn.innerText = "x";
        itemCount.setAttribute("type", "number");
        itemCount.setAttribute("min", "1");
        itemCount.setAttribute("value", 1);

        shopping_cart_item.appendChild(wrapperDiv);
        image.appendChild(currentItem_img.cloneNode(true));
        name.appendChild(removebtn);
        name.appendChild(itemCount);
        wrapperDiv.appendChild(image);
        wrapperDiv.appendChild(name);
        wrapperDiv.appendChild(price);

        // ---------------------------------------------------------------------
        itemCount.addEventListener("change", updateValue);
        function updateValue(e) {
          let itemIncrease = e.target.value;
          let parsedPrice = parseFloat(currentItem_price.replace(/[$]+/g, ""));
          let updatedValue = (parsedPrice * itemIncrease).toFixed(2);
          price.innerText = "$" + updatedValue;
          showTotal();
          countItems();
        }

        cartStatus.style.display = "flex";
        removeItem(removebtn, wrapperDiv, this);
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
function removeItem(removebtn, wrapperDiv, focus) {
  removebtn.addEventListener("click", () => {
    wrapperDiv.classList.add("animate");
    setTimeout(function () {
      wrapperDiv.remove();
      showTotal();
      if (itemAdded === false) {
        cart_empty.classList.remove("hidden");
        cart_btn.innerHTML = "<img src='/Images/empty_cart2.PNG'/>";
        cartStatus.style.display = "none";
      } else if (itemAdded === true) {
        cartStatus.style.display = "flex";
      }
      focus.innerText = "Add to Cart";
      countItems();
    }, 500);
    // wrapperDiv.remove();
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
