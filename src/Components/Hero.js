import React from "react";
import Particles from "react-tsparticles";
import { particles } from "../Constants/particles";
import { Link } from "@mui/material";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Particles id="tsparticles" options={particles} />
        <div className="content">
          <h1>POLYPHORM</h1>
          <i>
            <p>
              Structural Analysis of Cosmological Datasets via Interactive
              Physarum Polycephalum Visualisation
              <br />
              Polyphorm is an interactive tool to analyze intergalactic gas and
              dark matter filaments (together known as 'Cosmic web') using the
              Monte Carlo Physarum Machine (MCPM) algorithm inspired by the
              foraging behavior of Physarum polycephalum 'slime mold'.
            </p>
          </i>
        </div>
      </div>
      <Link href="#about" underline="none">
        <div className="cta-arrow-wrapper">
          <div className="cta-arrow"></div>
        </div>
      </Link>
    </>
  );
};

export default Hero;
