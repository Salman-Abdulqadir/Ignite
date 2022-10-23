import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./games";
const store = configureStore({
  reducer: {
    games: gameSlice.reducer,
  },
}, );
export default store;
