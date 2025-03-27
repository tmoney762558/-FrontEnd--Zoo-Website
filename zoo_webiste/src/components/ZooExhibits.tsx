import africanExhibit from "../assets/africanExhibit.jpg";
import primateExhibit from "../assets/primateExhibit.jpeg";
import reptileExhibit from "../assets/reptileExhibit.jpeg";
import aquaticExhibit from "../assets/aquaticExhibit.jpeg";
import woodsExhibit from "../assets/woodsExhibit.jpeg";
import northernExhibit from "../assets/northernExhibit.jpeg";

const ZooExhibits = () => {
  return (
    <section className="w-full h-[60rem] bg-green-600 text-xl">
      <div className="flex justify-center items-center gap-3 w-full h-full">
        <div className="w-[15%] max-w-[20rem] aspect-[1/2] relative">
          <img
            className="w-full aspect-[1/2] mb-[6rem] object-cover bg-black"
            src={africanExhibit}
          ></img>
          <div
            className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] z-10 group"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
          >
            <p className="hidden group-hover:block text-white font-bold oswald">
              African Exhibit
            </p>
          </div>
        </div>
        <div className="w-[15%] max-w-[20rem] aspect-[1/2] relative">
          <img
            className="w-full aspect-[1/2] mb-[1rem] object-cover bg-black"
            src={primateExhibit}
          ></img>
          <div
            className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] z-10 group"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
          >
            <p className="hidden group-hover:block text-white font-bold oswald">
              Primate Exhibit
            </p>
          </div>
        </div>
        <div className="w-[15%] max-w-[20rem] aspect-[1/2] relative">
          <img
            className="w-full aspect-[1/2] mb-[8rem] object-cover bg-black"
            src={reptileExhibit}
          ></img>
          <div
            className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] z-10 group"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
          >
            <p className="hidden group-hover:block text-white font-bold oswald">
              Reptile Exhibit
            </p>
          </div>
        </div>
        <div className="w-[15%] max-w-[20rem] aspect-[1/2] relative">
        <img
            className="w-full aspect-[1/2] mb-[6rem] object-cover bg-black"
            src={aquaticExhibit}
          ></img>
          <div
            className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] z-10 group"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
          >
            <p className="hidden group-hover:block text-white font-bold oswald">
              Aquatic Exhibit
            </p>
          </div>
        </div>
        <div className="w-[15%] max-w-[20rem] aspect-[1/2] relative">
        <img
            className="w-full aspect-[1/2] mb-[2rem] object-cover bg-black"
            src={woodsExhibit}
          ></img>
          <div
            className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] z-10 group"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
          >
            <p className="hidden group-hover:block text-white font-bold oswald">
              Woods Exhibit
            </p>
          </div>
        </div>
        <div className="w-[15%] max-w-[20rem] aspect-[1/2] relative">
          <img
            className="w-full aspect-[1/2] mb-[9rem] object-cover bg-black"
            src={northernExhibit}
          ></img>
          <div
            className="flex justify-center items-center absolute inset-0 w-full aspect-[1/2] z-10 group"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
          >
            <p className="hidden group-hover:block text-white font-bold oswald">
              Northern Exhibit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZooExhibits;
