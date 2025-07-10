import { Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addVideo } from "../redux/vedioSlice";
import { type RootState } from "../redux/store";
// import Sidebar from "../component/Sidebar";
// import Topbar from "../component/Topbar";
import DropzoneUpload from "../component/DropzoneUpload";
import VideoTable from "../component/VideoTable";

export default function Home() {
  const dispatch = useDispatch();
  const videos = useSelector((state: RootState) => state.videos.uploadedVideos);

  const handleUpload = (files: File[]) => {
    files.forEach((file) => {
      const video = {
        id: uuidv4(),
        name: file.name,
        url: URL.createObjectURL(file),
        description: "",
        visibility: "Public",
        restriction: "None",
        date: new Date().toLocaleDateString(),
        views: 0,
        comments: 0,
        likes: 0,
      };
      dispatch(addVideo(video));
     
    });
    
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <Sidebar /> */}
      <Box sx={{ flexGrow: 1 }}>
        {/* <Topbar /> */}
        <Box sx={{ p: 2 }}>
          <DropzoneUpload onUpload={handleUpload} />
          <VideoTable videos={videos} />
        </Box>
      </Box>
    </Box>
  );
}
