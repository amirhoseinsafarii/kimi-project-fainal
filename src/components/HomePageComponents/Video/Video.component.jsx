import "./Video.css";
import video from "../../../assets/images/capture video windows 10 - Google Search - Google Chrome 2024-01-18 04-58-07.mp4";
function Video() {
    return (
        <div className="video">
            <h2>لورم ایپسوم متن ساختگی </h2>
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون
            </p>

            <div className="div_video">
                <video src={video} controls />
            </div>
        </div>
    );
}

export default Video;
