import "./midComponent.css";
function MidComponent({ midValue }) {
    return (
        <div className="mid-component">
            <div>
                <img src={midValue.src} alt="image" />
            </div>
            <h3>{midValue.title + midValue.index}</h3>
            <p>{midValue.text}</p>
        </div>
    );
}

export default MidComponent;
