import main from '../images/main.svg';
import { Link } from "react-router-dom";
import Preloader from './PreLoader'
import React, { useState, useEffect } from 'react';
function About() {
    
    const intro = {
        _name: "I'm Priyanshu Gupta,",
        heading: "A Web Developer",
        about: "Hey, glad to see you here! I am a student of MCA, very passionate about programming and technology.I learned web development and made a variety of projects and am upgrading my skills in this field.Always ready to learn new technology."
    }
    const [style, setStyle] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setStyle(false);
        }, 500);
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
                            />
                        </div>
                        <div className="col s12 m6 xl7">
                            <h4>Hi there!</h4>
                            <h4 className="txt-col1">{intro._name}</h4>
                            <h4 className="txt-col2">{intro.heading}</h4>
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
                            />
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}
export default About;