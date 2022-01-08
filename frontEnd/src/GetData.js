import { getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { colRef } from './fireBase';


const GetData = () => {
    let [books, setBooks] = useState([])
    let allBooks = []
    useEffect(() => {
        getDocs(colRef)
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    allBooks.push({ ...doc.data(), id: doc.id })
                })
                console.log(allBooks);

            })
            .then(() => {
                setBooks(allBooks)
            })
            .catch(err => {
                console.log(err);
            })
    }, [books.id])

    return (books);
}

export default GetData;