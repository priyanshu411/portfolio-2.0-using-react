import { Link } from "react-router-dom";
function Sidenav() {
    return (
        <div id="slide-out" className="sidenav nav-item">
            <button id="close" className="sidenav-close">
                <i className="material-icons small">close</i>
            </button>
            <ul>
                <li>
                    <Link to="/" className="sidenav-close"><i className="material-icons left">home</i>Home</Link>
                </li>
                <li>
                    <Link to="/projects" className="sidenav-close"><i className="material-icons left">code</i>PROJECTS</Link>
                </li>
                <li>
                    <Link to="/skills" className="sidenav-close"><i className="material-icons left">integration_instructions</i>SKILLS</Link>
                </li>
                <li>
                    <Link to="/blog" className="sidenav-close"><i className="fas fa-blog left" />BLOG</Link>
                </li>
                <li>
                    <Link to="/contact" className="sidenav-close"><i className="material-icons left">email</i>CONTACT US</Link>
                </li>
                <li>
                    <hr />
                </li>
            </ul>
            <div className="social-link">
                <a href="https://www.linkedin.com/in/priyanshu-g/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin left" />
                </a>
                <a href="https://github.com/priyanshu411" target="_blank" rel="noreferrer">
                    <i className="fab fa-github left" />
                </a>
                <a
                    href="https://www.instagram.com/__priyanshu_gupta?r=nametag"
                    target="_blank" rel="noreferrer"
                >
                    <i className="fab fa-instagram left" />
                </a>
                <a
                    href="https://youtube.com/channel/UCeUtVhl3haP9LGR8w7fLOkw"
                    target="_blank" rel="noreferrer"
                >
                    <i className="fab fa-youtube left" />
                </a>
            </div>
        </div>
    );
}
export default Sidenav