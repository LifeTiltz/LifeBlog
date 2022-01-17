import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Life's Favorite Books</h1>
            <div className="links">
                <Link to="/LifeBlog">Home</Link>
                <Link to="/LifeBlog/create">Add new Book</Link>
            </div>
        </nav>
    );
}

export default Navbar;