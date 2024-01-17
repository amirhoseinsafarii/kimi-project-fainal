import companyImg from "../../../assets/Images/Untitled-1-1.png";
import phoneIcon from "../../../assets/Images/phone-call-svgrepo-com.svg";
import "./AboutCompany.css";
function AboutCompany() {
    return (
        <div className="about-company">
            <div className="company-image">
                <img src={companyImg} alt="company" />
            </div>
            <div className="about-company-text">
                <div className="texts">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز
                    </p>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز
                    </p>
                </div>

                <div className="company-telephone-info">
                    <div className="phone-info">
                        <img src={phoneIcon} alt="" />
                        <div className="phone-info-text">
                            <p>با ما تماس بگیرید</p>
                            <p>0918 111 1111</p>
                        </div>
                    </div>

                    <button className="call">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="24"
                            viewBox="0 0 26 24"
                            fill="none"
                        >
                            <path
                                d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z"
                                fill="#fff"
                            />
                        </svg>

                        <p>تماس با ما</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;
