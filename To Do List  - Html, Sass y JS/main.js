const date = document.querySelector("#date");
const list = document.querySelector("#list");
const input = document.querySelector("#input");
const enter = document.querySelector("#enter");
const check = "fa-check-circle";
const unCheck = "fa-circle";
const lineThrough = "line-through";
let id;
let LIST;

// FECHA

const DATE = new Date();
const options = { weekday: "long", month: "short", day: "numeric" };
const dayOfWeek = DATE.toLocaleDateString("es", options).split(",")[0];
const capitalizedDayOfWeek =
    dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
const formattedDate =
    capitalizedDayOfWeek +
    DATE.toLocaleDateString("es", options).substring(dayOfWeek.length);
date.innerHTML = formattedDate;

// Funcion de agregar tarea

function addTasks(task, id, done, remove) {
    if (remove) {
        return;
    }
    const DONE = done ? check : unCheck;
    const LINE = done ? lineThrough : "";
    const element = `<li id="element">
                    <i class="fa-regular ${DONE}" data="done" id="${id}"></i>
                    <p class="text ${LINE}">${task}</p>
                    <i class="fa-solid fa-trash" data="remove" id="${id}"></i>
                    </li>`;
    list.insertAdjacentHTML("beforeend", element);
}

// Funcion tarea realizada

function taskDone(element) {
    element.classList.toggle(check);
    element.classList.toggle(unCheck);
    element.parentNode.querySelector(".text").classList.toggle(lineThrough);
    console.log(LIST[element.id].done);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// Funcion tarea eliminada

function taskRemove(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].remove = true;
}

enter.addEventListener("click", () => {
    const task = input.value;
    if (task) {
        addTasks(task, id, false, false);
        LIST.push({
            name: task,
            id: id,
            node: true,
            remove: false,
        });
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));
    input.value = "";
    id++;
});

document.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        const task = input.value;
        if (task) {
            addTasks(task, id, false, false);
            LIST.push({
                name: task,
                id: id,
                node: true,
                remove: false,
            });
        }
        localStorage.setItem("TODO", JSON.stringify(LIST));
        input.value = "";
        id++;
    }
});

list.addEventListener("click", function (event) {
    const element = event.target;
    const elementData = element.attributes.data.value;
    console.log(elementData);
    if (elementData === "done") {
        taskDone(element);
    } else if (elementData === "remove") {
        taskRemove(element);
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

// Funcion para que al iniciar pagina recuerde lo que ya se habia hecho // localStorage get item

let data = localStorage.getItem("TODO");
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else {
    LIST = [];
    id = 0;
}

function loadList(DATA) {
    DATA.forEach(function (i) {
        addTasks(i.name, i.id, i.done, i.remove);
    });
}
