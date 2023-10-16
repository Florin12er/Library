const addBookButton = document.querySelector("#book");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const checkBox = document.getElementById("isRead");
const container = document.querySelector(".container");
const addBook = document.querySelector(".submit-button");
const buttonContent = document.querySelector(".buttonContent");
const form = document.querySelector("form");
const readOrNot = document.getElementById("Is-read")

const myLibrary = [];
    addBookButton.addEventListener("click", () => {
        buttonContent.style.visibility = "visible";
    })
    false
function makeInvisible() {
    buttonContent.style.visibility = "hidden";
}

class Book {
    constructor(title, author, pages, readOrNot) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readOrNot = readOrNot;}
    }
function createBookDescription(index) {
    const bookDescription = `
    <div id="Card-container" class="card-container" id="${index}">
    <div class="card">
     <p class="card-left">Title:</p>
     <p class="card-right">${myLibrary[index].title}</p>
     <p class="card-left">Author:</p>
     <p class="card-right">${myLibrary[index].author}</p>
     <p class="card-left">Page:</p>
     <p class="card-right">${myLibrary[index].pages}</p>
     <p class="card-left">Read:</p>
     <p class="card-right">${myLibrary[index].readOrNot}</p>
     <button class="trash"><svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 24 24"><title>close-box-multiple</title>
     <path d="M4 20H18V22H4C2.9 22 2 21.11 2 20V6H4V20M20.22 2H7.78C6.8 2 6 2.8 6 3.78V16.22C6 17.2 6.8 18
      7.78 18H20.22C21.2 18 22 17.2 22 16.22V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6L12.6 10L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10L19 13.6Z" /></svg></button>
     </div>
</div>`;

         return(container.innerHTML += bookDescription);
}
function addBookToLibrary() {
    const newBook = myLibrary.push(
        new Book(title.value, author.value, pages.value ,readOrNot.value)
    );
    let index = myLibrary.length - 1;
    createBookDescription(index);
    title.value = "";
    author.value = "";
    pages.value = "";
    readOrNot.value = "";

    buttonContent.style.visibility = "hidden";

const removeButton = document.querySelector(".trash")
const card = document = document.getElementById("Card-container");
function remove() {
    card.remove();
};

removeButton.addEventListener("click", remove);

}

addBook.addEventListener("click",addBookToLibrary);








