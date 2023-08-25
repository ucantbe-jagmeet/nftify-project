import Logo from "./Logo";
import img1 from "../assets/token-logo.png";
import img2 from "../assets/pair-logo.png";
import Socials from "./Socials";
import { NavLink } from "react-router-dom";

const navLinkCss = `w-full h-16  flex gap-x-5 items-center tracking-wider font-semibold text-white hover:bg-[#F30050] transition-all duration-200 cursor-pointer text-xl`;

const Aside = () => {
  return (
    <div className="hidden h-screen lg:w-[25%] sm:w-[50%] w-[70%] rounded-tr-3xl bg-[#292929] sm:flex flex-col justify-between z-20">
      <div>
        <Logo />
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${navLinkCss} bg-[#F30050]` : `${navLinkCss}`
            }
          >
            <img src={img1} alt="" className="scale-125 mb-1 ml-10" />
            <h2>Token Address</h2>
          </NavLink>

          <NavLink
            to="/pairPage"
            className={({ isActive }) =>
              isActive
                ? `${navLinkCss} bg-[#F30050] mt-2`
                : `${navLinkCss} mt-2`
            }
          >
            <img src={img2} alt="" className="scale-125 mb-1 ml-10" />
            <h2>Pair Address</h2>
          </NavLink>
        </div>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  );
};

export default Aside;
