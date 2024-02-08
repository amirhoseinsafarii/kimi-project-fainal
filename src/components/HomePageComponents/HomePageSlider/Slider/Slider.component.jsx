import "./Slider.css";
function Slider({ sliderPart, active }) {
    return (
        <>
            <div className={`${active ? "text show" : "text"}`}>
                {sliderPart.text}
                <span className="slider-info">{sliderPart.info}</span>
            </div>
        </>
    );
}

export default Slider;
