import "./Slider.css";
import { useState } from "react";
function Slider({ sliderPart, active, handleSetActiveSlider, maxSliderIndex }) {
    const [touchArea, setTouchArea] = useState(0);
    return (
        <>
            <div
                className={`${active ? "text show" : "text"}`}
                onTouchStart={(e) => {
                    setTouchArea(e.touches[0].clientX);
                }}
                onTouchMove={(e) => {
                    if (Math.abs(e.touches[0].clientX - touchArea) > 50) {
                        if (
                            e.touches[0].clientX - touchArea > 0 &&
                            sliderPart.index < maxSliderIndex
                        ) {
                            handleSetActiveSlider(sliderPart.index + 1);
                        }

                        if (
                            e.touches[0].clientX - touchArea < 0 &&
                            sliderPart.index > 0
                        ) {
                            handleSetActiveSlider(sliderPart.index - 1);
                        }
                    }
                }}
            >
                {sliderPart.text}
                <span className="slider-info">{sliderPart.info}</span>
            </div>
        </>
    );
}

export default Slider;
