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
let counter = 0;
let addToCartBtn = document.querySelectorAll(".card__addbtn");
let itemAdded;
let itemCount;

// ---------------------------------------------------------------------

(function () {
  addToCartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      if (this.innerHTML == "Add to Cart") {
        cart_empty.classList.add("hidden");
        cart_empty.classList.add("hidden");

        currentItem_img = event.target.parentElement.children[0].children[0];
        currentItem_name = event.target.parentElement.children[1].innerText;
        currentItem_price = event.target.parentElement.children[2].innerText;

        let inDiv = document.createElement("div");
        inDiv.classList.add("shopping__cart_item");

        itemCount = document.createElement("input");
        itemCount.setAttribute("type", "number");
        itemCount.classList.add("itemCount");

        inDiv.appendChild(itemCount);

        let x = document.createElement("div");
        x.classList.add("shopping__cart_item_image");
        x.appendChild(currentItem_img.cloneNode(true));
        inDiv.appendChild(x);

        let y = document.createElement("div");
        y.classList.add("item_name");

        y.innerText = currentItem_name;
        inDiv.appendChild(y);

        let z = document.createElement("div");
        z.classList.add("item_price");

        let removebtn = document.createElement("div");
        removebtn.classList.add("item_removebtn");
        // removebtn.innerText = "X";
        inDiv.appendChild(removebtn);
        // ---------------------------------------------------------------------
        z.innerText = currentItem_price;
        inDiv.appendChild(z);
        shopping_cart_item.appendChild(inDiv);
        cart_btn.innerHTML = "<img src='/Images/full_cart2.PNG' />";
        removebtn.innerHTML =
          "<img src='https://img.icons8.com/dusk/64/000000/cancel.png' />";
        // "<img src='https://img.icons8.com/dusk/64/000000/delete-sign.png' />";

        counter = 2;
        itemCount.setAttribute("value", counter);
        showTotal(itemCount.value);
        dupilcate(inDiv);
        removeItem(removebtn, inDiv, this, itemCount.value);
      } else {
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

function dupilcate(x) {
  const itemName = [];
  let items = document.querySelectorAll(".item_name");
  items.forEach(function (item) {
    itemName.push(item.textContent);
  });
}

// -----------------------------showTotal----------------------------------------
function showTotal(itemCount) {
  const total = [];
  counter = 0;

  let items = document.querySelectorAll(".item_price");
  items.forEach(function (item) {
    total.push(parseFloat(item.textContent));
    counter++;
  });
  totalItem.innerText = `Total Item: ${counter}`;
  const totalAmount = total.reduce(function (total, item) {
    total += item;
    return total * itemCount;
  }, 0);

  totalPrice.innerText = `Total Cost: ${Math.round(totalAmount * 100) / 100}`;
}

// -----------------------------Remove item from cart-----------------------------------
function removeItem(removebtn, inDiv, x, z) {
  removebtn.addEventListener("click", () => {
    inDiv.remove();
    showTotal();
    if (counter === 0) {
      cart_empty.classList.remove("hidden");
      cart_btn.innerHTML = "<img src='/Images/empty_cart2.PNG' />";
    }
    x.innerText = "Add to Cart";
    console.log(z);
  });
}

//------------------------Add to cart button onClick Effect ----------------------

function btnEffect(e) {
  var targetEl = e.target;
  var inkEl = targetEl.querySelector(".ink");
  if (inkEl) {
    inkEl.classList.remove("animate");
  } else {
    inkEl = document.createElement("span");
    inkEl.classList.add("ink");
    inkEl.style.width = inkEl.style.height =
      Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + "px";
    targetEl.appendChild(inkEl);
  }
  inkEl.style.left = e.offsetX - inkEl.offsetWidth / 2 + "px";
  inkEl.style.top = e.offsetY - inkEl.offsetHeight / 2 + "px";
  inkEl.classList.add("animate");
}
