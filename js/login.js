import { login, register } from './auth.js';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("login test");
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    login(email, password);
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('registerNameInput').value;
    const email = document.getElementById('registerEmailInput').value;
    const password = document.getElementById('registerPasswordInput').value;
    register(name, email, password);
});

