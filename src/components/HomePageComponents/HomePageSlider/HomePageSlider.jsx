import "./HomePageSlider.css";
import Slider from "./Slider/Slider.component";
import { useState } from "react";

const slider = [
    {
        index: 0,
        text: `ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
    با استفاده از طراحان گرافیک است، چاپگرها و متون1`,
        info: "لورم ایپسوم",
    },
    {
        index: 1,
        text: `ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
    با استفاده از طراحان گرافیک است، چاپگرها و متون2`,
        info: "لورم ایپسوم",
    },
    {
        index: 2,
        text: `ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
    با استفاده از طراحان گرافیک است، چاپگرها و متون3`,
        info: "لورم ایپسوم",
    },
];

function SliderPart() {
    let [activeSlider, setActiveSlider] = useState(2);
    console.log(activeSlider);
    return (
        <div className="sliderPart">
            <div className="slider-text">
                <h2>لورم ایپسوم متن ساختگی</h2>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون
                </p>
            </div>

            <div className="slider">
                {slider.map((v) => (
                    <Slider
                        key={v.index}
                        sliderPart={v}
                        active={activeSlider === v.index ? true : false}
                    />
                ))}

                <div className="indicators">
                    {slider.map((_, i) => {
                        return (
                            <div
                                className={`${
                                    i === activeSlider
                                        ? "indicator active"
                                        : "indicator"
                                }`}
                                onClick={() => {
                                    setActiveSlider(i);
                                }}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SliderPart;
