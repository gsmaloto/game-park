import React, { useEffect, useState } from "react";
import { BsWindows, BsGlobe } from "react-icons/bs";
import useGamesStore from "../store/gamesStore";

const Card = ({ gameData }) => {
  const [openId, setOpenId] = useState();

  function renderPlatform(platform) {
    if (platform === "PC (Windows)") {
      return <BsWindows />;
    }
    if (platform === "Web Browser") {
      return <BsGlobe />;
    }
    if (platform === "PC (Windows), Web Browser") {
      return (
        <div className="flex gap-2">
          <BsWindows />
          <BsGlobe />
        </div>
      );
    }
  }

  if (!gameData.length) {
    return (
      <div className="absolute mt-24">
        <h1 className="text-2xl">No Game Found</h1>
      </div>
    );
  }

  return (
    <>
      {gameData?.map((game) => (
        <div
          key={game.id}
          className="text-white w-full group cursor-pointer"
          onClick={() => {
            setOpenId(game.id);
          }}
        >
          <div className="relative overflow-hidden">
            <img
              src={game.thumbnail}
              alt=""
              className="w-full group-hover:scale-125 transition-all"
            />
            <div className="absolute -bottom-12 right-0 px-4 h-24 group-hover:bottom-0 transition-all flex items-end justify-between w-full pb-2 bg-gradient-to-t from-[#000000]  to-transparent ">
              {/* format(Date.parse(game.release_date), "MM/dd/yyyy") */}
              <p className="text-xs flex-1">{game.release_date}</p>
              <p className="inline-block rounded px-2 text-xs text-right flex-1">
                {game.publisher}
              </p>
            </div>
          </div>
          <div className="p-3 bg-my group-hover:bg-mylightGray">
            <div className="flex justify-between items-center">
              <p className="py-1 text-xs font-semibold text-gray-400 uppercase">
                {game.genre}
              </p>
              <p className="mr-4">{renderPlatform(game.platform)}</p>
            </div>
            <p className="text-xl mb-2">{game.title}</p>
            <p className="pl-4 text-sm text-gray-400 line-clamp-2">
              {game.short_description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
