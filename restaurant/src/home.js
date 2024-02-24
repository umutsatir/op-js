const contentDiv = document.querySelector("#content");

let welcomeDiv = document.createElement("div");
welcomeDiv.classList.add("card");

let welcomeH1 = document.createElement("h1");
let welcomeP = document.createElement("p");
welcomeH1.textContent = "Welcome to the Elite Restaurant!";
welcomeP.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quo in quisquam voluptates! Ducimus sapiente cum amet adipisci eaque vero repellendus sit animi facere! Officiis commodi hic blanditiis. Perferendis, nostrum!";
welcomeDiv.appendChild(welcomeH1);
welcomeDiv.appendChild(welcomeP);

let hoursDiv = document.createElement("div");
hoursDiv.classList.add("card");

let hoursH1 = document.createElement("h1");
hoursH1.textContent = "Hours";

let hoursP = document.createElement("p");
hoursP.innerHTML =
    "Sunday: 8am - 8pm <br>Monday: 6am - 6pm <br>Tuesday: 6am - 6pm <br>Wednesday: 6am - 6pm <br>Thursday: 6am - 10pm <br>Friday: 6am - 10pm <br>Saturday: 8am - 10pm";
hoursDiv.appendChild(hoursH1);
hoursDiv.appendChild(hoursP);

let locationDiv = document.createElement("div");
locationDiv.classList.add("card");

let locationH1 = document.createElement("h1");
locationH1.textContent = "Location";

let locationP = document.createElement("p");
locationP.textContent = "123 Forest Drive, Forestville, Maine";
locationDiv.appendChild(locationH1);
locationDiv.appendChild(locationP);

function home() {
    contentDiv.appendChild(welcomeDiv);
    contentDiv.appendChild(hoursDiv);
    contentDiv.appendChild(locationDiv);
}

export { home };
