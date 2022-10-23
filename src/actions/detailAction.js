import axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../api";

//ACTION CREATOR

export const gameDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });
  // FETCH AXIOS
  const gameData = await axios.get(gameDetailURL(id));
  const screenshotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GAME_DETAILS",
    payload: {
      game: gameData.data,
      screenshots: screenshotData.data,
    },
  });
};
