import React from "react";
import Particles from "react-tsparticles";
import { particles } from "../Constants/particles";

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
            </p>
          </i>
          <div className="download">Download Now!</div>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "center", transform: "translateY(-150px)" }}>
        <div className="cta-arrow"></div>
      </div>
    </>
  );
};

export default Hero;
