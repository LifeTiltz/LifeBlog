import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { books } from "./fireBase"
import GetData from "./GetData";


const BlogDetails = () => {
    const idParam = useParams()
    const history = useHistory();
    console.log(idParam);
    console.log(idParam.id);

    //const { data: blog, isPending, error } = useFetch(`http://localhost:4000/blogs/` + id)

    let specificKey = idParam.id
    // if (idParam !== undefined) {
    //     specificKey = idParam.id
    // }

    // else if (id !== undefined) {
    //     specificKey = id
    // }
    let rubi = GetData()
    let blogs = GetData()
    let blogsArr = blogs.blogs

    console.log(rubi);

    let findBlog = (blogs) => {
        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i].id == specificKey) {
                console.log("Ive a HugeD1K");
                return blogs[i]
            }
        }
    }

    let thisBlog = findBlog(blogsArr)


    // const handleClick = () => {
    //     fetch(`http://localhost:4000/delete/${id}`, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         //
    //         //Need to fix this
    //         //
    //         history.push('/');
    //     })
    // }

    return (
        <div className="BlogDetails">
            {//isPending && <div>Loading...</div>}
                {//error && <div>Sorry there seemed to be an error</div>}
                }}
            {thisBlog && <div className="article">
                <article>
                    <h2>{thisBlog.title}</h2>
                    <p>Written when: {thisBlog.author}</p>
                    <div>{thisBlog.body}</div>
                    {/* <button onClick={handleClick}>Delete</button> */}
                </article>
            </div>

            }
        </div>
    );
}

export default BlogDetails;
