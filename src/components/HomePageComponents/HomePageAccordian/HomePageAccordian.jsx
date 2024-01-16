import Accordian from "./AccordianComponent/Accordian.component";
import "./HomePageAccordian.css";

const accordian = [
    {
        header: "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
        maintext:
            "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",

        index: 1,
    },
    {
        header: "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
        maintext:
            "1- لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
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

function HomePageAccordian() {
    return (
        <div className="accordians-component">
            <h2>لورم ایپسوم متن ساختگی </h2>
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون
            </p>

            <div className="accordians-component-main">
                <div className="accordians-component-sidebar">
                    <div className="accordians-sidebar">
                        <h3>لورم ایپسوم </h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                        <div>kimiagostarsoil</div>
                    </div>
                    <div className="accordians-sidebar">
                        <h3>لورم ایپسوم </h3>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                        <div>تماس بگیرید</div>
                    </div>
                </div>
                <div className="accordians">
                    {accordian.map((v, i) => {
                        return <Accordian key={i} accordianValue={v} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default HomePageAccordian;
