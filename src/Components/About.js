import React from "react";

const About = () => {
  return (
    <div id="about" className="about">
      <h1>About Polyphorm</h1>
      <p>
        Polyphorm is an interactive tool to analyze intergalactic gas and dark
        matter filaments (together known as 'Cosmic web') using the Monte Carlo
        Physarum Machine (MCPM) algorithm inspired by the foraging behavior of
        Physarum polycephalum 'slime mold'.
      </p>
      <br />
      <p>
        Polyphorm has two tightly coupled main components: simulation and
        visualization.
      </p>
      <br />
      <p>
        The simulation component implements the MCPM algorithm to reconstruct an
        optimal transport network given a set of point data in 3D space. Such
        data can represent the distribution of galaxies or dark matter halos,
        typically on the scales of 100s of megaparsecs. MCPM uses a swarm of
        millions of particle-like agents to explore the simulation domain. These
        agents are attracted to each other, as well as the input data. After a
        number of iterations, the simulation reaches a dynamic equilibrium: the
        agents still move, but the totality of their trajectories is stable. The
        output of the algorithm at this stage is a 3D spatio-temporal density of
        the agents which we interpret as an estimate of the Cosmic web.
      </p>
      <br />
      <p>
        {" "}
        The visualization component facilitates analysis tasks of the estimated
        network. Thanks to the interactive nature of Polyphorm we can observe
        changes of the estimate in response to changing MCPM parameters. The
        main concern is whether the reconstruction fits the input data (i.e. all
        the input points are contained in it) as well as the plausibility of the
        obtained filamentary structures.
      </p>
      <div className="download">
          Try it out!
      </div>
    </div>
  );
};

export default About;
