import React, { useState } from "react";
import { tags } from "../data";
import useGamesStore from "../store/gamesStore";
const Tags = () => {
  const fetchGames = useGamesStore((state) => state.fetchGames);

  //   function filteredByTags(tag) {}
  return (
    <div className="h-[50px] w-screen z-10 bg-myBlack fixed top-[80px] pb-4">
      <div className="h-[50px] w-20 absolute right-0 z-30 bg-gradient-to-r from-transparent via-myBlack via-60% to-myBlack " />
      <ul className="flex items-center gap-2 w-full pl-2 md:pl-40 lg:pl-64 pr-24 overflow-x-scroll scrollbar-hide py-2">
        {tags.map((genre, index) => (
          <li
            onClick={() => {
              fetchGames(genre);
              console.log("fetch");
            }}
            className="bg-mylightGray px-2 rounded-full whitespace-nowrap cursor-pointer"
            key={index}
          >
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
