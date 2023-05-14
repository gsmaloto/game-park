import React, { useEffect } from "react";
import { BsCardImage } from "react-icons/bs";
import useGamesStore from "../store/gamesStore";
import Card from "./Card";
const GameCard = () => {
  // const url =
  //   "https://free-to-play-games-database.p.rapidapi.com/api/games?tag=shooter";
  // const options = {
  //   headers: {
  //     "X-RapidAPI-Key": "eb0f12404bmshd3afd14c2509014p1545eejsn6cacae9153af",
  //     "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  //   },
  // };

  // const [games, setGames] = useState([]);

  // const fetchAllGames = async () => {
  //   const res = await axios.get(url, options);
  //   setGames(res.data);
  // };

  const { fetchGames, games, searchGames, loading } = useGamesStore(
    (state) => state
  );

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="max-w-[1500px] h-full mx-auto grid place-items-center xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:ml-40 lg:ml-64 p-2 pt-[140px]">
      {loading ? (
        <div className="absolute overflow-hidden top-1/2">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <Card
          gameData={
            searchGames == null ? games : searchGames.length ? searchGames : []
          }
        />
      )}
    </div>
  );
};

export default GameCard;
