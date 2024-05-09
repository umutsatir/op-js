class Todo {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

let todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
let todoDate = document.createElement("p");
