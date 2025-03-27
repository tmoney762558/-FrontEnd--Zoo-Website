import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import NavBar from "./NavBar";
import lionVideo from "../assets/lionVideo.mp4";
import giraffeVideo from "../assets/giraffeVideo.mp4";
import bearVideo from "../assets/bearVideo.mp4";
import clawMarks from "../assets/clawMarks.png";

const MainPageIntro = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <section>
      <div className="relative w-full h-fit">
        {/* Dark Overlay */}
        <NavBar></NavBar>
        <div
          className="absolute inset-0 h-full z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.50)" }}
        ></div>
        {currentVideo === 0 ? (
          <video
            className="w-full h-[50rem] object-cover"
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
            className="w-full h-[50rem] object-cover"
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
            className="w-full h-[50rem] object-cover"
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
      <div className="flex justify-center items-center absolute inset-0 w-full h-[50rem] text-white z-10">
        <div className="w-full md:mb-0 mb-[15rem] lg:px-10 md:px-5 px-1 lg:text-left text-center">
          <p className="xl:text-[6.5rem] lg:text-[5.5rem] md:text-[4.5rem] sm:text-[3.5rem] text-[2.5rem] font-bold oswald slide-in-blurred-top">
            ADVENTURES SHOULD BE UNFORGETTABLE.
          </p>
          <p className="xl:text-[3.5rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] text-red-400 font-bold oswald slide-in-blurred-top">
            Unleash your{" "}
            <span className="inline-flex justify-center items-center relative">
              <p>wild</p>
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
      <div className="relative w-full h-[3rem] bg-green-500 z-10">
        <div className="flex justify-center absolute top-[-1.3rem] w-full ">
          <div className="flex justify-center items-center w-10 aspect-square bg-slate-700 rounded-full">
            <a href="#about">
              <FaArrowDown fontSize={"1.3rem"} fill="white"></FaArrowDown>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageIntro;
