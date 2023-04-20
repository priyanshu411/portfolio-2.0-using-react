function ProjectCard(props) {
    return (
        <div className="row prj-card">
            <div className="col s12 l7 center-align">
                <img
                    className="prj-img z-depth-3"
                    src={props.prjDetail.img}
                    alt={props.prjDetail.title + " image"}
                    draggable={false}

                />
            </div>
            <div className="col s12 l5 prj-detail">
                <p className="center-align txt-col2 tittle">
                    {props.prjDetail.title}
                </p>
                <ul className="center-align">
                    {
                        props.prjDetail.detail.map((detail, index) => {
                            return <li key={index}>{detail}</li>
                        })
                    }
                </ul>
                <div className="tech center-align">
                    {
                        props.prjDetail.tech.map((tech, index) => {
                            return <span key={index}>{tech}</span>
                        })
                    }
                </div>
                <div className="center-align">
                    <a
                        className="waves-effect waves-light btn btn-1"
                        target="_blank"
                        href={props.prjDetail.link} rel="noreferrer"
                    >
                        <i className="material-icons right">open_in_new</i>{props.prjDetail.linkTitle}
                    </a>
                    <a
                        className="waves-effect waves-light btn btn-2"
                        target="_blank"
                        href={props.prjDetail.code} rel="noreferrer"
                    >
                        <i className="fab fa-github right" />
                        code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;