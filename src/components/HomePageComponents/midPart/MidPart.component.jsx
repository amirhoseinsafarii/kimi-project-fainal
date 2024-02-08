import "./midPart.css";
import MidComponent from "./midComponent/Mid.component";
import image1 from "./../../../assets/images/404.svg";
const midVar = [
    {
        index: 1,
        src: image1,
        title: "لورم ایپسوم متن 1",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت1",
    },
    {
        index: 2,
        src: "",
        title: "لورم ایپسوم متن 2",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت2",
    },
    {
        index: 3,
        src: "",
        title: "لورم ایپسوم متن 3",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت3",
    },
];

function MidPart() {
    return (
        <div className="mid-components">
            {midVar.map((v) => {
                return <MidComponent key={v.index} midValue={v} />;
            })}
        </div>
    );
}

export default MidPart;
