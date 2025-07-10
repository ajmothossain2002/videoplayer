import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Button,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";

const SearchBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#424242",
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  maxWidth: 400,
}));

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({}: TopbarProps) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#212121", zIndex: 1300 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Hamburger and logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" noWrap component="div">
            Video Uploader/viewer{" "}
          </Typography>
        </Box>

        {/* Middle: Search (hidden on mobile) */}
        {!isMobile && (
          <SearchBox>
            <SearchIcon sx={{ color: "#90caf9" }} />
            <InputBase
              placeholder="Search across your channel"
              fullWidth
              sx={{ ml: 1, color: "inherit" }}
            />
          </SearchBox>
        )}

        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {!isMobile && (
            <>
              <Button
                variant="text"
                sx={{ color: "#90caf9" }}
                onClick={() => navigate("/trending")}
              >
                Trending
              </Button>
              <Button
                variant="text"
                sx={{ color: "#90caf9" }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                variant="text"
                sx={{ color: "#90caf9" }}
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
              <Button
                variant="text"
                sx={{ color: "#90caf9", fontWeight: "bold" }}
                onClick={() => navigate("/")}
              >
                + EXPLORE
              </Button>
            </>
          )}
          <Button variant="contained" onClick={() => navigate("/home")}>
            {isMobile ? "UPLOAD" : "UPLOAD MORE"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
