import {auth, db} from './firebase-config.js';
import {onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import {ref,child,get} from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM LOAD")
    onAuthStateChanged(auth, user => {
        if (user) {
            const dbRef = ref(db);
            get(child(dbRef, 'users/' + user.uid + '/name')).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    document.getElementById('userName').innerText = snapshot.val();
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
                //window.location.href = '../pages/login.html'; // Перенаправление на страницу входа, если пользователь не авторизован
            });
        }
    });
});

function logout() {
    signOut(auth).then(() => {
        window.location.href = '../pages/login.html';
    }).catch((error) => {
        console.error('Ошибка при выходе', error);
    });
}