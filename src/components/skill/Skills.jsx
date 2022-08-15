import PreLoader from "../PreLoader";
import SkillsCard from "./SkillsCard";
import skill from "../../portfolioData/skillData";
import React, { useState, useEffect } from "react";

function Skills() {
    const [style, setStyle] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setStyle(false);
        }, 500);
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <PreLoader myStyle={style} />

            <section id="skill" >
                <h4 className="center-align txt-col1 heading">Technologies</h4>
                <div className="row">
                    {
                        skill.map((data, i) => {
                            return (<SkillsCard TechData={data} value={i} key={i}></SkillsCard>);
                        })
                    }
                </div>
            </section >
        </React.Fragment >
    );
}

export default Skills;