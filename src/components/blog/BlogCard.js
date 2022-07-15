function BlogCard(props) {
    return (
        <div className="col s10 offset-s1 m6 l4">
            <div className="card shadow  card-m">
                <div className="card-content">
                    <span className="card-title txt-col2">{props.blog.title}</span>
                    <p>{props.blog.detail}</p>
                </div>
                <div className="card-action center-align">
                    <a
                        className="waves-effect waves-light btn btn-1"
                        target="_blank" rel="noreferrer" 
                        href={props.blog.link}
                    >
                        <i className="material-icons right">read_more</i>Read Blog
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;