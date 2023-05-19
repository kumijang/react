import { Link } from "react-router-dom";
import "./Nav.css"
export default function Nav(){
    return(
        <nav>
            <Link to="/" className="logo">
                <h3>Blog Application</h3>
            </Link>
            <Link to="/">Home</Link>
            <Link to="/blogs">blogs</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}