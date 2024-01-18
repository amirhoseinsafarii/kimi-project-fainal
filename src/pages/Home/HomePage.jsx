import SliderPart from "../../components/HomePageComponents/HomePageSlider/HomePageSlider";
import HomePageAccordian from "../../components/HomePageComponents/HomePageAccordian/HomePageAccordian";
import AboutCompany from "../../components/HomePageComponents/aboutCompany/AboutCompany";
import MidPart from "../../components/HomePageComponents/midPart/MidPart.component";
import Video from "../../components/HomePageComponents/Video/Video.component";
import Photos from "../../components/HomePageComponents/PhotosComponent/Photos.component";
function HomePage() {
    return (
        <>
            <AboutCompany />
            <MidPart />
            <Video />
            <Photos />
            <SliderPart />
            <HomePageAccordian />
        </>
    );
}

export default HomePage;
