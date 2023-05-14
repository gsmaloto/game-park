import axios from "axios";
import { create } from "zustand";

const options = {
  headers: {
    "X-RapidAPI-Key": "eb0f12404bmshd3afd14c2509014p1545eejsn6cacae9153af",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const useGamesStore = create((set) => ({
  games: [],
  loading: true,
  searchGames: null,

  fetchGames: async (param) => {
    set({ loading: true });
    const res = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?${
        param ? `category=${param}` : ""
      }`,
      options
    );
    set({ games: res.data, loading: false });
  },

  handleSearchGames: (search) => {
    const games = useGamesStore.getState().games;

    const filterGames = games?.filter((game) =>
      game.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    set({ searchGames: filterGames.length ? filterGames : [] });
  },

  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useGamesStore;
