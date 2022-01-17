const SpecificBlog = (props) => {
    console.log(props);

    //setTimeout(console.log, 1000)


    let meow = props.blog.blog
    let specificKey = props.specificKey

    let findBlog = (blogs) => {
        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i].id == specificKey) {
                return blogs[i]
            }
        }
    }

    let thisBlog = findBlog(meow)

    return (<div className="specificBlog">
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
    </div>);
}

export default SpecificBlog;