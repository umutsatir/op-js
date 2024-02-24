const contentDiv = document.querySelector("#content");

let menuNames = ["Beverages", "Sides", "Main Dishes", "Desserts"];
let beverageNames = ["Tea", "Coke", "Water"];
let sideNames = ["Toast", "Fresh Fruit"];
let mainDishNames = ["Pancakes", "Steak", "Pasta"];
let dessertNames = ["Cake", "San Sebastian", "Pudding"];
let allNames = [beverageNames, sideNames, mainDishNames, dessertNames];

function createItem(name) {
    let newItem = document.createElement("div");
    newItem.classList.add("card");
    let h1 = document.createElement("h1");
    h1.textContent = name;
    newItem.appendChild(h1);
    let p = document.createElement("p");
    p.textContent =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quo in quisquam voluptates! Ducimus sapiente cum amet adipisci eaque vero repellendus sit animi facere! Officiis commodi hic blanditiis. Perferendis, nostrum!";
    newItem.appendChild(p);
    return newItem;
}

function createHeader(name) {
    let newHeader = document.createElement("div");
    newHeader.classList.add("card");
    let h1 = document.createElement("h1");
    h1.textContent = name;
    newHeader.appendChild(h1);
    return newHeader;
}

function menu() {
    let i = 0;
    menuNames.forEach((itemName) => {
        let newHeader = createHeader(itemName);
        contentDiv.appendChild(newHeader);
        allNames[i].forEach((name) => {
            let newCard = createItem(name);
            contentDiv.appendChild(newCard);
        });
        i++;
    });
}

export { menu };
