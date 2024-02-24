import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

const buttons = document.querySelectorAll("header nav button");
const contentDiv = document.querySelector("#content");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        contentDiv.innerHTML = "";
        if (button.textContent === "Home") home();
        else if (button.textContent === "Menu") menu();
        else contact();
    });
});
