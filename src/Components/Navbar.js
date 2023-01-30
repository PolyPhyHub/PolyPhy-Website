import { Stack } from "@mui/material";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Navlinks = ({ dir, sp }) => {
  const mobile = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack
      direction={dir}
      spacing={sp}
      alignItems={!mobile ? "center" : "left"}
    >
      <li>
        <a className="navLinksMain" href={process.env.PUBLIC_URL + "/"}>
          Home
        </a>
      </li>
      <li>
        <a className="navLinksMain" href={process.env.PUBLIC_URL + "/story"}>
          Story
        </a>
      </li>
      <li>
        <a
          className="navLinksMain"
          href={"https://polyphy.readthedocs.io/"}
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
            <a
              className="dropdown-links"
              href={process.env.PUBLIC_URL + "/research"}
            >
              Research
            </a>
          </li>
          <li>
            <a
              className="dropdown-links"
              href={process.env.PUBLIC_URL + "/creatives"}
            >
              Creative
            </a>
          </li>
          <li>
            <a
              className="dropdown-links"
              href={process.env.PUBLIC_URL + "/usecases"}
            >
              Usecases
            </a>
          </li>
          <li>
            <a
              className="dropdown-links"
              href={process.env.PUBLIC_URL + "/tutorials"}
            >
              Tutorials
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
            <a
              className="dropdown-links"
              href={process.env.PUBLIC_URL + "/opportunities"}
            >
              Opportunities{" "}
            </a>
          </li>
          <li onClick={handleClickOpen}>
            {/* eslint-disable-next-line */}
            <a className="dropdown-links">Slack </a>
          </li>
          <li>
            <a
              className="dropdown-links"
              href="https://github.com/PolyPhyHub/PolyPhy/issues"
            >
              Discussions
            </a>
          </li>
          <li>
            <a
              className="dropdown-links"
              href={process.env.PUBLIC_URL + "/team"}
            >
              Team
            </a>
          </li>
        </ul>
      </li>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Want to join PolyPhy's Slack Channel?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you want to interact with the developers of PolyPhy and know more
            about the software, feel free to request{" "}
            <a style={{ color: "#f7981b" }} href="mailto:oelek@ucsc.edu ">
              Dr. Oskar Elek
            </a>{" "}
            for the channel invitation.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" href="mailto:oelek@ucsc.edu ">
            Send Email
          </Button>
        </DialogActions>
      </Dialog>
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
