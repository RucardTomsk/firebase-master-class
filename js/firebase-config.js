// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import { getDatabase} from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkS3B1jhS5dipieDRwm_Wz7CYoJE0jVJc",
    authDomain: "master-class-ugu.firebaseapp.com",
    projectId: "master-class-ugu",
    storageBucket: "master-class-ugu.appspot.com",
    messagingSenderId: "225247673994",
    appId: "1:225247673994:web:06488f228cc30dcfd57773",
    measurementId: "G-SMZ40RK0FD",
    databaseURL: "https://master-class-ugu-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export  const db = getDatabase(app);