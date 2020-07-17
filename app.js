// let btn = document.querySelector(".btn");
// let x = 0;
// btn.addEventListener("click", () => {
//   x++;
//   let inputContainer = document.createElement("div");
//   let title = document.createElement("input");
//   let notes = document.createElement("textarea");
//   let delbtn = document.createElement("button");
//   let flip = document.createElement("button");
//   let emptydiv = document.querySelector(".emptydiv");
//   let answer = document.createElement("textarea");

//   title.placeholder = "Set Title";
//   title.classList.add("title");
//   notes.placeholder = "Enter Question";
//   answer.placeholder = "Enter Answer";
//   notes.classList.add("notes");
//   answer.classList.add("notes");
//   answer.classList.add("answer");
//   delbtn.classList.add("delbtn");
//   flip.classList.add("flip");
//   emptydiv.classList.add("hidcard");

//   delbtn.innerText = "X";
//   flip.innerText = "⥂";
//   answer.classList.add("hidCard");

//   inputContainer.classList.add("inputContainer");
//   //   inputContainer.innerText = `Note - ${x}`;

//   document.body.appendChild(inputContainer);
//   inputContainer.appendChild(title);
//   inputContainer.appendChild(notes);
//   inputContainer.appendChild(delbtn);
//   inputContainer.appendChild(answer);
//   inputContainer.appendChild(flip);

//   delbtn.onclick = () => {
//     // inputContainer.classList.add("hidCard");
//     document.body.removeChild(inputContainer);
//   };
//   flip.onclick = () => {
//     inputContainer.classList.toggle("flips");
//     answer.classList.toggle("hidCard");
//     answer.classList.toggle("textareaFlips");
//     delbtn.classList.toggle("textareaFlips");

//     title.classList.toggle("hidCard");
//     notes.classList.toggle("hidCard");
//     notes.placeholder = "";
//   };
// });

const slider = document.querySelector(".cart__images");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchend ", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("touchmove ", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

//----------------------------------------------------
window.onscroll = function () {
  let x = document.querySelector(".product-in-cart");
  x.style.display = "none";
};

let prevScrollpos = window.pageYOffset;
let x = document.querySelector(".product-in-cart");
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    x.style.bottom = "0";
  } else {
    x.style.bottom = "-150px";
  }
  prevScrollpos = currentScrollPos;
};
