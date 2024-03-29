import { useState } from "react";
import "./Accordian.component.css";

function Accordian({ accordianValue }) {
    let [openAccordian, setOpenAccordian] = useState(false);
    return (
        <div className="accordian">
            <div
                onClick={() => {
                    setOpenAccordian(!openAccordian);
                }}
                className="accordian-header"
            >
                <span>{openAccordian ? "-" : "+"}</span>
                <p>{`${accordianValue.index}-${accordianValue.header}`}</p>
            </div>
            <div
                className={
                    openAccordian ? "accordian-main show" : "accordian-main"
                }
            >
                <p>{accordianValue.maintext}</p>
            </div>
        </div>
    );
}

export default Accordian;
