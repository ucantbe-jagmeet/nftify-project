import logo1 from "../assets/logo-symbol.png";
import logo2 from "../assets/logo-text.png";

const Logo = () => {
  return (
    <div className="w-full h-auto flex items-center gap-x-5 py-7">
      <img src={logo1} alt="" className="scale-125 mb-4 ml-10" />
      <img src={logo2} alt="" />
    </div>
  );
};

export default Logo;
