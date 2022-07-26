import ProjectCard from './ProjectCard';
import projectDetail from '../../portfolioData/projectData';
import Preloader from '../PreLoader'
import React, { useState, useEffect } from 'react';

function Projects() {

    const [style, setStyle] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setStyle(false);
        }, 500);
    }, []);

    return (
        <React.Fragment>

            <Preloader myStyle={style} />

            <section id="project">
                <div>
                    <h4 className="center-align txt-col1 heading">My Projects</h4>
                    <div className="row">
                        {
                            projectDetail.map((data, i) => {
                                return <ProjectCard prjDetail={data} key={i}></ProjectCard>
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>

    );
}

export default Projects;