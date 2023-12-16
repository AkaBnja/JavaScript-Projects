const menuToggle = document.querySelector(".menuToggle");
const menuNavigation = document.querySelector(".menuNavigation");
const list = document.querySelectorAll(".list");

menuToggle.onclick = function () {
    menuNavigation.classList.toggle("open");
};

function activateLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item)=> 
item.addEventListener("click", activateLink)
)