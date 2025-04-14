import { BiCopyright, BiPhone } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex items-center relative w-full lg:h-[25rem] h-[45rem] px-5 border-y-[0.2rem] border-white text-white oswald">
      <div className="flex lg:flex-row flex-col justify-center lg:items-start lg:gap-[10rem] gap-[3rem] w-full">
        <div className="flex flex-col items-center">
          <p className="border-b-2 border-white font-bold">Connect With Us</p>
          <a className="flex items-center gap-1">
            <p>Instagram</p>
            <IoLogoInstagram></IoLogoInstagram>
          </a>
          <a className="flex items-center gap-1">
            <p>Facebook</p>
            <IoLogoFacebook></IoLogoFacebook>
          </a>
          <a className="flex items-center gap-1">
            <p>X</p>
            <FaSquareXTwitter></FaSquareXTwitter>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <p className="border-b-2 border-white font-bold">Contact Us</p>
          <p>1234 Zoo Island</p>
          <p>Animal City, Arizona</p>
          <div className="flex items-center gap-1">
            <p>123-456-7890</p>
            <BiPhone></BiPhone>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="border-b-2 border-white font-bold">Donate to Our Cause</p>
          <p>How We Use Your Donations</p>
          <p>#SaveThePenguins</p>
          <p>Help out the Environment</p>
        </div>
      </div>
      <div className="flex items-center gap-1 absolute bottom-5 left-5">
        <BiCopyright></BiCopyright>
        <p>Worldwide Zoo Inc.</p>
      </div>
    
    </div>
  );
};

export default Footer;
