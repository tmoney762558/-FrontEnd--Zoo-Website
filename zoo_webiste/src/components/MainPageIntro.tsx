import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import NavBar from "./NavBar";
import lionVideo from "../assets/lionVideo.mp4";
import giraffeVideo from "../assets/giraffeVideo.mp4";
import bearVideo from "../assets/bearVideo.mp4";

const MainPageIntro = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <div>
      <div className="w-full relative h-[90vh]">
        {/* Dark Overlay */}
        <NavBar></NavBar>
        <div
          className="absolute inset-0 h-full z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
        ></div>
        {currentVideo === 0 ? (
          <video
            className="w-full h-full object-cover"
            key={currentVideo}
            autoPlay
            muted
            onEnded={() => {
              setCurrentVideo(1);
            }}
          >
            <source src={lionVideo}></source>
            <p>
              Your browser doesn't support HTML video. Here is a link to the
              video. <a href={lionVideo}></a>
            </p>
          </video>
        ) : currentVideo === 1 ? (
          <video
            className="w-full h-full object-cover"
            key={currentVideo}
            autoPlay
            muted
            onEnded={() => {
              setCurrentVideo(2);
            }}
          >
            <source src={giraffeVideo}></source>
            <p>
              Your browser doesn't support HTML video. Here is a link to the
              video. <a href={giraffeVideo}></a>
            </p>
          </video>
        ) : (
          <video
            className="w-full h-full object-cover"
            key={currentVideo}
            autoPlay
            muted
            onEnded={() => {
              setCurrentVideo(0);
            }}
          >
            <source src={bearVideo}></source>
            <p>
              Your browser doesn't support HTML video. Here is a link to the
              video. <a href={bearVideo}></a>
            </p>
          </video>
        )}
      </div>
      <div className="flex justify-center items-center absolute inset-0 w-full h-full text-white z-10">
        <div className="w-full md:mb-0 mb-[15rem] lg:px-10 md:px-5 px-1 md:text-left text-center">
          <p className="xl:text-[8rem] lg:text-[7.5rem] md:text-[6rem] sm:text-[5rem] text-[2.8rem] font-bold oswald">
            ADVENTURES SHOULD BE UNFORGETTABLE.
          </p>
          <p className="xl:text-[4.5rem] lg:text-[4rem] md:text-[3rem] sm:text-[2.5rem] text-[1.7rem] text-green-200 font-bold oswald">
            <i>Unleash your wild side.</i>
          </p>
          <button className="mt-[3rem] lg:py-3 md:py-2 py-1 lg:px-10 md:px-7 px-5 hover:bg-white border-2 border-white rounded-full text-white hover:text-black font-bold cursor-pointer">
            <a href="#about">About Us</a>
          </button>
        </div>
      </div>
      <div className="relative w-full h-[10vh] bg-red-400 z-10">
        <div className="flex justify-center absolute top-[-1.3rem] w-full ">
          <div className="flex justify-center items-center w-10 aspect-square bg-slate-700 rounded-full">
            <a href="#about">
              <FaArrowDown fontSize={"1.3rem"} fill="white"></FaArrowDown>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageIntro;
