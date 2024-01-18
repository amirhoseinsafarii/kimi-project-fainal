import "./Video.css";
import image from "../../../assets/images/Screenshot(101).png";
function Video() {
    return (
        <div className="video">
            <h2>لورم ایپسوم متن ساختگی </h2>
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون
            </p>

            <video className="video-div" controls width="100%">
                <source
                    src="/../../../assets/images/capture video windows 10 - Google Search - Google Chrome 2024-01-18 04-58-07.mp4"
                    type="video/mp4"
                />
                Sorry, your browser doesn't support videos.
            </video>
        </div>
    );
}

export default Video;
