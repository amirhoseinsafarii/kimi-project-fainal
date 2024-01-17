import SliderPart from "../../components/HomePageComponents/HomePageSlider/HomePageSlider";
import HomePageAccordian from "../../components/HomePageComponents/HomePageAccordian/HomePageAccordian";
import Poster from "../../components/HomePageComponents/Poster/Poster.component";
import CompanyInfo from "../../components/HomePageComponents/companyInfo/companyInfo.component";
import AboutCompany from "../../components/HomePageComponents/aboutCompany/AboutCompany";
import Lorem1 from "../../components/HomePageComponents/lorem1/HomePageLorem1.component";
import Lorem2 from "../../components/HomePageComponents/Lorem2/HomePageLorem2.component";
import Lorem3 from "../../components/HomePageComponents/Lorem3/HomePageLorem3.component";
function HomePage() {
    return (
        <>
            <Poster />
            <CompanyInfo />
            <AboutCompany />
            <Lorem1 />
            <Lorem2 />
            <Lorem3 />
            <SliderPart />
            <HomePageAccordian />
        </>
    );
}

export default HomePage;
