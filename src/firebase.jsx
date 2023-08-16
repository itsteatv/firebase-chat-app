import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6uk2CuibuU-IBUAdGOB9af2UAuYfbG-w",
    authDomain: "fir-chat-app-69bea.firebaseapp.com",
    projectId: "fir-chat-app-69bea",
    storageBucket: "fir-chat-app-69bea.appspot.com",
    messagingSenderId: "355097017841",
    appId: "1:355097017841:web:1596817b01ae11ad0ed850",
    measurementId: "G-TNHNNR7FMW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const auth = getAuth(app);