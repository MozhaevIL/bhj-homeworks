const button = document.querySelector("button.tasks__add");
const input = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");

function getStorage() {
    tasksList.innerHTML = localStorage.getItem("tasksStorage");
    const storageTasks = document.querySelectorAll(".task");
    for (let storageTask of storageTasks) {
        const storageTaskDelete = storageTask.querySelector(".task__remove");
        storageTaskDelete.addEventListener("click", (evt) => {
            storageTask.remove();
            evt.preventDefault();
        })
    }
}

getStorage();


button.addEventListener("click", (evt) => {
    const taskInput = input.value.trim();
    if(taskInput) {
        const newTask = document.createElement("div");
        newTask.className = "task";
        newTask.innerHTML = `
            <div class="task__title">
                ${taskInput}
            </div>
            <a href="#" class="task__remove">&times;</a>`;
        tasksList.insertAdjacentElement("afterBegin", newTask);
        input.value = null;

        const taskDelete = document.querySelector(".task__remove");
        taskDelete.addEventListener("click", (evt) => {
            newTask.remove();
        })
    } else {
        console.log("Пустое поле");
    }

    const taskListHTML = tasksList.innerHTML;
    localStorage.setItem("tasksStorage", taskListHTML);
    
    evt.preventDefault();
})

button.addEventListener("keydown", (evt) => {
    if(evt.keycode === 13) {
        button.click;
    }
})