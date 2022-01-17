import { useEffect, useState } from 'react';
import { projFireStore } from './fireBase';



const GetDataAgain = () => {
    let [books, setBooks] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        projFireStore.collection("books").get().then((snapshot) => {
            if (snapshot.empty) {
                setError('No recipes to load')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    // console.log(doc)
                    results.push({ ...doc.data(), id: doc.id })
                })
                setBooks(results)
                setIsPending(false)
            }
        }).catch(err => {
            setError(err.message)
            setIsPending(false)
        })

    }, [])


    return (books);
}


export default GetDataAgain;