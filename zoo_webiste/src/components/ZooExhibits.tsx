import africanExhibit from "../assets/africanExhibit.jpg";
import primateExhibit from "../assets/primateExhibit.jpeg";
import reptileExhibit from "../assets/reptileExhibit.jpeg";
import aquaticExhibit from "../assets/aquaticExhibit.jpeg";
import woodsExhibit from "../assets/woodsExhibit.jpeg";
import northernExhibit from "../assets/northernExhibit.jpeg";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ZooExhibits = () => {
  const [animateElement, setAnimateElement] = useState(false);
  const exhibitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (
        !animateElement &&
        exhibitRef.current &&
        scrollPos > exhibitRef.current.offsetTop - window.innerHeight / 2
      ) {
        setAnimateElement(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex flex-col items-center w-full h-[80rem] bg-neutral-900 text-xl">
      <div
        className={`${
          animateElement ? "flex slide-in-right-scroll" : "invisible"
        } items-center gap-3 relative w-2/3 max-w-fit h-full overflow-x-auto`}
        ref={exhibitRef}
      >
        <a
          className="shrink-0 w-[20rem] aspect-[1/2] mb-[6rem] relative slide-top"
          href="#african"
        >
          <img
            className="w-full aspect-[1/2] object-cover bg-black"
            src={africanExhibit}
          ></img>

          <div className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] bg-[#00000040] z-10 group">
            <p className="hidden group-hover:block relative text-center text-white font-bold oswald">
              African Exhibit
            </p>
          </div>
          <div className="absolute bottom-5 left-5 p-1 bg-neutral-800 rounded-full">
            <FaArrowRight fontSize={"1.5rem"} fill="white"></FaArrowRight>
          </div>
        </a>
        <a
          className="shrink-0 w-[20rem] aspect-[1/2] mb-[1rem] relative slide-top"
          href="#primate"
        >
          <img
            className="w-full aspect-[1/2] object-cover bg-black"
            src={primateExhibit}
          ></img>
          <div className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] bg-[#00000040] z-10 group">
            <p className="hidden group-hover:block text-center text-white font-bold oswald">
              Primate Exhibit
            </p>
          </div>
        </a>
        <a
          className="shrink-0 w-[20rem] aspect-[1/2] mb-[8rem] relative slide-top"
          href="#reptilian"
        >
          <img
            className="w-full aspect-[1/2] object-cover bg-black"
            src={reptileExhibit}
          ></img>
          <div className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] bg-[#00000040] z-10 group">
            <p className="hidden group-hover:block text-center text-white font-bold oswald">
              Reptilian Exhibit
            </p>
          </div>
        </a>
        <a
          className="shrink-0 w-[20rem] aspect-[1/2] mb-[6rem] relative slide-top"
          href="#aquatic"
        >
          <img
            className="w-full aspect-[1/2] object-cover bg-black"
            src={aquaticExhibit}
          ></img>
          <div className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] bg-[#00000040] z-10 group">
            <p className="hidden group-hover:block text-center text-white font-bold oswald">
              Aquatic Exhibit
            </p>
          </div>
        </a>
        <a
          className="shrink-0 w-[20rem] aspect-[1/2] mb-[2rem] relative slide-top"
          href="#wilderness"
        >
          <img
            className="w-full aspect-[1/2] object-cover bg-black"
            src={woodsExhibit}
          ></img>
          <div className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] z-10 bg-[#00000040] group">
            <p className="hidden group-hover:block text-center text-white font-bold oswald">
              Wilderness Exhibit
            </p>
          </div>
        </a>
        <a
          className="shrink-0 w-[20rem] aspect-[1/2] mb-[9rem] relative slide-top"
          href="#northern"
        >
          <img
            className="w-full aspect-[1/2] object-cover bg-black"
            src={northernExhibit}
          ></img>
          <div className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] bg-[#00000040] z-10 group">
            <p className="hidden group-hover:block text-center text-white font-bold oswald">
              Northern Exhibit
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ZooExhibits;
