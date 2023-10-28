import main from '../images/main.svg';
import { Link } from "react-router-dom";
import Preloader from './PreLoader'
import Projects from './project/Projects';
import React, { useState, useEffect } from 'react';
function About() {
    
    const intro = {
        _name: "I'm Priyanshu Gupta,",
        about: "Experienced software engineer with Java, Spring Boot, RESTful APIs, Agile, and database skills. Also proficient in frontend technologies like HTML, CSS, JavaScript, and React.js. Let's connect to discuss collaboration"
    }
    const [style, setStyle] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setStyle(false);
        }, 500);
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Preloader myStyle={style} />
            <main className="main container">
                <div className="row">
                    <div>
                        <div className="col s10 offset-s1 hide-on-med-and-up show-on-small animation">
                            <img
                                src={main}
                                className="responsive-img"
                                alt="boy with laptop"
                                draggable={false}
                            />
                        </div>
                        <div className="col s12 m6 xl7">
                            <h4 className="txt-col2">Hi there!</h4>
                            <h4 className="txt-col1">{intro._name}</h4>
                            <p id="about">{intro.about}</p>
                            <div>
                                <Link to="/resume" className="waves-effect waves-light btn btn-1"><i className="material-icons left">description</i>Resume</Link>
                                <Link to="/projects" className="waves-effect waves-light btn btn-2"><i className="material-icons left">code</i>Projects</Link>
                            </div>
                        </div>
                        <div className="col m6 xl5 hide-on-small-only animation">
                            <img
                                src={main}
                                className="responsive-img"
                                alt="boy with laptop"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Projects></Projects>
        </React.Fragment>
    );
}
export default About;