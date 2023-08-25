/* eslint-disable react/prop-types */
import { useState } from "react";

const Navbar = ({ onSearchQueryChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    onSearchQueryChange(newQuery);
  };
  return (
    <div className="text-white flex items-center justify-between py-7 gap-x-10">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        className="rounded-xl px-4 py-2 sm:w-96 bg-transparent border-white border-2"
        placeholder="Search"
      />
      <button className="rounded-xl px-5 py-2 tracking-wide bg-gradient-to-r from-[#7C0F35] to-[#581266] text-lg">
        Connect
      </button>
    </div>
  );
};

export default Navbar;
