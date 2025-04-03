'use strict';

const USER_NAME = 'username';
const HIDDEN_CLASS = 'hidden';

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");




function handleLoginForm(event){
    const value = loginInput.value;
        event.preventDefault();
        localStorage.setItem(USER_NAME, value);
        loginForm.classList.add(HIDDEN_CLASS);
        paintGreeting(value);
}

function paintGreeting(value){
    greeting.innerText = "Hello " + value;
    greeting.classList.remove(HIDDEN_CLASS);
}

const username = localStorage.getItem(USER_NAME);
if(username === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", handleLoginForm);
}else{
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASS);
}
