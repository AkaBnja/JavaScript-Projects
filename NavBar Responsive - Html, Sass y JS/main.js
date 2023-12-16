const toggleBtn = document.querySelector(".toggleBtn");
const toggleBtnIcon = document.querySelector(".toggleBtn i");
const dropDownMenu = document.querySelector(".dropdownMenu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
