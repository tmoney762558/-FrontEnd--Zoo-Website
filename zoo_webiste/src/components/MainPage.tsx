import AboutUs from "./AboutUs";
import AfricanExhibit from "./AfricanExhibit";
import AquaticExhibit from "./AquaticExhibit";
import Footer from "./Footer";
import MainPageIntro from "./MainPageIntro";
import NorthernExhibit from "./NorthernExhibit";
import PrimateExhibit from "./PrimateExhibit";
import ReptilianExhibit from "./ReptilianExhibit";
import WildernessExhibit from "./WildernessExhibit";
import ZooExhibits from "./ZooExhibits";

const MainPage = () => {
  return (
    <div>
      <MainPageIntro></MainPageIntro>
      <AboutUs></AboutUs>
      <ZooExhibits></ZooExhibits>
      <AfricanExhibit></AfricanExhibit>
      <PrimateExhibit></PrimateExhibit>
      <ReptilianExhibit></ReptilianExhibit>
      <AquaticExhibit></AquaticExhibit>
      <WildernessExhibit></WildernessExhibit>
      <NorthernExhibit></NorthernExhibit>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
