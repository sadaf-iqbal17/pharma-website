document.querySelector('.login_button').addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".close_button").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector(".close_button").addEventListener("click",function(){
    document.querySelector(".popup.form--hidden").classList.remove("active");
});
var modal= document.getElementById('popup');
window.onclick= function(event)
{
    if(event.target== modal)
    {
        modal.style.display= "none"
    }
}
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message--success", "form_message--error");
    messageElement.classList.add(`form_message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form_input_error");
    inputElement.parentElement.querySelector(".input_message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form_input_error");
    inputElement.parentElement.querySelector(".input_message").textContent = "";
}
//////////////////////
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#Login");
    const createAccountForm = document.querySelector("#signup");

    document.querySelector("#link_signup").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#link_login").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password ");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signup_user" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Username must be at least 8 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});