// import { initializeApp } from 'firebase/app'
// import {
//     getFirestore, collection, getDocs,
//     addDoc
// } from 'firebase/firestore'

import firebase from "firebase/app"
import "firebase/firestore"


export const firebaseConfig = {
    apiKey: "AIzaSyAICXAe80q6_VhjDl5JA4PKre7jt9XRRiU",
    authDomain: "lifeblogs-cfe85.firebaseapp.com",
    projectId: "lifeblogs-cfe85",
    storageBucket: "lifeblogs-cfe85.appspot.com",
    messagingSenderId: "384239374442",
    appId: "1:384239374442:web:e2c4362d7eed4cdc20ba13"
};

firebase.initializeApp(firebaseConfig)

export const projFireStore = firebase.firestore()
