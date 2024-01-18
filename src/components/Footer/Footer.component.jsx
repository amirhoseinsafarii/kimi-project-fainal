import styles from "./footer.module.css";

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
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
                <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
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
                        width: "80%",
                        height: "3px",
                        backgroundColor: "#4F9468",
                        marginInline: "auto",
                        marginTop: "20px",
                    }}
                ></div>
            </div>
        </>
    );
}

export default Footer;
