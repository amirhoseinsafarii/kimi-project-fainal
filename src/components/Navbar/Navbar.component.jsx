import styles from "./Navbar.module.css";
import logo from "../../assets/images/photo_2023-08-19_00-48-27-removebg-preview 1.svg";
import phoneimg from "../../assets/images/phone-call-svgrepo-com 1.svg";
import instagramImg from "../../assets/images/instagram-apps-icon-free-png.svg";
import menu from "../../assets/images/menu.svg";
import env from "react-dotenv";
import { useRef, useState } from "react";
function Navbar() {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [opendropdown, setOpenDropDown] = useState(false);
    return (
        <nav className={styles.navbar}>
            {windowSize.current[0] > 1000 ? (
                <>
                    <div
                        style={{
                            height: "100px",
                            paddingTop: "10px",
                            marginRight: "0px",
                        }}
                    >
                        <img src={logo} style={{ height: "80px" }} />
                    </div>
                    <div className={styles.navItems}>
                        <div className={styles.navItem}>
                            <a href="/">صفحه اصلی</a>
                        </div>

                        <div className={styles.navItem}>
                            <a>کمپوست</a>
                            <div className={styles.drop_down}>
                                <a href="">کمپوست1</a>
                                <a href="">کمپوست2</a>
                                <a href="">کمپوست3</a>
                            </div>
                        </div>

                        <div className={styles.navItem}>
                            <a>خاک</a>
                            <div className={styles.drop_down}>
                                <a href="">خاک1</a>
                                <a href="">خاک2</a>
                                <a href="">خاک3</a>
                            </div>
                        </div>

                        <div className={styles.navItem}>
                            <a href={`${window.env.blog_url}`}>وبلاگ</a>
                        </div>

                        <div className={styles.navItem}>
                            <a href="/about-us">درباره ما</a>
                        </div>

                        <div className={styles.navItem}>
                            <a href="./../../pages/ContactUs/ContactUsPage.jsx">
                                تماس با ما
                            </a>
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
                        <div
                            style={{ display: "flex", alignContent: "center" }}
                        >
                            <img src={phoneimg} style={{ width: "35px" }} />
                        </div>
                    </div>
                </>
            ) : (
                <div className={styles.responsiveNavbar}>
                    <div
                        // className={
                        //     opendropdown
                        //         ? (styles.drop_down_menu, styles.show)
                        //         : styles.drop_down_menu
                        // }

                        className={
                            opendropdown
                                ? `${styles.drop_down_menu}
                                  ${styles.dropdownshow}`
                                : `${styles.drop_down_menu}`
                        }
                    >
                        <div className={styles.navItems}>
                            <div className={styles.navItem}>
                                <a href="/">صفحه اصلی</a>
                            </div>

                            <div className={styles.navItem}>
                                <a>کمپوست</a>
                                <div className={styles.drop_down}>
                                    <a href="">کمپوست1</a>
                                    <a href="">کمپوست2</a>
                                    <a href="">کمپوست3</a>
                                </div>
                            </div>

                            <div className={styles.navItem}>
                                <a>خاک</a>
                                <div className={styles.drop_down}>
                                    <a href="">خاک1</a>
                                    <a href="">خاک2</a>
                                    <a href="">خاک3</a>
                                </div>
                            </div>

                            <div className={styles.navItem}>
                                <a href={`${window.env.blog_url}`}>وبلاگ</a>
                            </div>

                            <div className={styles.navItem}>
                                <a href="/about-us">درباره ما</a>
                            </div>

                            <div className={styles.navItem}>
                                <a href="/contact-us">تماس با ما</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightNavbar}>
                        <div
                            style={{
                                width: "30%",
                                height: "100%",
                                overflow: "visible",
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            <img
                                className={styles.menuIcon}
                                src={menu}
                                style={{ width: "100%" }}
                                alt=""
                                onClick={() => {
                                    setOpenDropDown(!opendropdown);
                                }}
                            />
                        </div>
                        <div
                            style={{
                                width: "70%",
                                height: "100%",
                                overflow: "visible",
                            }}
                        >
                            <img
                                src={logo}
                                style={{ height: "100%", width: "100%" }}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={styles.leftNavbar}>
                        <div className={styles.leftNavbarPhone}>
                            <div
                                style={{
                                    direction: "ltr",
                                    textAlign: "left",
                                    display: "flex",
                                    flexDirection: "column-reverse",
                                    justifyContent: "space-between",
                                    alignContent: "flex-end",
                                }}
                            >
                                <p>0918 111 1111</p>

                                <p> با ما تماس بگیرید</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignContent: "center",
                                }}
                            >
                                <img
                                    src={phoneimg}
                                    className={styles.phoneIcon}
                                />
                            </div>
                        </div>
                        <div className={styles.instagramIcon}>
                            <span className={styles.line}></span>
                            <a href="">
                                <img src={instagramImg} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
