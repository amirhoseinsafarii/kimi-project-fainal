import "./HomePageLorem3.css";
import { useState, useRef } from "react";

const Lorem3Value = [
    {
        index: 1,
        src: "./",
        alt: "image",
    },
    {
        index: 2,
        src: "./",
        alt: "image",
    },
    {
        index: 3,
        src: "./",
        alt: "image",
    },
    {
        index: 4,
        src: "./",
        alt: "image",
    },
];

function Lorem3() {
    let [activeLorem, setActiveLorem] = useState(0);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    console.log(windowSize);
    return (
        <div className="Lorem3">
            <h2>لورم ایپسوم متن ساختگی </h2>
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون
            </p>

            {windowSize.current[0] > 1100 ? (
                <div className="Lorem3-components">
                    {Lorem3Value.map((v, i) => {
                        return (
                            <div className="Lorem3-component">
                                <img src={v.src} alt={v.alt + v.index} />
                            </div>
                        );
                    })}
                </div>
            ) : windowSize.current[0] > 650 && windowSize.current[0] < 1100 ? (
                <div className="Lorem3-components">
                    {activeLorem % 2 != 0
                        ? setActiveLorem(activeLorem--)
                        : null}
                    <span
                        className="pre"
                        onClick={() => {
                            if (activeLorem > 0) {
                                setActiveLorem((activeLorem -= 2));
                            }
                        }}
                    >
                        {"<"}
                    </span>
                    {Lorem3Value.map((v, i) => {
                        return (
                            <div
                                className={`${
                                    activeLorem == i || activeLorem == i - 1
                                        ? "Lorem3-component"
                                        : "Lorem3-component disable"
                                }`}
                            >
                                <img src={v.src} alt={v.alt + v.index} />
                            </div>
                        );
                    })}
                    <span
                        className="next"
                        onClick={() => {
                            console.log(activeLorem, Lorem3Value.length);
                            if (activeLorem < Lorem3Value.length - 2) {
                                setActiveLorem((activeLorem += 2));
                            }
                        }}
                    >
                        {">"}
                    </span>
                </div>
            ) : (
                <div className="Lorem3-components">
                    <span
                        className="pre"
                        onClick={() => {
                            if (activeLorem > 0) {
                                setActiveLorem((activeLorem -= 1));
                            }
                        }}
                    >
                        {"<"}
                    </span>
                    {Lorem3Value.map((v, i) => {
                        return (
                            <div
                                className={`${
                                    activeLorem == i
                                        ? "Lorem3-component"
                                        : "Lorem3-component disable"
                                }`}
                            >
                                <img src={v.src} alt={v.alt + v.index} />
                            </div>
                        );
                    })}
                    <span
                        className="next"
                        onClick={() => {
                            if (activeLorem < Lorem3Value.length - 1) {
                                setActiveLorem((activeLorem += 1));
                            }
                        }}
                    >
                        {">"}
                    </span>
                </div>
            )}
        </div>
    );
}

export default Lorem3;
