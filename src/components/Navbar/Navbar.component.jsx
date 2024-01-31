import styles from "./Navbar.module.css";
import logo from "../../assets/images/photo_2023-08-19_00-48-27-removebg-preview 1.svg";
import phoneimg from "../../assets/images/phone-call-svgrepo-com 1.svg";
import env from "react-dotenv";
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div style={{ height: "100px", paddingTop: "10px" }}>
                <img src={logo} style={{ height: "80px" }} />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "550px",
                    height: "100%",
                    alignItems: "center",
                    marginRight: "20%",
                }}
            >
                <div className={styles.navItem}>
                    <a href="/">صفحه اصلی</a>
                </div>

                <div className={styles.navItem}>
                    <a>کمپوست</a>
                </div>

                <div className={styles.navItem}>
                    <a>خاک</a>
                </div>

                <div className={styles.navItem}>
                    <a href={`${window.env.blog_url}`}>وبلاگ</a>
                </div>

                <div className={styles.navItem}>
                    <a href="/about-us">درباره ما</a>
                </div>

                <div className={styles.navItem}>
                    <a>تماس با ما</a>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "30px",
                    position: "absolute",
                    top: 0,
                }}
            >
                <div
                    style={{
                        width: "130px",
                        direction: "ltr",
                        textAlign: "left",
                        paddingLeft: "10px",
                    }}
                >
                    0918 111 1111
                    <br />
                    با ما تماس بگیرید
                </div>
                <div style={{ display: "flex", alignContent: "center" }}>
                    <img src={phoneimg} style={{ width: "35px" }} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
