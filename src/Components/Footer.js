import { Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={3}>
          <h1>POLYPHORM</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="footer-column">
            <h2>Quick Links</h2>
            <p>About</p>
            <p>Documenation</p>
            <p>References</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="footer-column">
            <h2>Contribution</h2>
            <p>All Issues</p>
            <p>Open an Issue</p>
            <p>Pull Request</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="footer-column">
            <h2>Community</h2>
            <p>GitHub</p>
            <p>Slack Channel</p>
            <p>Discussions</p>
          </div>
        </Grid>
      </Grid>
      <p style={{textAlign: "center", transform: "translateY(30px)", opacity: "0.6"}}>Copyright © {new Date().getFullYear()} PolyPhy, Center of Research for Open Source Software</p>
    </div>
  );
};

export default Footer;
