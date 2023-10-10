const addBookButton = document.querySelector("#book");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const checkBox = document.getElementById("isRead");
const container = document.querySelector(".container");
const addBook = document.querySelector(".submit-button");
const buttonContent = document.querySelector(".buttonContent");
const form = document.querySelector("form")


function whenPressed() {
    addBookButton.addEventListener("click", () => {
        buttonContent.style.visibility = "visible";
    })
    false
}
function makeInvisible() {
    buttonContent.style.visibility = "hidden";
}
buttonContent.addEventListener("click", (e) => {
    const Outside = !e.target.closest("form");
    if (Outside) {
        makeInvisible();
    }
})
whenPressed();
function Book (title, author, pages, readOrNot) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
}







