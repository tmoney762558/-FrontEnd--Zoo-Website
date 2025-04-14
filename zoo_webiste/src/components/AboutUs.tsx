import { useEffect, useRef, useState } from "react";
import lionPawPrint from "../assets/lionPawPrint.png";

const AboutUs = () => {

  const [animateElement, setAnimateElement] = useState(false);
  const aboutUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (
        !animateElement &&
        aboutUsRef.current &&
        scrollPos > aboutUsRef.current.offsetTop + window.innerHeight * 0.5
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
    <section id="about" className="flex flex-col justify-center items-center relative w-full min-h-[60rem] lg:px-10 md:px-5 px-3 bg-red-400 z-10">
      <img className="absolute w-1/2 max-w-[30rem]" src={lionPawPrint}></img>
      <div
        
        className={`${
          animateElement ? "flex slide-in-blurred-top-scroll" : "hidden"
        } flex-col items-center w-full z-10 `}
        ref={aboutUsRef}
      >
        <h2 className="border-b-2 border-white text-center lg:text-[5rem] md:text-[4rem] text-[3rem] text-white oswald font-bold">
          About Us
        </h2>
        <p className="w-full max-w-[50rem] mt-[1.3rem] text-center lg:text-[1.7rem] md:text-[1.45rem] text-[1.2rem] text-white oswald">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum facere
          aliquam porro, quos at numquam velit nulla quaerat deleniti
          aspernatur, sunt esse, quia provident tenetur architecto sequi
          sapiente debitis quisquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magni atque, aut quaerat laboriosam nemo voluptates
          itaque accusamus neque eum? Quibusdam quae voluptas explicabo incidunt
          debitis accusamus autem eum corporis eligendi?
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
