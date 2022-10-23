import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { popularGamesURL } from "../api";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: ["yay, it is working"],
  },
  reducers: {
    fetch_games: (state) => {
      state.popular = ["salman"];
    },
    loadGames: async (state) => {
      const popularData = await axios.get(popularGamesURL());
      state.popular = popularData;
    },
  },
});
export const { fetch_games, loadGames } = gameSlice.actions;
export default gameSlice;
