import { Project } from "./Project.js";
import { Todo } from "./Todo.js";

let defaultProject = new Project("unnamed");
let currentProject = currentProject;
let projects = { defaultProject };
let projectsDiv = document.querySelector(".projects");
let todosDiv = document.querySelector(".todos");
let addButton = document.querySelector(".addBtn");
let addMenu = document.querySelector(".addMenu");
let addTodoBtn = document.querySelector(".addTodoBtn");
let projectName = document.querySelector(".projectName");
let todoTitle = document.querySelector(".todoTitle");
let todoDesc = document.querySelector(".todoDesc");
let todoDate = document.querySelector(".todoDate");
let todoPriority = document.querySelector(".todoPriority");
let removeTodoBtn = document.querySelector(".removeTodo");

// loading the data
projects.forEach((element) => {
    element.createProject();
});

// create button menu
addButton.addEventListener("click", function () {
    addMenu.classList.toggle("invisible");
});

// remove todo
removeTodoBtn.addEventListener("click", function (e) {
    let title = e.target.parentElement.querySelector(".todoTitle");
    currentProject.removeTodoBtn(title);
});

// add todo button
addTodoBtn.addEventListener("click", function () {
    currentProject.addTodo(
        todoTitle.textContent,
        todoDesc.textContent,
        todoDate.textContent,
        todoPriority.textContent
    );
});

// changing projects
projectsDiv.forEach((outerElem) => {
    outerElem.addEventListener("click", function () {
        let foundProject = projects.forEach((elem) => {
            if (elem.name === element.querySelector(".projectName").textContent)
                return elem;
        });
        currentProject = foundProject;

        outerElem.forEach((innerElem) => {
            // assign all of the projects passive, so only one of them can be active
            innerElem.classList.add("passive");
        });

        element.classList.remove("passive");
        element.style.color = "#efefef";
        element.style.backgroundColor = currentProject.color;
        currentProject.todos.forEach((elem) => {
            // creating todos
            elem.createTodo();
        });
    });
});
