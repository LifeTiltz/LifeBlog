import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch(`http://localhost:4000/blogs/` + id)
    const history = useHistory();

    const handleClick = () => {
        fetch(`http://localhost:4000/delete/${id}`, {
            method: 'DELETE'
        }).then(() => {
            //
            //Need to fix this
            //
            history.push('/');
        })
    }

    return (
        <div className="BlogDetails">
            {isPending && <div>Loading...</div>}
            {error && <div>Sorry there seemed to be an error</div>}
            {blog && <div className="article">
                <article>
                    <h2>{blog[0].title}</h2>
                    <p>Written when: {blog[0].author}</p>
                    <div>{blog[0].body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            </div>

            }
        </div>
    );
}

export default BlogDetails;
