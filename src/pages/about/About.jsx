import styles from "./about.module.css";
import img from "../../assets/images/photo_2023-08-19_01-12-57 1.svg";
import img1 from "../../assets/images/Screenshot (23) 1.svg";
function About() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headertext}>درباره ما</h1>
      </div>

      <div
        style={{
          height: "257px",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            direction: "rtl",
            width: "100%",
            justifyContent: "space-around",
            marginTop: "40px",
          }}
        >
          <div>
            <div style={{ marginLeft: "500px" }}>
              <h2 style={{ color: "#555" }}>لورم ایپسوم متن ساختگی </h2>
            </div>
            <div style={{ color: "#555", width: "1000px", fontSize: "30px" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط
            </div>
          </div>

          <button className={styles.cbutton}> تماس بگیرید</button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#F1F1F1",
          width: "100%",
          height: "651px",
          display: "flex",
          direction: "rtl",
          justifyContent: "space-around",
        }}
      >
        <img src={img} style={{ width: "40%" }} />
        <p style={{ fontSize: "32px", textAlign: "center", width: "40%" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
      </div>

      <div>
        <h2 style={{ color: "#3F3F3F", fontSize: "48px", paddingRight: "35%" }}>
          لورم ایپسوم متن ساختگی{" "}
        </h2>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",

              flexDirection: "column",
            }}
          >
            <div style={{ color: "#555", fontSize: "30px" }}>لورم ایپسوم</div>
            <div
              style={{
                color: "#555",
                fontSize: "26px",
                width: "300px",
                textAlign: "center",
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
            </div>
          </div>

          <div
            style={{
              display: "flex",

              flexDirection: "column",
            }}
          >
            <div style={{ color: "#555", fontSize: "30px" }}>لورم ایپسوم</div>
            <div
              style={{
                color: "#555",
                fontSize: "26px",
                width: "300px",
                textAlign: "center",
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
            </div>
          </div>

          <div
            style={{
              display: "flex",

              flexDirection: "column",
            }}
          >
            <div style={{ color: "#555", fontSize: "30px" }}>لورم ایپسوم</div>
            <div
              style={{
                color: "#555",
                fontSize: "26px",
                width: "300px",
                textAlign: "center",
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", marginTop: "100px" }}>
        <img src={img1} style={{ width: "100%" }} />
      </div>

      <h2 style={{ color: "#3F3F3F", fontSize: "48px", paddingRight: "35%" }}>
        لورم ایپسوم متن ساختگی{" "}
      </h2>
      <p style={{ fontSize: "28px", marginTop: "0px" }}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون{" "}
      </p>
    </>
  );
}

export default About;
