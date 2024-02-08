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
          overflow: "visible",
        }}
      >
        <div className={styles.navItem}>
          <a href="/">صفحه اصلی</a>
        </div>

        <div className={styles.navItem}>
          <a href="/products">کمپوست</a>
          <div className={styles.drop_down}>
            <p>به زودی</p>
            {/* <a href={`/product/p1`}>کمپوست1</a>
            <a href="">کمپوست2</a>
            <a href="">کمپوست3</a>
            */}
          </div>
        </div>

        <div className={styles.navItem}>
          <a href="/products">خاک</a>
          <div className={styles.drop_down}>
            <a href={`/product/p2`}>خاک1</a>
            <a href="">خاک2</a>
            <a href="">خاک3</a>
            <a href="">خاک4</a>
          </div>
        </div>

        <div className={styles.navItem}>
          <a href={`${process.env.blog_url}`}>وبلاگ</a>
        </div>

        <div className={styles.navItem}>
          <a href="/about-us">درباره ما</a>
        </div>

        <div className={styles.navItem}>
          <a href="/contact-us">تماس با ما</a>
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
            direction: "ltr",
          }}
        >
          <p style={{ fontSize: "15px" }}>با ما تماس بگیرید</p>
          <p style={{ fontSize: "10px" }}>0918 111 1111</p>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            paddingRight: "10px",
          }}
        >
          <img src={phoneimg} style={{ width: "30px" }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
