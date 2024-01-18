import "./midComponent.css";
function MidComponent({ midValue }) {
    return (
        <div className="mid-component">
            <div></div>
            <h3>{midValue.title + midValue.index}</h3>
            <p>{midValue.text}</p>
        </div>
    );
}

export default MidComponent;
