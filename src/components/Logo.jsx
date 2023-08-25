import logo1 from "../assets/logo-symbol.png";
import logo2 from "../assets/logo-text.png";

const Logo = () => {
  return (
    <div className="w-[90%] h-auto flex items-center justify-evenly py-7">
      <img src={logo1} alt="" className="scale-125 mb-4" />
      <img src={logo2} alt="" />
      <div></div>
    </div>
  );
};

export default Logo;
