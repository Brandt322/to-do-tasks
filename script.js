//Date
const dateNumber = document.querySelector(".dateNumber");
const dateMonth = document.querySelector(".dateMonth");
const dateYear = document.querySelector(".dateYear");
const dateText = document.querySelector(".dateText");

//Task container
const taskContainer = document.querySelector(".taskContainer");

//Obtener datos actuales
const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', {weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es', {month: 'short'});
    dateYear.textContent = date.toLocaleString('es', {year: 'numeric'});
} 

//events
const form = document.querySelector("#form");
const addTaskButton = document.querySelector(".addTaskButton");

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputs = new FormData(form)

    // for(let item of inputs) {
    //     console.log(item)
    // }
    console.log(inputs.get("taskText"))

    const value = inputs.get("taskText");

    const task = document.createElement("div");
    task.classList.add('task', 'borde');
    task.textContent = value;
    taskContainer.appendChild(task);

    task.addEventListener("click", changeTaskState)
    // task.textContent = value;
    // taskContainer.prepend(task);
}) 

const changeTaskState = (e) => {
    e.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    taskContainer.childNodes.forEach(item => {
        return item.classList.contains('done') ? done.push(item) : toDo.push(item);
    })
    return [...toDo, ...done];
}

const orderButton = document.querySelector(".orderButton");

orderButton.addEventListener("click", (e) => {
    e.preventDefault();
    order().forEach(item => taskContainer.appendChild(item));
})

setDate();