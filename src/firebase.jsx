import firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6uk2CuibuU-IBUAdGOB9af2UAuYfbG-w",
    authDomain: "fir-chat-app-69bea.firebaseapp.com",
    projectId: "fir-chat-app-69bea",
    storageBucket: "fir-chat-app-69bea.appspot.com",
    messagingSenderId: "355097017841",
    appId: "1:355097017841:web:1596817b01ae11ad0ed850",
    measurementId: "G-TNHNNR7FMW"
})

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const analytics = getAnalytics(firebaseApp);

export { db, auth }