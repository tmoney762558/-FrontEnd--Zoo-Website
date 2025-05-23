import { FaArrowDown } from "react-icons/fa";
import NavBar from "./NavBar";
import lionVideo from "../assets/lionVideo.mp4";
import clawMarks from "../assets/clawMarks.png";
import loadingGif from "../assets/loadingGif.gif";
import { useState } from "react";

const MainPageIntro = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section>
      <div
        className={`${
          loading ? "flex" : "hidden"
        } justify-center items-center w-screen h-screen min-h-[50rem]`}
      >
        <img className="w-[10rem] aspect-square" src={loadingGif}></img>
      </div>
      <div className={`${loading ? "hidden" : ""}`}>
        <div className="relative w-full h-fit">
          {/* Dark Overlay */}
          <NavBar></NavBar>
          <div
            className="absolute inset-0 h-full z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
          ></div>
          <video
            className="w-full min-h-[96vh] h-[50rem] object-cover bg-black"
            key={"backgroundVideo"}
            preload="auto"
            playsInline
            autoPlay
            loop
            muted
            onLoadedData={() => {
              setLoading(false);
            }}
          >
            <source
              src={lionVideo}
              onLoad={() => {
                setLoading(false);
              }}
            ></source>
            <p>
              Your browser doesn't support HTML video. Here is a link to the
              video. <a href={lionVideo}></a>
            </p>
          </video>
        </div>
        <div className="flex justify-center items-center absolute inset-0 w-full h-[50rem] text-white z-10">
          <div className="w-full md:mb-0 mb-[15rem] lg:px-10 md:px-5 px-1 lg:text-left text-center">
            <p className="xl:text-[6.5rem] lg:text-[5.5rem] md:text-[4.5rem] sm:text-[3.5rem] text-[2.5rem] font-bold oswald slide-in-blurred-top">
              ADVENTURES SHOULD BE UNFORGETTABLE.
            </p>
            <p className="xl:text-[3.5rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] text-red-400 font-bold oswald slide-in-blurred-top">
              Unleash your{" "}
              <span className="inline-flex justify-center items-center relative">
                wild
                <img
                  className="absolute w-[10rem] aspect-square z-10"
                  src={clawMarks}
                ></img>
              </span>{" "}
              side.
            </p>
            <button className="mt-[3rem] lg:py-3 md:py-2 py-1 lg:px-10 md:px-7 px-5 hover:bg-white border-2 border-white rounded-full text-white hover:text-black font-bold oswald cursor-pointer">
              <a href="#about">About Us</a>
            </button>
          </div>
        </div>
        <div className="relative w-full h-[3rem] bg-red-500 z-50">
          <div className="flex justify-center absolute top-[-1.3rem] w-full">
            <div className="flex justify-center items-center w-10 aspect-square bg-slate-700 rounded-full">
              <FaArrowDown fontSize={"1.3rem"} fill="white"></FaArrowDown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageIntro;
