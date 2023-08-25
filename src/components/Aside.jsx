import Logo from "./Logo";
import img1 from "../assets/token-logo.png";
import img2 from "../assets/pair-logo.png";
import Socials from "./Socials";

const Aside = () => {
  return (
    <div className="h-screen w-1/5 rounded-tr-3xl bg-[#292929] flex flex-col justify-between">
      <div>
        <Logo />
        <div>
          <div className="w-full h-16  flex gap-x-10 items-center tracking-wider font-semibold text-white hover:bg-[#F30050] transition-all duration-200 cursor-pointer text-xl">
            <img src={img1} alt="" className="scale-125 mb-1 ml-10" />
            <h2>Token Address</h2>
          </div>
          <div className="w-full h-16  flex gap-x-10 items-center tracking-wider font-semibold text-white hover:bg-[#F30050] transition-all duration-200 cursor-pointer text-xl mt-2">
            <img src={img2} alt="" className="scale-125 mb-1 ml-10" />
            <h2>Pair Address</h2>
          </div>
        </div>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
};

export default Aside;
