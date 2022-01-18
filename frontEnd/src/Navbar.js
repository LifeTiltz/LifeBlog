import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Our Favorite Books</h1>
            <div className="links">
                <Link to="/LifeBlog">Home</Link>
                <Link to="/LifeBlog/create">Add new Book</Link>
                <Link to="/LifeBlog/poem">Random Poem</Link>
                <Link to="/LifeBlog/game">Memory game</Link>
            </div>
        </nav>
    );
}

export default Navbar;