import { useEffect, useState } from 'react';
import { projFireStore } from './fireBase';



const GetDataAgain = () => {
    let [books, setBooks] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const unsubscribe = projFireStore.collection("books").onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('No recipes to load')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ ...doc.data(), id: doc.id })
                })
                setBooks(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => unsubscribe()

    }, [])


    return (books);
}


export default GetDataAgain;