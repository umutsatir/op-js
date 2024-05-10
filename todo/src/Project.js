class Project {
    todos;
    todoCount = 0;
    constructor(name) {
        this.name = name;
        this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    addTodo(todo) {
        this.todos.append(todo);
        this.todoCount++;
    }

    removeTodo(todo) {
        if (this.todoCount === 0) return;
        let elem = this.todos.forEach((elem) => {
            if (elem.name == this.name) return elem;
        });
        this.todos.remove(elem);
        this.todoCount--;
    }

    createProject() {
        let project = document.createElement("div");
        project.classList.add("project");
        project.innerHTML = ```
        <div class="projectContent">
        <p>logo</p>
        <p>${this.todoCount}</p>
        </div>
        <p>${this.name}</p>
        ```;
        project.appendChild(project);
    }
}

export { Project };
