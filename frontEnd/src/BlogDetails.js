import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { projFireStore } from './fireBase';
import DeleteButton from "./DeleteButton";


const BlogDetails = () => {
    const id = useParams()
    console.log(id.id);

    const [book, setBook] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        console.log("in useeffect");
        projFireStore.collection("books").doc(id.id).get().then((doc) => {
            if (doc.exists) {
                console.log("doc exists");
                setBook(doc.data())
            }
            else {
                setError(true)
                console.log("seems to not exist mate");
            }

        })
    }, [id])

    return (
        <div className="Blog-Detail">
            {error && <h3>Seems you've found a page that doesn't exist. Why dont you add a blog to tell people how your feeling?</h3>}
            {book && <h1>{book.title}</h1>}
            {book && <h2>{book.body}</h2>}
            {book && <p>Author: {book.author}</p>}
            <DeleteButton id={id.id} />
        </div>
    );
}

export default BlogDetails;
