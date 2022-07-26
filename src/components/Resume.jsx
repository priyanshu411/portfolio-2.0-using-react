import resumeImg from '../images/resume-img.svg'
import Preloader from './PreLoader'
import React,{ useState, useEffect } from 'react';
function Resume() {

    const [style, setStyle] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setStyle(false);
        }, 500);
    }, []);

    return (
        <React.Fragment>
        <Preloader myStyle={style}/>
            <section id="resume">
                <div className="container">
                    <h4 className="center-align txt-col1 heading">Resume</h4>
                    <div className="row">
                        <div className="col s6 m4 offset-m2 offset-s3">
                            <img
                                className="responsive-img"
                                src={resumeImg}
                                alt="resume poster"
                                loading="lazy"
                            />
                        </div>
                        <div className="col s12 m6 center-align m-btn">
                            <a
                                href="https://drive.google.com/file/d/1RHw5GJSDR5APROrVl_6oA-as6udhNHWv/view?usp=sharing"
                                target="_blank" rel="noreferrer"
                                className="waves-effect waves-light btn btn-1"
                            >
                                <i className="material-icons right">open_in_new</i>View
                            </a>
                            <a
                                href="https://drive.google.com/u/0/uc?id=1RHw5GJSDR5APROrVl_6oA-as6udhNHWv&export=download"
                                download="" rel="noreferrer"
                                className="waves-effect waves-light btn btn-2"
                            >
                                <i className="material-icons right">download</i>Download
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default Resume;