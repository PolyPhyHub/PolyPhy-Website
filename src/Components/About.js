import { Link } from "@mui/material";
import React from "react";
import ButtonSwipe from "./ButtonSwipe";

const About = () => {
  return (
    <div id="about" className="about">
      <h1>About PolyPhy</h1>
      <br />
      <p>
        PolyPhy is an interactive visualization and model-fitting tool that
        provides a novel approach to investigating cosmological datasets.
        Through a fast computational simulation method inspired by the behavior
        of Physarum polycephalum, a unicellular slime mold organism that
        efficiently forages for nutrients, astrophysicists can extrapolate from
        sparse datasets, such as galaxy maps archived in the Sloan Digital Sky
        Survey, and then use these extrapolations to inform analyses of a wide
        range of other data, such as spectroscopic observations captured by the
        Hubble Space Telescope. Researchers can interactively update the
        simulation by adjusting model parameters, and then investigate the
        resulting visual output to form hypotheses about the data. We describe
        details of PolyPhy's simulation model and its interaction and
        visualization modalities, and we evaluate PolyPhy through three
        scientific use cases that demonstrate the effectiveness of our approach.
        <br />
        <br />
        PolyPhy has two tightly coupled main components: simulation and
        visualization.
        <br />
        <br />
        The simulation component implements the MCPM algorithm to reconstruct an
        optimal transport network given a set of point data in 3D space. Such
        data can represent the distribution of galaxies or dark matter halos,
        typically on the scales of 100s of megaparsecs. MCPM uses a swarm of
        millions of particle-like agents to explore the simulation domain.
        <br />
        <br />
        The visualization component facilitates analysis tasks of the estimated
        network. Thanks to the interactive nature of PolyPhy, we can observe
        changes in the estimate in response to changing MCPM parameters. The
        main concern is whether the reconstruction fits the input data (i.e. all
        the input points are contained in it) as well as the plausibility of the
        obtained filamentary structures.
      </p>
      <Link href={process.env.PUBLIC_URL + "/story"} underline="none">
        <ButtonSwipe>Know More {">"}</ButtonSwipe>
      </Link>
    </div>
  );
};

export default About;
