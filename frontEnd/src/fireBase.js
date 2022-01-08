import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,
    addDoc
} from 'firebase/firestore'


export const firebaseConfig = {
    apiKey: "AIzaSyAICXAe80q6_VhjDl5JA4PKre7jt9XRRiU",
    authDomain: "lifeblogs-cfe85.firebaseapp.com",
    projectId: "lifeblogs-cfe85",
    storageBucket: "lifeblogs-cfe85.appspot.com",
    messagingSenderId: "384239374442",
    appId: "1:384239374442:web:e2c4362d7eed4cdc20ba13"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export const colRef = collection(db, 'books')



// getDocs(colRef)
//     .then((snapshot) => {
//         snapshot.docs.forEach((doc) => {
//             setBooks(books => ({ ...doc.data(), id: doc.id }))
//             //books.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(books);
//     })
//     .catch(err => {
//         console.log(err);
//     })

export let addBlog = (titleOf, authorOf, bodyOf) => {
    addDoc(colRef, {
        title: titleOf,
        author: authorOf,
        body: bodyOf
    })
}