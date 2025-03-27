import lionPawPrint from "../assets/lionPawPrint.png";

const AboutUs = () => {
  return (
    <section className="flex flex-col justify-center items-center relative w-full min-h-[60rem] lg:px-10 md:px-5 px-1 bg-green-500 z-10">
      <img className="absolute w-1/2 max-w-[30rem]" src={lionPawPrint}></img>
      <div className="flex flex-col items-center w-full z-10">
        
        <h2
          id="about"
          className="border-b-2 border-white text-center lg:text-[5rem] md:text-[4rem] text-[3rem] text-white oswald font-bold"
        >
          About Us
        </h2>
        <p className="w-full max-w-[50rem] mt-[1.3rem] text-center lg:text-[1.7rem] md:text-[1.45rem] text-[1.2rem] text-white nunito">
          <i>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            facere aliquam porro, quos at numquam velit nulla quaerat deleniti
            aspernatur, sunt esse, quia provident tenetur architecto sequi
            sapiente debitis quisquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni atque, aut quaerat laboriosam nemo
            voluptates itaque accusamus neque eum? Quibusdam quae voluptas
            explicabo incidunt debitis accusamus autem eum corporis eligendi?
          </i>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;