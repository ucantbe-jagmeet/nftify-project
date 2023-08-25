import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const data = [
  {
    id: 0,
    logo: <BiLogoFacebook />,
  },
  {
    id: 1,
    logo: <FaLinkedinIn />,
  },
  {
    id: 2,
    logo: <AiOutlineTwitter />,
  },
];

const Socials = () => {
  return (
    <div className="h-20 flex items-center first-letter mx-5">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className=" bg-[#F30050] p-0.5 text-xl rounded ml-5"
          >
            {item.logo}
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
