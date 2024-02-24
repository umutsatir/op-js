let myLibrary = [];
let id = 0;

const cards = document.querySelector(".cards");
const addButton = document.querySelector(".add-book");
const addMenuOpenBtn = document.querySelector(".open-menu");
const closeButton = document.querySelector(".close");
const formDiv = document.querySelector("#formDiv");
let removeButtons = document.querySelectorAll(".cards.close");

class Book {
    constructor(title, author, page, read) {
        this.title = title;
        this.author = author;
        this.page = page;
        this.read = read;
    }
}

function addBook() {
    const title = document.querySelector('input[id="title"]').value;
    const author = document.querySelector('input[id="author"]').value;
    const pages = document.querySelector('input[id="page"]').value;
    const read = document.querySelector('input[id="checkbox"]').checked;

    myLibrary.push({id:++id, book: new Book(title, author, pages, read)});
    const card = document.createElement("div");
    if (read)
        card.classList.add("read");
    card.classList.add("card");
    card.id = "card" + String(id);
    card.innerHTML = `
        <p><strong>Title: </strong>${title}</p>
        <p><strong>Author: </strong>${author}</p>
        <p><strong>Number of Page: </strong>${pages}</p>
        <button class="btn close" onclick="remove(${id})"><strong>X<strong></button>
        <button class="btn" onclick="setRead(${id})"><strong>Read/Unread<strong></button>`
    cards.appendChild(card);
}

function remove(id) {
    let cardID = "card" + String(id);
    const card = document.getElementById(cardID);
    cards.removeChild(card);
    myLibrary = myLibrary.filter((elem) => {
        return elem.id != id;
    });
}

function setRead(id) {
    let cardID = "card" + String(id);
    const card = document.getElementById(cardID);
    card.classList.toggle("read");
    for (let index = 0; index < myLibrary.length; index++) {
        if (myLibrary[index]["id"] === id) {
            myLibrary[index]["book"]["read"] = !myLibrary[index]["book"]["read"];
            break;
        }
    }
}

addMenuOpenBtn.addEventListener("click", function() {
    formDiv.classList.remove("invisible");
});

closeButton.addEventListener("click", function() {
    formDiv.classList.add("invisible");
});

addButton.addEventListener("click", function() {
    addBook();
});
