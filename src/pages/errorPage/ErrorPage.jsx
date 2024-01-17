import styles from "./errorpage.module.css";
import { useNavigate } from "react-router-dom";
import errorimg from "../../assets/images/404.svg";
import tikimg from "../../assets/images/Screenshot (32) 2.svg";
const ErrorPage = () => {
  const navigate = useNavigate();
  const redirectHandler = () => {
    navigate("/events");
  };

  window.history.pushState(null, null, document.URL);
  window.addEventListener("popstate", function () {
    window.location.replace(`/events`);
  });
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headertext}> 404 - صفحه مورد نظر یافت نشد</h1>
      </div>

      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <img src={errorimg} style={{ width: "711px" }} />
          <div
            style={{
              display: "flex",
              marginTop: "40px",
            }}
          >
            <button className={styles.button}>kimiagostarsoil</button>
            <button className={styles.button}>0918 111 1111</button>
          </div>
        </div>

        <div style={{ direction: "rtl", paddingTop: "120px" }}>
          <h1 style={{ color: "#4F9468", fontSize: "32px" }}>
            برخی لینک‌های مفید
          </h1>
          <div style={{ display: "flex", direction: "rtl" }}>
            <div>
              <div>
                <img src={tikimg} />
              </div>
              <div>
                <img src={tikimg} />
              </div>
              <div>
                <img src={tikimg} />
              </div>
              <div>
                <img src={tikimg} />
              </div>
              <div>
                <img src={tikimg} />
              </div>
            </div>
            <div style={{ direction: "rtl", paddingTop: "20px" }}>
              <div
                style={{
                  display: "flex",

                  color: "#676565",
                  fontSize: "20px",
                }}
              >
                صفحه اصلی
              </div>
              <div
                style={{
                  display: "flex",

                  color: "#676565",
                  fontSize: "24px",
                  marginTop: "38px",
                }}
              >
                تماس با ما
              </div>
              <div
                style={{
                  display: "flex",

                  color: "#676565",
                  fontSize: "24px",
                  marginTop: "40px",
                }}
              >
                درباره ما
              </div>
              <div
                style={{
                  display: "flex",

                  color: "#676565",
                  fontSize: "24px",
                  marginTop: "40px",
                }}
              >
                کمپوست
              </div>

              <div
                style={{
                  display: "flex",

                  color: "#676565",
                  fontSize: "24px",
                  marginTop: "38px",
                }}
              >
                خاک
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
