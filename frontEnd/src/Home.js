import BlogList from "./BlogList";
import GetDataAgain from "./GetDataAgain";

const Home = () => {
    let books = GetDataAgain()

    return (
        <div className="home">
            {!books[1] && <div>Loading...</div>}
            {books[1] && <BlogList blogs={books} />}
        </div>
    );
}

export default Home;
