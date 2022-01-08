import BlogList from "./BlogList";
import GetData from "./GetData";

const Home = () => {
    let books = GetData()
    console.log(books);

    return (
        <div className="home">
            {!books[1] && <div>Loading...</div>}
            {books[1] && <BlogList blogs={books} />}
        </div>
    );
}

export default Home;
