"use strict";

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
document.getElementById("add-new").addEventListener("click", addListItem);
document.querySelector("ul").addEventListener("click", removeListItem);