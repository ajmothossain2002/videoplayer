import { type VideoFile } from "../type/index";

export const loadVideosFromStorage = (): VideoFile[] => {
  try {
    const data = localStorage.getItem("uploadedVideos");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading videos from localStorage", error);
    return [];
  }
};

export const saveVideosToStorage = (videos: VideoFile[]) => {
  try {
    localStorage.setItem("uploadedVideos", JSON.stringify(videos));
  } catch (error) {
    console.error("Error saving videos to localStorage", error);
  }
};
