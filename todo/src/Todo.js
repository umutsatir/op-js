import { format } from "../node_modules/date-fns";

class Todo {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    createTodo() {
        let todoDiv = document.createElement("div");
        todoDiv.innerHTML = ```
        <p class="todoDate">${format(new Date(), "dd/MM/yyyy")}</p>
                            <div class="todoContent">
                                <i>Todo</i>
                                <div>
                                    <p>
                                        ${this.desc}
                                    </p>
                                    <p>${this.project} - ${this.dueDate}</p>
                                </div>
                            </div>
                            <hr />
        ```;
    }
}

export { Todo };
