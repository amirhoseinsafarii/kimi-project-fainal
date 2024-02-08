import styles from "./about.module.css";
import img from "../../assets/images/photo_2023-08-19_01-12-57 1.svg";
import img1 from "../../assets/images/Screenshot (23) 1.svg";
import Accordian from "../../components/HomePageComponents/HomePageAccordian/AccordianComponent/Accordian.component";
function About() {
  const accordian = [
    {
      header: "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      maintext: "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",

      index: 1,
    },
    {
      header: "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      maintext: "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      index: 2,
    },
    {
      header: "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      maintext: "asdiuhuckaxkjhbkasgbhjxvgasghvhdasvdhvajsdjggasdjgd3",
      index: 3,
    },
    {
      header: "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      maintext: "asdiuhuckaxkjhbkasgbhjxvgasghvhdasvdhvajsdjggasdjgd4",
      index: 4,
    },
    {
      header: "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
      maintext: "asdiuhuckaxkjhbkasgbhjxvgasghvhdasvdhvajsdjggasdjgd5",
      index: 5,
    },
  ];
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headertext}>درباره ما</h1>
      </div>

      <div className={styles.container1}>
        <div className={styles.container2}>
          <div style={{ paddingLeft: "3%" }}>
            <h2 className={styles.h2tag3}>لورم ایپسوم متن ساختگی </h2>

            <div className={styles.t1}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط
            </div>
          </div>

          <button className={styles.cbutton}> تماس بگیرید</button>
        </div>
      </div>

      <div className={styles.container3}>
        <img src={img} className={styles.img1} />
        <p className={styles.t2}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          <br /> کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
          جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
          طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
          ایجاد کرد.
        </p>
      </div>

      {/* <>------------------------------*****************-----------------</> */}

      <div style={{ marginTop: "100px" }}>
        <h2 className={styles.h2tag}>لورم ایپسوم متن ساختگی </h2>
        <div className={styles.container4}>
          <div className={styles.container5}>
            <div className={styles.l1}>لورم ایپسوم</div>
            <div className={styles.lt1}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
            </div>
          </div>

          <div className={styles.container5}>
            <div className={styles.l1}>لورم ایپسوم</div>
            <div className={styles.lt1}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
            </div>
          </div>

          <div className={styles.container5}>
            <div className={styles.l1}>لورم ایپسوم</div>
            <div className={styles.lt1}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
            </div>
          </div>
        </div>
      </div>

      {/* <>------------------------------*****************-----------------</> */}
      {/* 
      <div style={{ width: "100%", marginTop: "100px" }}>
        <img src={img1} style={{ width: "100%" }} />
      </div> */}

      {/* <>------------------------------*****************-----------------</> */}

      <h2 className={styles.h2tag2}>لورم ایپسوم متن ساختگی </h2>
      <p
        style={{
          fontSize: "16px",

          textAlign: "center",
          background: "#F7F7F7",
        }}
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون{" "}
      </p>

      <div className={styles.endc}>
        <div>
          <div className={styles.imagesSection}>
            <h1 className={styles.imagetxt}> لورم ایپسوم </h1>
          </div>
          <div className={styles.sectext}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون{" "}
          </div>
        </div>

        <div>
          {" "}
          <div className={styles.imagesSection}>
            <h1 className={styles.imagetxt}> لورم ایپسوم </h1>
          </div>
          <div className={styles.sectext}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون{" "}
          </div>
        </div>

        <div>
          <div className={styles.imagesSection}>
            <h1 className={styles.imagetxt}> لورم ایپسوم </h1>
          </div>
          <div className={styles.sectext}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون{" "}
          </div>
        </div>
      </div>

      {/* <>------------------------------*****************-----------------</> */}

      <div
        style={{
          width: "70%",
          textAlign: "center",
          marginInline: "auto",
          marginTop: "50px",
        }}
      >
        {accordian.map((v, i) => {
          return <Accordian key={i} accordianValue={v} />;
        })}
      </div>
    </>
  );
}

export default About;
