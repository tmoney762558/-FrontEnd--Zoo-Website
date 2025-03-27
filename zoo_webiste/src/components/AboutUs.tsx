const AboutUs = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-[50rem] bg-red-400 z-10">
      <div className="flex flex-col items-center w-full">
        <h2
          id="about"
          className="border-b-2 border-white text-center text-[5rem] text-white oswald font-bold"
        >
          About Us
        </h2>
        <p className="w-1/2 mt-[2.3rem] text-center text-[1.7rem] text-white nunito">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum facere
          aliquam porro, quos at numquam velit nulla quaerat deleniti
          aspernatur, sunt esse, quia provident tenetur architecto sequi
          sapiente debitis quisquam.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
