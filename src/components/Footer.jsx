import React from "react";
function Footer() {
    return (
        <React.Fragment>
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m0 128 40 16c40 16 120 48 200 37.3 80-10.3 160-64.3 240-69.3s160 37 240 32 160-59 240-48 160 85 240 85.3c80-0.3 160-74.3 200-112l40-37.3v288h-40-200-240-240-240-240-200-40z"
                    fill="#ff6b54"
                />
            </svg>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5 className="white-text">Social</h5>
                            <div className="footer-link">
                                <a href="https://www.linkedin.com/in/priyanshu-g/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin fa-2x" />
                                </a>
                                <a href="https://github.com/priyanshu411" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github fa-2x" />
                                </a>
                                <a
                                    href="https://www.instagram.com/__priyanshu_gupta?r=nametag"
                                    target="_blank" rel="noreferrer"
                                >
                                    <i className="fab fa-instagram fa-2x" />
                                </a>
                                <a
                                    href="https://youtube.com/channel/UCeUtVhl3haP9LGR8w7fLOkw"
                                    target="_blank" rel="noreferrer"
                                > 
                                    <i className="fab fa-youtube fa-2x" />
                                </a>
                                <a href="mailto:priyanshug1999@gmail.com" target="_blank" rel="noreferrer">
                                    <i className="far fa-envelope fa-2x" />
                                </a>
                            </div>
                            <p>Made with ❤ by Priyanshu Gupta</p>
                            <a
                                hidden
                                className="white-text"
                                href="https://www.vecteezy.com/free-vector/web-developer"
                                target="_blank" rel="noreferrer"
                            >
                                Web Developer Vectors by Vecteezy
                            </a>
                            <br />
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}
export default Footer;
