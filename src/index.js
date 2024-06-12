import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, set } from "firebase/database";
import sound from './assets/sound.mp3';

const firebaseConfig = {
    apiKey: "AIzaSyDNKToFbU511A_OF5y3l_9I22bqhG8rcsE",
    authDomain: "cloxious-project.firebaseapp.com",
    databaseURL: "https://cloxious-project-default-rtdb.firebaseio.com",
    projectId: "cloxious-project",
    storageBucket: "cloxious-project.appspot.com",
    messagingSenderId: "44918807587",
    appId: "1:44918807587:web:fb52ba0b5d209fa00ca596",
    measurementId: "G-WWP6JL05PH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const counter = {
    counter: 0
};

onValue(ref(database, 'counter'), (snapshot) => {
    const data = snapshot.val();
    counter.counter = data.counter;
    document.querySelector('span').textContent = counter.counter;
});

document.querySelector('button').addEventListener('click', () => {
    const button = document.querySelector('button');
    const audio = new Audio(sound);
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
    button.disabled = true;
    audio.addEventListener('ended', () => {
        button.disabled = false;
    });
    set(ref(database, 'counter'), {
        counter: counter.counter + 1
    });
});
