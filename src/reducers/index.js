import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailsReducer from "./gameDetail";

const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer
});

export default rootReducer;
