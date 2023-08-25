import Aside from "../components/Aside";
import Navbar from "../components/Navbar";

const TokenPage = () => {
  return (
    <div className="flex">
      <Aside />
      <div className="bg-main-image w-full -ml-5 px-10 ">
        <Navbar />
        <h2 className="text-white">Token Address Page</h2>
      </div>
    </div>
  );
};

export default TokenPage;
