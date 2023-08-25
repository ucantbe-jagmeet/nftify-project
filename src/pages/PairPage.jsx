import Aside from "../components/Aside";
import Navbar from "../components/Navbar";

const PairPage = () => {
  return (
    <div className="flex">
      <Aside />
      <div className="bg-main-image w-full -ml-5">
        <Navbar />
        <h2 className="text-white">PariPage</h2>
      </div>
    </div>
  );
};

export default PairPage;
