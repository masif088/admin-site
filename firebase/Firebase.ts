// Import the functions you need from the SDKs you need


import {FirebaseApp, initializeApp} from "firebase/app";
import {Firestore, getFirestore} from "@firebase/firestore";
import {FirebaseStorage, getStorage} from "@firebase/storage";
import {Auth, getAuth} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5mkwuiXOBpxoqD45CA3qbQtKxwYc-9Og",
    authDomain: "adminsite-62adc.firebaseapp.com",
    projectId: "adminsite-62adc",
    storageBucket: "adminsite-62adc.appspot.com",
    messagingSenderId: "86579045809",
    appId: "1:86579045809:web:490bbbfc57864baaf18990"
};

// Initialize Firebase
const app:FirebaseApp = initializeApp(firebaseConfig);
const db:Firestore = getFirestore(app);
const storage:FirebaseStorage = getStorage(app);
const auth:Auth = getAuth(app);
export {app,db,storage,auth}