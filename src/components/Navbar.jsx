const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between py-7">
      <input
        type="text"
        className="rounded-xl px-4 py-2 w-96 bg-transparent border-white border-2"
        placeholder="Search"
      />
      <button className="rounded-xl px-5 py-2 tracking-wide bg-gradient-to-r from-[#7C0F35] to-[#581266] text-lg">
        Connect
      </button>
    </div>
  );
};

export default Navbar;
