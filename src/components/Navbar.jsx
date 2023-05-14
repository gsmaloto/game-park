import React, { useState } from "react";
import { BsSearch, BsList, BsFillGrid3X2GapFill } from "react-icons/bs";
import useGamesStore from "../store/gamesStore";

const Navbar = () => {
  const handleSearchGames = useGamesStore((state) => state.handleSearchGames);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex justify-between py-4 fixed w-screen items-center z-10 bg-myBlack h-[80px] px-4 lg:px-12">
      <p className="text-3xl font-bold cursor-pointer hover:opacity-75">
        <span className="">Game</span>
        <span className="bg-blue-500 ml-1 px-2 rounded">Park</span>
      </p>
      <div className="flex items-center gap-8">
        <div className="flex text-2xl items-center gap-2">
          <BsFillGrid3X2GapFill className="" />
          <BsList />
        </div>
        <form className="flex items-center py-1 px-4 bg-mylightGray">
          <input
            type="text"
            placeholder="Search game . . ."
            className="text-xl bg-transparent outline-none hidden md:block"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleSearchGames(e.target.value);
            }}
          />

          <BsSearch />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
