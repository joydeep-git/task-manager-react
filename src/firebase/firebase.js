// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAa01GYBKHPTZG_QFmR_wdwWZA1cAUOyW8",
authDomain: "task-manager-react-17d10.firebaseapp.com",
databaseURL: "https://task-manager-react-17d10-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "task-manager-react-17d10",
storageBucket: "task-manager-react-17d10.appspot.com",
messagingSenderId: "194322901225",
appId: "1:194322901225:web:31bcb416ec39964257a878",
measurementId: "G-RZ15XBKVGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };