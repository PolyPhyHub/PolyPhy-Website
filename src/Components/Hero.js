import React from "react";
import { Grid, Link } from "@mui/material";
import video from "./hero-video.webm";

const Hero = () => {
  return (
    <>
      <div className="hero">
        {/* <div className="stars"></div>
        <div className="twinkling"></div> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <div className="content">
              <h1>POLYPHORM</h1>
              <div className="heading-underline"></div>
              <p>
                Structural Analysis of Cosmological Datasets via Interactive
                Physarum Polycephalum Visualisation.
              </p>
              <p>
                Polyphorm is an interactive tool to analyze intergalactic gas
                and dark matter filaments (together known as 'Cosmic web') using
                the Monte Carlo Physarum Machine (MCPM) algorithm inspired by
                the foraging behavior of Physarum polycephalum 'slime mold'.
              </p>
              <a href="/">Get Started !</a>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div style={{ maxWidth: "600px" }}>
              <video
                className="video"
                src={video}
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
              >
                <p>
                  Your browser doesn't support HTML5 video. Here is a{" "}
                  <a href={video}>link to the video</a> instead.
                </p>
              </video>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="cta-arrow-wrapper">
        <Link href="#about" underline="none">
          <div className="cta-arrow"></div>
        </Link>
      </div>
    </>
  );
};

export default Hero;
