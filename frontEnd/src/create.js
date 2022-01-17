import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { projFireStore } from './fireBase';



const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const doc = { title, body, author }

        try {
            await projFireStore.collection("books").add(doc)
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} />

                <label >Blog Author</label>

                <textarea
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {<button>Add Blog</button>}

            </form>
        </div>
    );
}

export default Create;