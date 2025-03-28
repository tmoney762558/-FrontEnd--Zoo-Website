import lionOutline from "../assets/lionOutline.png";

const AfricanExhibit = () => {
  return (
    <section className="flex lg:flex-row flex-col justify-center items-center relative w-full min-h-[60rem] lg:px-10 md:px-5 px-1 bg-yellow-500 z-10">
      <img className="w-1/2 max-w-[50rem]" src={lionOutline}></img>
      <div className="flex flex-col items-center">
        <h2
          id="african"
          className="w-full lg:text-right text-center lg:text-[5rem] md:text-[4rem] text-[3rem] text-white oswald font-bold"
        >
          African Exhibit
        </h2>
        <p className="w-full max-w-[50rem] lg:text-right text-center lg:text-[1.7rem] md:text-[1.45rem] text-[1.2rem] text-white oswald">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          provident omnis quod soluta maxime, perspiciatis voluptate tempora
          consectetur quas, aliquid earum ad nobis odio quam, perferendis
          aliquam exercitationem beatae ducimus. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Illo, nostrum sunt placeat fugiat
          officia aliquam qui nulla veritatis dolor eligendi culpa iusto magni
          deserunt amet dolorum sit iure tenetur ab!
        </p>
      </div>
    </section>
  );
};

export default AfricanExhibit;
