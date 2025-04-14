import { useState } from "react";
import AfricanExhibit from "./AfricanExhibit";
import AquaticExhibit from "./AquaticExhibit";
import NorthernExhibit from "./NorthernExhibit";
import PrimateExhibit from "./PrimateExhibit";
import ReptilianExhibit from "./ReptilianExhibit";
import WildernessExhibit from "./WildernessExhibit";
import ZooExhibits from "./ZooExhibits";

const ExhibitSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(-1);
  return (
    <div className="w-full">
      <ZooExhibits currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}></ZooExhibits>
      {currentSlide === 0 ? (
        <AfricanExhibit setCurrentSlide={setCurrentSlide}></AfricanExhibit>
      ) : currentSlide === 1 ? (
        <PrimateExhibit setCurrentSlide={setCurrentSlide}></PrimateExhibit>
      ) : currentSlide === 2 ? (
        <ReptilianExhibit setCurrentSlide={setCurrentSlide}></ReptilianExhibit>
      ) : currentSlide === 3 ? (
        <AquaticExhibit setCurrentSlide={setCurrentSlide}></AquaticExhibit>
      ) : currentSlide === 4 ? (
        <WildernessExhibit setCurrentSlide={setCurrentSlide}></WildernessExhibit>
      ) : currentSlide === 5 ? (
        <NorthernExhibit setCurrentSlide={setCurrentSlide}></NorthernExhibit>
      ) : null}
    </div>
  );
};

export default ExhibitSlider;
