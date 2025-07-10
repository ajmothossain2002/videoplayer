import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Button,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import { type VideoFile } from "../type";
import { useNavigate } from "react-router-dom";

const Explore: React.FC = () => {
  const videos = useSelector((state: RootState) => state.videos.uploadedVideos);
  const [view, setView] = useState<"grid" | "list">("grid");
  const navigate = useNavigate();

  const toggleView = () => {
    setView((prev) => (prev === "grid" ? "list" : "grid"));
  };

  return (
    <Box sx={{ bgcolor: "#181818", minHeight: "100vh", color: "white", py: 4 }}>
      <Container maxWidth="xl">
        {/* Toggle Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
          <Button
            variant="outlined"
            onClick={toggleView}
            sx={{ color: "#90caf9", borderColor: "#90caf9" }}
          >
            Switch to {view === "grid" ? "List" : "Grid"} View
          </Button>
        </Box>

        {/* No Videos */}
        {Array.isArray(videos) && videos.length === 0 ? (
          <Typography variant="h6" textAlign="center">
            No videos uploaded yet.
          </Typography>
        ) : view === "grid" ? (
          //thumbnail........................................
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {videos.map((video: VideoFile) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
                <Card
                  sx={{
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    borderRadius: 2,
                    boxShadow: 3,
                    cursor: "pointer",
                    "&:hover": { boxShadow: 6 },
                  }}
                  onClick={() => navigate(`/video/${video.id}`)}
                >



                  <Box
                    component="video"
                    src={video.url}
                    muted
                    loop
                    onMouseOver={(e) => (e.currentTarget as HTMLVideoElement).play()}
                    onMouseOut={(e) => (e.currentTarget as HTMLVideoElement).pause()}
                    sx={{
                      height: 180,
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0",
                      backgroundColor: "#000",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 500 }}
                      noWrap
                    >
                      {video.name}
                    </Typography>
                    <Typography variant="caption" color="gray">
                      {video.date} • {video.views} views
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          // LIST VIEW
          <Stack spacing={2}>
            {videos.map((video: VideoFile) => (
              <Card
                key={video.id}
                onClick={() => navigate(`/video/${video.id}`)}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  backgroundColor: "#1e1e1e",
                  color: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  cursor: "pointer",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <Box
                  component="video"
                  src={video.url}
                  muted
                  loop
                  onMouseOver={(e) => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseOut={(e) => (e.currentTarget as HTMLVideoElement).pause()}
                  sx={{
                    width: { xs: "100%", sm: 250 },
                    height: { xs: 180, sm: "auto" },
                    objectFit: "cover",
                    borderTopLeftRadius: { xs: 8, sm: 8 },
                    borderTopRightRadius: { xs: 8, sm: 0 },
                    borderBottomLeftRadius: { xs: 0, sm: 8 },
                  }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{video.name}</Typography>
                  <Typography variant="body2" color="gray">
                    {video.date} • {video.views} views
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {video.description || "No description provided."}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default Explore;
