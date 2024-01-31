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
                <h1 className={styles.headertext}>
                    {" "}
                    404 - صفحه مورد نظر یافت نشد
                </h1>
            </div>

            <div
                style={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingInline: "7.5%",
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
                    <img src={errorimg} style={{ width: "500px" }} />
                    <div
                        style={{
                            display: "flex",
                            marginTop: "50px",
                        }}
                    >
                        <button className={styles.button}>
                            kimiagostarsoil
                        </button>
                        <button className={styles.button}>0918 111 1111</button>
                    </div>
                </div>

                <div style={{ direction: "rtl", paddingTop: "120px" }}>
                    <h1 style={{ color: "#4F9468", fontSize: "32px" }}>
                        برخی لینک‌های مفید
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            direction: "rtl",
                            paddingTop: "20px",
                        }}
                    >
                        <div className={styles.images}>
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
                        <div style={{ direction: "rtl", paddingTop: "10px" }}>
                            <div
                                style={{
                                    display: "flex",

                                    color: "#676565",
                                    fontSize: "18px",
                                }}
                            >
                                صفحه اصلی
                            </div>
                            <div
                                style={{
                                    display: "flex",

                                    color: "#676565",
                                    fontSize: "18px",
                                    marginTop: "22px",
                                }}
                            >
                                تماس با ما
                            </div>
                            <div
                                style={{
                                    display: "flex",

                                    color: "#676565",
                                    fontSize: "18px",
                                    marginTop: "26px",
                                }}
                            >
                                درباره ما
                            </div>
                            <div
                                style={{
                                    display: "flex",

                                    color: "#676565",
                                    fontSize: "18px",
                                    marginTop: "30px",
                                }}
                            >
                                کمپوست
                            </div>

                            <div
                                style={{
                                    display: "flex",

                                    color: "#676565",
                                    fontSize: "18px",
                                    marginTop: "32px",
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
