import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';

function Navigation() {
    return (
        <div className="navigation">
            <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md px-5 py-0 fixed-top">
                <a href="#" className="navbar-brand">FOLKLORE</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-md-flex justify-content-between pb-3  pb-md-0" id="navLinks">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">HOME</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="dropdown04" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <span className="fa fa-user"></span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                                <a className="dropdown-item" href="/profile">My profile</a>
                                <a className="dropdown-item" href="#" id="btnLogOut">Log out</a>
                                <a className="dropdown-item" href="/library">Library</a>
                                <a className="dropdown-item" href="/postCreator">Create post</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;