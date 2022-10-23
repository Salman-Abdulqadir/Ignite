import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL, searchGamesURL } from "../api";

//ACTION CREATOR

export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results
    },
  });
};
export const searchGames = (gameName) => async (dispatch) => {
  // FETCH AXIOS
  const searchedData = await axios.get(searchGamesURL(gameName));
  
  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      searched: searchedData.data.results
    },
  });
};

export const clearSearch = () => async (dispatch) =>{
  dispatch({type: "CLEAR_SEARCH"});
}
