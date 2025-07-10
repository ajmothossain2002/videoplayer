import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./vedioSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer, // my state slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
