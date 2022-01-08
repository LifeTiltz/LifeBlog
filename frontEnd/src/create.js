import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { addBlog } from "./fireBase";
import GetData from "./GetData";


const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        addBlog(title, author, body)
        // GetData()
        // after we get back the data
        // lets move to that blogDetail
        history.push('/');
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