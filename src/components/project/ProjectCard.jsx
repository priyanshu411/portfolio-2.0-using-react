function ProjectCard(props) {
    return (
        <div className="col s12 l6 xl4">
            <div className="card sticky-action card-m shadow">
                <div className="card-image waves-effect waves-block waves-light img-container">
                    <img
                        className="activator img"
                        src={props.prjDetail.img}
                        alt={props.prjDetail.title+" image"}
                        
                    />
                </div>
                <div className="card-content content-h">
                    <span className="card-title activator grey-text text-darken-4">
                        {props.prjDetail.title}<i className="material-icons right">more_vert</i>
                    </span>
                </div>
                <div className="card-action center-align">
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
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        {props.prjDetail.title}<i className="material-icons right">close</i>
                    </span>
                    <div className="tech">
                        {
                            props.prjDetail.tech.map((tech, index) => {
                                return <span key={index}>{tech}</span>
                            })
                        }
                    </div>
                    <ul className="collection">
                    {
                            props.prjDetail.detail.map((detail, index) => {
                                return <li className="collection-item" key={index}>{detail}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;