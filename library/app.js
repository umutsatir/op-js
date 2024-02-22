const myLibrary = [];
let id = 0;

const cards = document.querySelector(".cards");
const addButton = document.querySelector("add-book");
const addMenuOpenBtn = document.querySelector("open-menu");
const closeButton = document.querySelector(".close");

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBook() {
    const title = this.querySelector('input[id="title"]').value;
    const author = this.querySelector('input[id="author"]').value;
    const pages = this.querySelector('input[id="page"]').value;
    const read = this.querySelector('input[id="checkbox"]').checked;

    myLibrary.push({id:++id, book: new Book(title, author, pages, read)});
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <svg id="close-card" class="close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-circle-outline</title><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>
        <h2>Title: "${title}"</h2>
        <p>Author: ${author}</p>
        <p>Page Number: ${pages}</p>
        <p>Read?</p>
        <label class="switch">
        <input type="checkbox" class="slider-checkbox"  ${read ? 'checked' : ''}>
        <span class="slider round"></span>
        </label>
    `
}