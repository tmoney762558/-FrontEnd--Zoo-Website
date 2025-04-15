import penguinOutline from "../assets/penguinOutline.png";

const Donations = () => {
  return (
    <div
      id="donations"
      className="flex flex-col justify-center items-center w-full lg:h-[60rem] h-[75rem] lg:px-10 md:px-5 px-3 bg-red-400"
    >
      <img src={penguinOutline} className="absolute w-full max-w-[35rem]"></img>
      <h2 className="text-5xl text-white font-bold oswald z-10">Donations</h2>
      <p className="w-full max-w-[50rem] mt-[1.3rem] text-center lg:text-[1.7rem] md:text-[1.45rem] text-[1.2rem] text-white oswald z-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        consequuntur perferendis reprehenderit dolore, libero animi fugiat rerum
        ab temporibus qui rem aliquid optio non inventore corporis tempore,
        explicabo, repellendus quis. All donations are cash only.
      </p>
    </div>
  );
};

export default Donations;
