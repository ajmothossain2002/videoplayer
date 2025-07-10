import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type VideoFile } from "../type";
import {
  loadVideosFromStorage,
  saveVideosToStorage,
} from "../utils/localStorage";

interface VideoState {
  uploadedVideos: VideoFile[];
}

const initialState: VideoState = {
  uploadedVideos: loadVideosFromStorage(),
};

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideos: (state: VideoState, action: PayloadAction<VideoFile[]>) => {
      state.uploadedVideos = action.payload;
      saveVideosToStorage(state.uploadedVideos);
    },
    addVideo: (state: VideoState, action: PayloadAction<VideoFile>) => {
      state.uploadedVideos.push(action.payload);
      saveVideosToStorage(state.uploadedVideos);
    },
    deleteVideo: (state: VideoState, action: PayloadAction<string>) => {
      state.uploadedVideos = state.uploadedVideos.filter(
        (video: VideoFile) => video.id !== action.payload
      );
      saveVideosToStorage(state.uploadedVideos);
    },
  },
});

export const { setVideos, addVideo, deleteVideo } = videoSlice.actions;
export default videoSlice.reducer;
