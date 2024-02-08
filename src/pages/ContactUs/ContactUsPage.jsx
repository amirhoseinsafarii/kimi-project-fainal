import "./ContactUsPage.css";
import image from "../../assets/images/photo_2023-09-07_20-01-07.png";

function ContactUsPage() {
  return (
    <div className="contact-us-page">
      <div className="header-photo">
        <img src={image} alt="" />
        <span>تماس با ما</span>
      </div>
      <div className="contact-us-main">
        <div className="contact-us-main-text">
          <h2>لورم ایپسوم متن ساختگی </h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون
          </p>
        </div>

        <div className="contact-us-items">
          <h3>لورم ایپسوم متن ساختگی </h3>
          <div className="contact-us-items-container">
            <p className="contact-us-item">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <p className="contact-us-item">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <p className="contact-us-item">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <p className="contact-us-item">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <p className="contact-us-item">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <p className="contact-us-item">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
