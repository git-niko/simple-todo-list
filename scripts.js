"use strict";

let items;
let btn;

// *************** Add List Item *************** 
function addListItem() {

    let ul = document.querySelector("ul");
    let userInput = document.getElementById("new-item");
    let newListItem = document.createElement("li");
    let errMsg = document.querySelector(".err-msg");

    // check if input is empty
    if (userInput.value === "") {
        errMsg.classList.add("error");
        errMsg.innerHTML = "Please enter a to do list item"
    } else {
        // if not empty, add the value to the new li
        // put focus back to input field & remove error msg
        // call addEventToListItems()
        newListItem.innerHTML = userInput.value;
        ul.appendChild(newListItem);
        userInput.value = "";
        userInput.focus();
        errMsg.classList.remove("error");
        addEventToListItems(items);
    }
}

// *************** Remove List Item *************** 
function removeListItem(event) {
    // add a line through the list item & remove after 1 sec
    event.target.classList.add("li-strikethrough");
    setTimeout(() => {
        event.target.remove();
    }, 1000)
}

// *************** Event Listeners *************** 
btn = document.getElementById("add-new").addEventListener("click", addListItem);

function addEventToListItems(items) {
    items = document.querySelectorAll("li");

    if (items.length !== 0) {
        for (let item of items) {
            item.addEventListener("click", removeListItem);
        }
    }
}