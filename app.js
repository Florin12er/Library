function Book (title, author, pages, readOrNot) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
}

const Book1 = new Book("etc", "f", 3, "yes");
const Book2 = new Book("the way of the superior man", "david deida" , 300, "no")


console.log(Book2.author);



