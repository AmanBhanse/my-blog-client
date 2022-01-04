import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">🏡Home</Link>
                    </li>
                    <li>
                        <Link to="/about">🤵 About me</Link>
                    </li>
                    <li>
                        <Link to="/articles">📚Articles</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
