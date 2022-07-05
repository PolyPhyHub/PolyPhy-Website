import { Stack } from "@mui/material";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

const Navlinks = ({ dir, sp, setOpen }) => {
  const mobile = useMediaQuery("(max-width:768px)");

  return (
    <Stack direction={dir} spacing={sp}>
      {mobile ? (
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      ) : null}
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/" target="_blank">Documentation</a>
      </li>
      <li>
        <a href="/">References</a>
      </li>
      <li>
        <a href="https://cross-polyphy-docs.vercel.app/" target="_blank" rel="noreferrer">Contribution</a>
      </li>
      <li>
        <a href="/">Community</a>
      </li>
    </Stack>
  );
};

const Navbar = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      {!mobile ? (
        <Navlinks dir="row" sp={10} />
      ) : (
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            padding: "1rem 3rem",
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
          }}
        >
        <div className="navbar">
          <Navlinks dir="column" sp={5} setOpen={setOpen}></Navlinks>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;
