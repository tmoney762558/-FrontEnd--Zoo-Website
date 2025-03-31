import polarBearImage from "../assets/polarBearImage.jpg"

const NorthernExhibit = () => {
  return (
    <section className="">
    <div className="w-full h-3 bg-black"></div>
    <div id="northern" className="flex lg:flex-row flex-col-reverse justify-center items-center gap-[5rem] relative w-full lg:h-[60rem] h-[75rem] lg:px-10 md:px-5 px-1 bg-blue-200 z-10">
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
      <img className="lg:w-1/2 w-full aspect-square max-w-[50rem] object-cover rounded-full" src={polarBearImage}></img>
    </div>
  </section>
  )
}

export default NorthernExhibit