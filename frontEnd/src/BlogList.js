import { Link } from "react-router-dom";


const BlogList = ({ blogs, title, }) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blogs) => (
                <div className="blog-preview" key={blogs.id}>
                    <Link to={`/blogs/${blogs.id}`}>
                        <h1>Title: {blogs.title}</h1>
                        <h3>{blogs.body}</h3>
                        <p>Author: {blogs.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList;