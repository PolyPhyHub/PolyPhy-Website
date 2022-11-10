import { Stack } from "@mui/material";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

const Navlinks = ({ dir, sp, setOpen }) => {
  const mobile = useMediaQuery("(max-width:768px)");

  return (
    <Stack
      direction={dir}
      spacing={sp}
      alignItems={!mobile ? "center" : "left"}
    >
      <li>
        <a className="navLinksMain" href={process.env.PUBLIC_URL+"/"}>
          Home
        </a>
      </li>
      <li>
        <a className="navLinksMain" href={process.env.PUBLIC_URL+"/story"}>
          Story
        </a>
      </li>
      <li>
        <a
          className="navLinksMain"
          href={process.env.PUBLIC_URL+"/"}
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </a>
      </li>
      <li className="dropdown-wrapper">
        <p className="navLinksMain">Gallery</p>
        <ul className="dropdown">
          <li>
            <a className="dropdown-links" href={process.env.PUBLIC_URL+"/research"}>
              Research
            </a>
          </li>
          <li>
            <a className="dropdown-links" href={process.env.PUBLIC_URL+"/creatives"}>
              Creative
            </a>
          </li>
          <li>
            <a className="dropdown-links" href={process.env.PUBLIC_URL+"/usecases"}>
              Usecases
            </a>
          </li>
        </ul>
      </li>
      <li className="dropdown-wrapper">
        <p className="navLinksMain">Community</p>
        <ul className="dropdown">
          <li>
            <a className="dropdown-links" href="https://github.com/PolyPhyHub">
              GitHub
            </a>
          </li>
          <li>
            <a className="dropdown-links" href={process.env.PUBLIC_URL+"/opportunities"}>
              Opportunities{" "}
            </a>
          </li>
          <li>
            <a className="dropdown-links" href={process.env.PUBLIC_URL+"/"}>
              Slack{" "}
            </a>
          </li>
          <li>
            <a className="dropdown-links" href="https://github.com/PolyPhyHub/PolyPhy/issues">
              Discussions
            </a>
          </li>
          <li>
            <a className="dropdown-links" href={process.env.PUBLIC_URL+"/team"}>
              Team
            </a>
          </li>
        </ul>
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
      ) : !open ? (
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      )}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            padding: "1rem 3rem",
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            marginTop: mobile ? "3rem" : "0",
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
