function SkillsCard(props) {
    return (
        <div className="col s4 l3 center-align skill-m">
            <img className="logo" src={props.TechData.img} alt= {props.TechData.tech+" logo"} draggable={false} />
            <br />
            <span>{props.TechData.tech}</span>
        </div>
    );
}
export default SkillsCard;