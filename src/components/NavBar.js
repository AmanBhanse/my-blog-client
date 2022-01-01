import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/article">Article</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
