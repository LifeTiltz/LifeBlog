import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Life's Favorite Books</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add new Book</Link>
            </div>
        </nav>
    );
}

export default Navbar;