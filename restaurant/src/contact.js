const contentDiv = document.querySelector("#content");

let contactHeader = document.createElement("div");
contactHeader.classList.add("card");

let names = ["Arthur", "Michael", "John"];

function createContactDiv(name) {
    let contactDiv = document.createElement("div");
    contactDiv.classList.add("card");
    let contactName = document.createElement("h1");
    contactName.textContent = name;
    let contactNumber = document.createElement("p");
    contactNumber.textContent = "555-555-5555";
    let contactMail = document.createElement("p");
    contactMail.textContent = "realMail@notFakeMail.com";
    contactDiv.appendChild(contactName);
    contactDiv.appendChild(contactNumber);
    contactDiv.appendChild(contactMail);
    return contactDiv;
}

function contact() {
    names.forEach((name) => {
        let newDiv = createContactDiv(name);
        contentDiv.appendChild(newDiv);
    });
}

export { contact };
