import { auth, db } from './firebase-config.js';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import {ref, set } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';


function showToast(message) {
    const toastHtml = `<div class="toast align-items-center text-white bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>`;
    const toastPlacement = document.getElementById('toastPlacement');
    toastPlacement.insertAdjacentHTML('beforeend', toastHtml);
    var toastEl = toastPlacement.lastElementChild;
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function setUser(uid, name, email){
    set(ref(db, 'users/' + uid), {
        name: name,
        email: email
    });

    return true
}
export function register(name, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Пользователь успешно создан, теперь сохраняем его имя
            const uid = userCredential.user.uid;
            console.log("userID " + uid, "name " + name)
            const t = setUser(uid, name, email)
        })
        .catch((error) => {
            console.error("Error registering:", error.message);
            alert("Ошибка регистрации: " + error.message);
        });
}

export function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = '../pages/managerMenu.html'; // Перенаправление на страницу меню
        })
        .catch((error) => {
            showToast("Ошибка входа: " + error.message); // Показать сообщение в Toast
        });
}