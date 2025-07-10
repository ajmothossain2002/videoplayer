import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import { type VideoFile } from "../type";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteVideo } from '../redux/vedioSlice';




import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Paper,
} from "@mui/material";

export default function VideoDetails() {
 const dispatch=useDispatch();
 

   const handleDelete = (id: string) => {
      if (window.confirm("Are you sure you want to delete this video?")) {
        dispatch(deleteVideo(id));
        navigate('/explore')
      }
    };
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const video: VideoFile | undefined = useSelector((state: RootState) =>
    state.videos.uploadedVideos.find((vid) => vid.id === id)
  );

  if (!video) {
    return (
      <Container sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h5" fontWeight={600} mt={2}>
            Video not found.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/explore")}>
            Back to Explore
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2, bgcolor: "#1e1e1e", color: "white" }}>
        {/* Video Player */}
        <Box
          component="video"
          src={video.url}
          controls
          autoPlay
          sx={{
            width: "100%",
            maxHeight: "500px",
            borderRadius: 2,
            backgroundColor: "black",
          }}
        />

        {/* Title */}
        <Typography variant="h5" fontWeight={600} mt={3}>
          {video.name}
        </Typography>

        {/* Meta Info */}
        <Typography variant="body2" color="gray" mt={1}>
          {video.date} • {video.views} views • {video.restriction}
        </Typography>

        {/* Description */}
        <Typography variant="body1" mt={2}>
          {video.description || "No description available."}
        </Typography>

        {/* Actions */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
          <Button variant="contained" onClick={() => navigate("/explore")}>
            Back to Explore
          </Button>
           <Button
                size="small"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(video.id)}
                sx={{ borderColor: '#f44336', color: '#f44336' }}
              >
                Delete
              </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
