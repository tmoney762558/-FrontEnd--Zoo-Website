import AboutUs from "./AboutUs";
import AfricanExhibit from "./AfricanExhibit";
import MainPageIntro from "./MainPageIntro";
import ZooExhibits from "./ZooExhibits";

const MainPage = () => {
  return (
    <div>
      <MainPageIntro></MainPageIntro>
      <AboutUs></AboutUs>
      <ZooExhibits></ZooExhibits>
      <AfricanExhibit></AfricanExhibit>
    </div>
  );
};

export default MainPage;
