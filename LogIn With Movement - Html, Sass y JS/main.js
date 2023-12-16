const container = document.querySelector(".container");
const btnSignUp = document.getElementById("sign-up-btn");
const btnSignIn = document.getElementById("sign-in-btn");

btnSignUp.addEventListener("click", ()=> {
    container.classList.add("signUpMode")
});

btnSignIn.addEventListener("click", ()=> {
    container.classList.remove("signUpMode")
});