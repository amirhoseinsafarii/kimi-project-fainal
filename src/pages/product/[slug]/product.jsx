import { useParams } from "react-router-dom";
import styles from "./product.module.css";

import timg from "../../../assets/images/Screenshot (32) 8.svg";
import pimg from "../../../assets/images/photo_2023-09-08_21-49-22 2.svg";
function Product() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headertext}>لورم ایپسوم</h1>
      </div>

      <p className={styles.p}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه
        <br />
        روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
        تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
        <br />
        ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
        آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        <br />
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی
        <br />
        ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
        راهکارها، و شرایط سخت تایپ به پایان رسد
      </p>

      <div className={styles.imgSection}>
        <img src={pimg} className={styles.pimg} />

        <img src={pimg} className={styles.pimg} />
      </div>

      <div className={styles.container}>
        <div className={styles.container2}>
          <div>
            <h2 style={{ color: "#DBDBDB" }}>لورم ایپسوم</h2>
            <h4 style={{ color: "#DBDBDB", fontSize: "16px" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </h4>
          </div>
          <button className={styles.cbutton}>
            <a href="/contact-us">تماس بگیرید</a>
          </button>
        </div>
      </div>

      <div className={styles.container3}>
        <div className={styles.title}>
          <h1>لورم ایپسوم متن ساختگی</h1>
        </div>
        <div className={styles.container4}>
          <img src={timg} />
          <div className={styles.eText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </div>
        </div>
        <div className={styles.container4}>
          <img src={timg} />
          <div className={styles.eText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </div>
        </div>
        <div className={styles.container4}>
          <img src={timg} />
          <div className={styles.eText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
