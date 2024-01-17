import "./Lorem1.component.css";
function Lorem1Component({ Lorem1Value }) {
    return (
        <div className="Lorem1-component">
            <div></div>
            <h3>{Lorem1Value.title + Lorem1Value.index}</h3>
            <p>{Lorem1Value.text}</p>
        </div>
    );
}

export default Lorem1Component;
