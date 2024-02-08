import "./photos.css";
import { useState, useRef } from "react";
import image1 from "./../../../assets/images/404.svg";
import image2 from "./../../../assets/images/Untitled-1-1.png";
import left from "./../../../assets/images/iconmonstr-arrow-left-circle-lined.svg";
import right from "./../../../assets/images/iconmonstr-arrow-right-circle-lined.svg";

const photosValue = [
    {
        index: 1,
        src: image1,
        alt: "image",
    },
    {
        index: 2,
        src: image2,
        alt: "image",
    },
    {
        index: 3,
        src: "./",
        alt: "image",
    },
];

console.log(photosValue);
function Photos() {
    let [activeLorem, setActiveLorem] = useState(0);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    return (
        <div className="photos">
            <h2>لورم ایپسوم متن ساختگی </h2>
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون
            </p>

            {windowSize.current[0] > 1100 ? (
                <div className="photos-components">
                    {photosValue.map((v, i) => {
                        return (
                            <div className="photos-component">
                                <img src={v.src} alt={v.alt + v.index} />
                            </div>
                        );
                    })}
                </div>
            ) : windowSize.current[0] > 650 && windowSize.current[0] < 1100 ? (
                <div className="photos-components two">
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
                        <img src={left} alt="" />
                    </span>
                    {photosValue.map((v, i) => {
                        return (
                            <div
                                className={`${
                                    activeLorem == i || activeLorem == i - 1
                                        ? "photos-component"
                                        : "photos-component disable"
                                }`}
                            >
                                <img src={v.src} alt={v.alt + v.index} />
                            </div>
                        );
                    })}
                    <div
                        className="next"
                        onClick={() => {
                            console.log(activeLorem, photosValue.length);
                            if (activeLorem < photosValue.length - 2) {
                                setActiveLorem((activeLorem += 2));
                            }
                        }}
                    >
                        <img src={right} alt="" />
                    </div>
                </div>
            ) : (
                <div className="photos-components">
                    <span
                        className="pre"
                        onClick={() => {
                            if (activeLorem > 0) {
                                setActiveLorem((activeLorem -= 1));
                            }
                        }}
                    >
                        <img src={left} alt="" />
                    </span>
                    {photosValue.map((v, i) => {
                        return (
                            <div
                                className={`${
                                    activeLorem == i
                                        ? "photos-component"
                                        : "photos-component disable"
                                }`}
                            >
                                <img src={v.src} alt={v.alt + v.index} />
                            </div>
                        );
                    })}
                    <span
                        className="next"
                        onClick={() => {
                            if (activeLorem < photosValue.length - 1) {
                                setActiveLorem((activeLorem += 1));
                            }
                        }}
                    >
                        <img src={right} alt="" />
                    </span>
                </div>
            )}
        </div>
    );
}

export default Photos;
