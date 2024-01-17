import "./HomePageLorem1.css";
import Lorem1Component from "./Lorem1Component/Lorem1.component";
const LoremVar = [
    {
        index: 1,
        title: "لورم ایپسوم متن 1",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت1",
    },
    {
        index: 2,
        title: "لورم ایپسوم متن 2",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت2",
    },
    {
        index: 3,
        title: "لورم ایپسوم متن 3",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت3",
    },
];

function Lorem1() {
    return (
        <div className="Lorem1-components">
            {LoremVar.map((v) => {
                return <Lorem1Component key={v.index} Lorem1Value={v} />;
            })}
        </div>
    );
}

export default Lorem1;
