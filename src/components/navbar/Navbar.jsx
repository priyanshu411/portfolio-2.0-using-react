import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Sidenav from "./Sidenav";
function Navbar() {


    useEffect(() => {
        const M = window.M;
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, { inDuration: 350, outDuration: 350 });

    }, [])


    return (
        <React.Fragment>
            <div className="navbar-fixed" id="home">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" data-target="slide-out" className="sidenav-trigger">
                            <i className="material-icons">notes</i>
                        </a>
                        <Link to="/" className="brand-logo">Priyanshu</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to="/"><i className="material-icons left">home</i>Home</Link>
                            </li>
                            <li>
                                <Link to="/projects"><i className="material-icons left">code</i>PROJECTS</Link>
                            </li>
                            <li>
                                <Link to="/skills"><i className="material-icons left">integration_instructions</i>SKILLS</Link>
                            </li>
                            <li>
                                <Link to="/blog"><i className="fas fa-blog left" />BLOG</Link>
                            </li>
                            <li>
                                <Link to="/contact"><i className="material-icons left">email</i>CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Sidenav></Sidenav>
        </React.Fragment>

    );
}

export default Navbar;