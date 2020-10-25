import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/game/gameSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
