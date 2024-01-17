import "./HomePageLorem2.css";
import image from "../../../assets/Images/Screenshot(101).png";
function Lorem2() {
    return (
        <div className="Lorem2">
            <h2>لورم ایپسوم متن ساختگی </h2>
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون
            </p>

            <img src={image} alt="image" />
        </div>
    );
}

export default Lorem2;
