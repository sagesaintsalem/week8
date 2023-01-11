import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/pricing">Pricing</Link>
            </li>
            <li>
                <Link to="/surprise">Surprise!</Link>
            </li>
        </ul>
    )

}

export default NavBar;