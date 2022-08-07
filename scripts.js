let items;
let btn;

function addListItem() {

    let ul = document.querySelector("ul");
    let userInput = document.getElementById("new-item");
    let newListItem = document.createElement("li");
    let errMsg = document.querySelector(".err-msg");

    if (userInput.value === "") {
        errMsg.classList.add("error");
        errMsg.innerHTML = "Please enter a to do list item"
    } else {
        newListItem.innerHTML = userInput.value;
        ul.appendChild(newListItem);
        userInput.value = "";
        userInput.focus();
        errMsg.classList.remove("error");
        addEventToListItems(items);
    }
}

function removeListItem(event) {
    event.target.classList.add("li-strikethrough");
    setTimeout(() => {
        event.target.remove();
    }, 1000)
}


btn = document.getElementById("add-new").addEventListener("click", addListItem);

function addEventToListItems(items) {
    items = document.querySelectorAll("li");

    if (items.length !== 0) {
        for (let item of items) {
            item.addEventListener("click", removeListItem);
        }
    }
}