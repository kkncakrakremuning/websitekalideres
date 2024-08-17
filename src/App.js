import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import DataDesa from "./pages/dataDesa/DataDesa";
import FasilitasPublic from "./pages/fasilitasPublic/FasilitasPublic";
import HasilKKN from "./pages/hasilKkn/HasilKKN";
import VisitUs from "./pages/visitUs/VisitUs";
import AOS from "aos";

const pages = ["Data Desa", "Fasilitas Umum", "Hasil KKN", "Visit Us"];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  

  return (
    <Box>
      <Router>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to="/" style={{color : "white", textDecoration : "none"}}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: "0 rem",
                    color: "white",
                    textDecoration: "none",

                  }}
                >
                  Kalideres
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, color : "white"}}>
                <Link to="/data-desa" style={{color : "white"}}>
                  <Button color="inherit">Data Desa</Button>
                </Link>
                <Link to="/fasilitas-umum" style={{color : "white"}}>
                  <Button color="inherit">Fasilitas Umum</Button>
                </Link>
                <Link to="/hasil-kkn" style={{color : "white"}}>
                  <Button color="inherit">Hasil KKN</Button>
                </Link>
                <Link to="/visit-us" style={{color : "white"}}>
                  <Button color="inherit">Visit US</Button>
                </Link>
                
              
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Routes>
          <Route path="/kalideres/" element={<Home />} />
          <Route path="/kalideres/data-desa" element={<DataDesa />} />
          <Route path="/kalideres/fasilitas-umum" element={<FasilitasPublic />} />
          <Route path="/kalideres/hasil-kkn" element={<HasilKKN />} />
          <Route path="/kalideres/visit-us" element={<VisitUs />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
