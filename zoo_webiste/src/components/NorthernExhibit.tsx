import { IoClose } from "react-icons/io5";
import polarBearImage from "../assets/polarBearImage.jpg";

const NorthernExhibit = ({
  setCurrentSlide,
}: {
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <section className="puff-in-bottom">
      <div className="flex justify-end items-center w-full p-5 bg-blue-200">
        <button
          className="flex justify-center items-center w-10 aspect-square rounded-full bg-white cursor-pointer"
          onClick={() => {
            setCurrentSlide(-1);
          }}
        >
          <IoClose></IoClose>
        </button>
      </div>
      <div
        id="northern"
        className="flex lg:flex-row flex-col-reverse justify-center items-center gap-[5rem] relative w-full lg:h-[60rem] h-[75rem] lg:px-10 md:px-5 px-3 bg-blue-200 z-10"
      >
        <div className="flex flex-col items-center">
          <h2 className="w-full lg:text-left text-center lg:text-[5rem] md:text-[4rem] text-[3rem] text-black oswald font-bold">
            Northern Exhibit
          </h2>
          <p className="w-full max-w-[50rem] lg:text-left text-center lg:text-[1.7rem] md:text-[1.45rem] text-[1.2rem] text-white oswald">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            provident omnis quod soluta maxime, perspiciatis voluptate tempora
            consectetur quas, aliquid earum ad nobis odio quam, perferendis
            aliquam exercitationem beatae ducimus. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Illo, nostrum sunt placeat fugiat
            officia aliquam qui nulla veritatis dolor eligendi culpa iusto magni
            deserunt amet dolorum sit iure tenetur ab!
          </p>
        </div>
        <img
          className="lg:w-1/2 w-[90%] aspect-square max-w-[50rem] object-cover rounded-full"
          src={polarBearImage}
        ></img>
      </div>
    </section>
  );
};

export default NorthernExhibit;
