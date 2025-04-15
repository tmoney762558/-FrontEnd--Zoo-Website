import AboutUs from "./AboutUs";
import Donations from "./Donations";
import ExhibitSlider from "./ExhibitSlider";
import Footer from "./Footer";
import MainPageIntro from "./MainPageIntro";

const MainPage = () => {
  return (
    <div>
      <MainPageIntro></MainPageIntro>
      <AboutUs></AboutUs>
      <ExhibitSlider></ExhibitSlider>
      <Donations></Donations>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
