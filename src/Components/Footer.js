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
          <a href="/">
            <h1>PolyPhy</h1>
          </a>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="footer-column">
            <h2>Quick Links</h2>
            <a href="#about">
              <p>About</p>
            </a>
            <a href="/story">
              <p>Story</p>
            </a>
            <a href="https://polyphy.readthedocs.io/">
              <p>Documentation</p>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="footer-column">
            <h2>Gallery</h2>
            <a href="/research">
              <p>Research</p>
            </a>
            <a href="/creatives">
              <p>Creative</p>
            </a>
            <a href="/usecases">
              <p>UseCases</p>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="footer-column">
            <h2>Community</h2>
            <a href="https://github.com/PolyPhyHub">
              <p>GitHub</p>
            </a>
            <a href="/opportunities">
              <p>Opportunities</p>
            </a>
            <a href="/team">
              <p>Team</p>
            </a>
          </div>
        </Grid>
      </Grid>
      <p
        style={{
          textAlign: "center",
          transform: "translateY(30px)",
          opacity: "0.6",
        }}
      >
        Copyright © 2022-2023 PolyPhy name, original media and accompanying
        websites. Developed under the Open Source Program Office at the
        University of California in Santa Cruz.
      </p>
    </div>
  );
};

export default Footer;
