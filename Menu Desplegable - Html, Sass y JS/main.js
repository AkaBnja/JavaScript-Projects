const toggleMenu = document.querySelector(".toggle");
const navigationMenu = document.querySelector(".navigation");

toggleMenu.onclick = function () { // Se indica que cuando se haga un click en el objeto mencionado se aplicara lo siguiente...
    toggleMenu.classList.toggle("active"); // Esta es una forma de hacer que el objeto que se seleccione se le añada le indique que es un toggle/palanca, lo que hace que tenga un efecto de activo/desactivado.
    navigationMenu.classList.toggle("active"); // Esta es una forma de hacer que el objeto que se seleccione se le añada le indique que es un toggle/palanca, lo que hace que tenga un efecto de activo/desactivado.
}
