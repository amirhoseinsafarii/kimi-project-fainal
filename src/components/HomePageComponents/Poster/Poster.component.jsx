import "./Poster.css";
import posterPhoto from "../../../assets/Images/photo_2023-08-31_19-44-35_1.png";

function Poster() {
    return (
        <div className="poster">
            <img src={posterPhoto} alt="poster" />
            <div className="poster-rectangle"></div>
            <div className="poster-text">
                <h2>لورم ایپسوم متن ساختگی</h2>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز
                </p>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 26 24"
                        fill="none"
                    >
                        <path
                            d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z"
                            fill="#FFF"
                        />
                    </svg>
                    تماس بگیرید
                </button>
            </div>
        </div>
    );
}

export default Poster;
