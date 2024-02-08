import styles from "./products.module.css";
import pimg from "../../assets/images/product-image.svg";
import st from "../../assets/images/Screenshot (36) 2.png";
import { useState } from "react";
function Products() {
  const [product1, setproduct1] = useState("pr1");
  const [product2, setproduct2] = useState("pr2");
  const [product3, setproduct3] = useState("pr3");
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headertext}>لورم ایپسوم</h1>
      </div>

      <p className={styles.pp}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون
        <br />
        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
        تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
        <br />
        بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
        و آینده، شناخت فراوان جامعه و
        <br />
        متخصصان را می طلبد
      </p>

      {/* <>---------------1-----------------</> */}

      <div className={styles.productSecrion}>
        <a href={`/product/${product1}`}>
          <img
            src={pimg}
            className={styles.pimg}
            style={{ marginRight: "20%" }}
          />
        </a>
        <div className={styles.producttext}>
          <p className={styles.ptext1}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            <br />
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            <br />
            ستون و سطرآنچنان که لازم است،{" "}
          </p>

          <p className={styles.ptext2}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            <br />
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            <br />
            ستون و سطرآنچنان که لازم است،
          </p>

          <div style={{ display: "flex", width: "800px", marginTop: "50px" }}>
            <div>
              <img src={st} />
            </div>
            <div
              style={{
                color: "#3F3F3F",
              }}
            >
              <div
                style={{
                  color: "#3F3F3F",
                  fontSize: "16px",
                  margin: "0px",
                  padding: "0px",
                  paddingTop: "20px",
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
              </div>
              <div
                style={{
                  color: "#3F3F3F",
                  fontSize: "16px",
                  margin: "0px",
                  padding: "0px",
                  paddingTop: "35px",
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </div>
            </div>
          </div>

          <button className={styles.cbutton}>با ما تماس بگیرید</button>
        </div>
      </div>

      {/* <>---------------2-----------------</> */}

      <div className={styles.productSecrion}>
        <a href={`/product/${product1}`}>
          <img
            src={pimg}
            className={styles.pimg}
            style={{ marginRight: "20%" }}
          />
        </a>
        <div className={styles.producttext}>
          <p className={styles.ptext1}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            <br />
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            <br />
            ستون و سطرآنچنان که لازم است،{" "}
          </p>

          <p className={styles.ptext2}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            <br />
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            <br />
            ستون و سطرآنچنان که لازم است،
          </p>

          <div style={{ display: "flex", width: "800px", marginTop: "50px" }}>
            <div>
              <img src={st} />
            </div>
            <div
              style={{
                color: "#3F3F3F",
              }}
            >
              <div
                style={{
                  color: "#3F3F3F",
                  fontSize: "16px",
                  margin: "0px",
                  padding: "0px",
                  paddingTop: "20px",
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
              </div>
              <div
                style={{
                  color: "#3F3F3F",
                  fontSize: "16px",
                  margin: "0px",
                  padding: "0px",
                  paddingTop: "35px",
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </div>
            </div>
          </div>

          <button className={styles.cbutton}>با ما تماس بگیرید</button>
        </div>
      </div>

      {/* <>---------------3-----------------</> */}

      <div className={styles.productSecrion}>
        <a href={`/product/${product1}`}>
          <img
            src={pimg}
            className={styles.pimg}
            style={{ marginRight: "20%" }}
          />
        </a>
        <div className={styles.producttext}>
          <p className={styles.ptext1}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            <br />
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            <br />
            ستون و سطرآنچنان که لازم است،{" "}
          </p>

          <p className={styles.ptext2}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            <br />
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            <br /> ستون و سطرآنچنان که لازم است،
          </p>

          <div style={{ display: "flex", width: "800px", marginTop: "50px" }}>
            <div>
              <img src={st} />
            </div>
            <div
              style={{
                color: "#3F3F3F",
              }}
            >
              <div
                style={{
                  color: "#3F3F3F",
                  fontSize: "16px",
                  margin: "0px",
                  padding: "0px",
                  paddingTop: "20px",
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
              </div>
              <div
                style={{
                  color: "#3F3F3F",
                  fontSize: "16px",
                  margin: "0px",
                  padding: "0px",
                  paddingTop: "35px",
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </div>
            </div>
          </div>

          <button className={styles.cbutton}>با ما تماس بگیرید</button>
        </div>
      </div>
    </>
  );
}

export default Products;
