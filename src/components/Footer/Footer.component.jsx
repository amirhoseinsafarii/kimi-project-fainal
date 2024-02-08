import styles from "./footer.module.css";
import insticon from "../../assets/icons/instagram-svgrepo-com.svg";
import linkicon from "../../assets/icons/linkedin-161-svgrepo-com.svg";
import telicon from "../../assets/icons/telegram-svgrepo-com.svg";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <p
          style={{
            color: "#fff",
            textAlign: "right",
            padding: "20px",
          }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* <>-------------------1---------------------</> */}

          <div className={styles.footerItem}>
            <div
              style={{
                color: "#fff",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              لورم ایپسوم
            </div>
            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                لورم ایپسوم{" "}
              </div>
              <div style={{ color: "#fff", fontSize: "14px" }}>
                لورم ایپسوم متن ساختگی با تولید{" "}
              </div>
            </div>

            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                لورم ایپسوم{" "}
              </div>
              <div style={{ color: "#fff", fontSize: "14px" }}>
                لورم ایپسوم متن ساختگی با تولید{" "}
              </div>
            </div>

            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                لورم ایپسوم{" "}
              </div>
              <div style={{ color: "#fff", fontSize: "14px" }}>
                لورم ایپسوم متن ساختگی با تولید{" "}
              </div>
            </div>
          </div>

          {/* <>-------------------2---------------------</> */}

          <div className={styles.footerItem}>
            <div
              style={{
                color: "#fff",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              لورم ایپسوم
            </div>
            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                لورم ایپسوم{" "}
              </div>
              <div style={{ color: "#fff", fontSize: "14px" }}>
                لورم ایپسوم متن ساختگی با تولید{" "}
              </div>
            </div>

            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                لورم ایپسوم{" "}
              </div>
              <div style={{ color: "#fff", fontSize: "14px" }}>
                لورم ایپسوم متن ساختگی با تولید{" "}
              </div>
            </div>

            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                لورم ایپسوم{" "}
              </div>
              <div style={{ color: "#fff", fontSize: "14px" }}>
                لورم ایپسوم متن ساختگی با تولید{" "}
              </div>
            </div>
          </div>
          {/* <>-------------------3---------------------</> */}
          <div className={styles.footerItem}>
            <div
              style={{
                color: "#fff",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              لورم ایپسوم
            </div>
            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                لورم ایپسوم{" "}
              </div>
              <div style={{ color: "#fff", fontSize: "14px" }}>
                لورم ایپسوم متن ساختگی با تولید{" "}
              </div>
            </div>

            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                لورم ایپسوم{" "}
              </div>
              <div style={{ color: "#fff", fontSize: "14px" }}>
                لورم ایپسوم متن ساختگی با تولید{" "}
              </div>
            </div>

            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                لورم ایپسوم{" "}
              </div>
              <div style={{ color: "#fff", fontSize: "14px" }}>
                لورم ایپسوم متن ساختگی با تولید{" "}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",

            marginTop: "20px",
            borderTop: "3px solid #4F9468",
            direction: "ltr",
          }}
        >
          <div className={styles.social_medias_links}>
            <a href="#" style={{ all: "unset" }}>
              <img
                src={telicon}
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
              />
            </a>
            <a href="#" style={{ all: "unset" }}>
              <img
                src={insticon}
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
              />
            </a>

            <a href="#" style={{ all: "unset" }}>
              <img
                src={linkicon}
                style={{
                  width: "30px",
                  height: "30px",
                  marginTop: "7px",
                  marginLeft: "8px",
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
