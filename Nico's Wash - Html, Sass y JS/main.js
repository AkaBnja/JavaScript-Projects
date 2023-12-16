const toggleBtn = document.querySelector(".toggleBtn");
const toggleBtnIcon = document.querySelector(".toggleBtn i");
const dropDownMenu = document.querySelector(".dropdownMenu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 500,
        modifier: 1,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

function sendMail() {
    const formName = document.getElementById("nameForm").value;
    const formEmail = document.getElementById("emailForm").value;
    const formNumber = document.getElementById("numberForm").value;
    const formText = document.getElementById("textForm").value;

    if (formName === "" || formEmail === "" || formNumber === "" || formText === "") {
        alert("Por favor, complete todos los campos del formulario.");
    } else {
        let params = {
            from_name: formName,
            email_id: formEmail,
            number_phone: formNumber,
            message: formText,
        };

        emailjs.send("", "", params)
            .then(function (res) {
                alert("El mensaje ha sido enviado correctamente.");
            });
        ClearFields()
    }
}

function ClearFields() {
    document.getElementById("nameForm").value = "";
    document.getElementById("emailForm").value = "";
    document.getElementById("numberForm").value = "";
    document.getElementById("textForm").value = "";
}