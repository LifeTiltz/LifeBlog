import { Link } from "react-router-dom";


const BlogList = (blogs) => {

    let blogsObj = blogs.blogs

    return (
        <div className="blog-list">

            {blogsObj.map((blogsObj) => (
                <div className="blog-preview" key={blogsObj.id}>
                    <Link to={`/LifeBlog/blogs/${blogsObj.id}`} blogs={blogsObj}>
                        <h1>Title: {blogsObj.title}</h1>
                        <h3>{blogsObj.body}</h3>
                        <p>Author: {blogsObj.author}</p>
                    </Link>
                </div>

            ))}
        </div>);
}

export default BlogList;