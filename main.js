let container = document.querySelector(".container");
let input = document.querySelector("input");
let add = document.querySelector(".add");
let edit = document.querySelector(".edit");
let delet = document.querySelector(".delete");
const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

add.addEventListener("click", function (e) {
  if (input.value === "") {
    e.preventDefault();
  } else {
    if (itemsArray.includes(input.value)) {
      e.preventDefault();
    } else {
      itemsArray.push(input.value);
      localStorage.setItem("items", JSON.stringify(itemsArray));
      createElement(input.value);
      input.value = "";
      input.focus();
    }
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.parentNode.remove();

    itemsArray.splice(
      itemsArray.indexOf(e.target.parentNode.parentNode.textContent),
      1
    );
    localStorage.setItem("items", JSON.stringify(itemsArray));
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit")) {
    input.value = e.target.parentNode.parentNode.textContent;
    itemsArray.splice(
      itemsArray.indexOf(e.target.parentNode.parentNode.textContent),
      1
    );
    localStorage.setItem("items", JSON.stringify(itemsArray));
    input.focus();
    e.target.parentNode.parentNode.remove();
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("toDo")) {
    e.target.classList.toggle("done");
  }
})
window.onload = function () {
  input.focus();
  showData();
};

function createElement(a) {
  let div = document.createElement("div");
  let span = document.createElement("span");
  let firstIcon = document.createElement("i");
  let secondIcon = document.createElement("i");
  firstIcon.classList.add("fa-solid");
  firstIcon.classList.add("fa-pen");
  firstIcon.classList.add("edit");
  secondIcon.classList.add("fa-regular");
  secondIcon.classList.add("fa-trash-can");
  secondIcon.classList.add("delete");
  span.appendChild(firstIcon);
  span.appendChild(secondIcon);
  div.classList.add("toDo");
  div.innerHTML += a;
  div.appendChild(span);
  container.appendChild(div);
}
function showData() {
  for (let i = 0; i < itemsArray.length; i++) {
    let div = document.createElement("div");
    let span = document.createElement("span");
    let firstIcon = document.createElement("i");
    let secondIcon = document.createElement("i");
    firstIcon.classList.add("fa-solid");
    firstIcon.classList.add("fa-pen");
    firstIcon.classList.add("edit");
    secondIcon.classList.add("fa-regular");
    secondIcon.classList.add("fa-trash-can");
    secondIcon.classList.add("delete");
    span.appendChild(firstIcon);
    span.appendChild(secondIcon);
    div.classList.add("toDo");
    div.innerHTML += itemsArray[i];
    div.appendChild(span);
    container.appendChild(div);
  }
}
console.log(JSON.parse(localStorage.getItem("items")));
console.log(itemsArray);