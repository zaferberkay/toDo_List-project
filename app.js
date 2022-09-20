const addItem = document.querySelector(".add-item");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const itemList = document.getElementById("item-list");
const trashIcon = document.querySelector(".trash");

const newUl = document.createElement("ul");
itemList.appendChild(newUl);

addBtn.addEventListener("click", () => {
  if (addItem.value.trim() === "") {
    alert("Please enter an item");
  } else {
    newUl.innerHTML += `<li><button class="trash"><i class="fa-solid fa-trash"></i></button> ${addItem.value}</li>`;
    addItem.value = "";
  }
  addItem.focus();
});

//* listedeki son elemanı siliyor
// deleteBtn.addEventListener("click", () => {
//   newUl.childElementCount > 0
//     ? newUl.removeChild(newUl.lastElementChild)
//     : alert("There is no item to delete");
// });

deleteBtn.addEventListener("click", () => {
  if (newUl.childElementCount > 0) {
    alert("Are you sure all items will be deleted?");
    newUl.innerHTML = "";
  } else {
    alert("There is no item to delete");
  }
});

itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

addItem.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
  if (e.code === "Delete") {
    deleteBtn.click();
  }
});
const h1 = document.querySelector("#main1 h1");
const icon = document.querySelector("#ielement");
// console.log(h1);
// console.log(icon);

h1.addEventListener("mouseover", () => {
  icon.style.transform = "translateX(360px)";
  icon.style.transition = "all 2s ease";
});
h1.addEventListener("mouseout", () => {
  icon.style.transform = "translateX(-5px)";
  icon.style.transition = "all 1.5s ease";
});

window.addEventListener("load", () => {
  addItem.focus();
});
