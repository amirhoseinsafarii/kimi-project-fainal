import { useParams } from "react-router-dom";
import styles from "./product.module.css";

import timg from "../../../assets/images/Screenshot (32) 8.svg";
import pimg from "../../../assets/images/photo_2023-09-08_21-49-22 2.svg";
function Product() {
  const { slug } = useParams();

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headertext}>لورم ایپسوم</h1>
      </div>

      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد
      </p>

      <div className={styles.imgSection}>
        <img src={pimg} style={{ width: "40%" }} />

        <img src={pimg} style={{ width: "40%" }} />
      </div>

      <div
        style={{
          height: "257px",
          width: "100%",
          backgroundColor: "#4F9468",
          marginTop: "200px",
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
            <h2>لورم ایپسوم</h2>
            <h4>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</h4>
          </div>

          <button className={styles.cbutton}> تماس بگیرید</button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "150px",
        }}
      >
        <div style={{ paddingLeft: "800px" }}>
          <h1>لورم ایپسوم متن ساختگی</h1>
        </div>
        <div
          style={{
            display: "flex",
            direction: "rtl",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <img src={timg} />
          <div style={{ fontSize: "32px", color: "#555", paddingTop: "20px" }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </div>
        </div>
        <div style={{ display: "flex", direction: "rtl", margin: "auto" }}>
          <img src={timg} />
          <div style={{ fontSize: "32px", color: "#555", paddingTop: "20px" }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </div>
        </div>
        <div style={{ display: "flex", direction: "rtl", margin: "auto" }}>
          <img src={timg} />
          <div style={{ fontSize: "32px", color: "#555", paddingTop: "20px" }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
