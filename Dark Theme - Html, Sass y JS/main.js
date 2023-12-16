const body = document.querySelector("body");
const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.onclick = function () {
    toggleTheme.classList.toggle("active");
    body.classList.toggle("active");
}