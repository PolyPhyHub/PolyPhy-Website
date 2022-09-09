import { Grid } from "@mui/material";
import React from "react";

const Story = () => {
  return (
    <div className="story-route-wrapper">
      <div style={{ maxWidth: "1300px", margin: "auto" }}>
        <h1 style={{ textAlign: "center" }}>The Polyphy Story</h1>
        <div style={{ margin: "2rem 0" }}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={6}>
              <img
                src="https://elek.pub/projects/Rhizome-Cosmology/images/rhizome_3D.png"
                alt=""
              ></img>
              <i>
                Monte Carlo ​Physarum Machine simulated in a three-dimensional
                transparent enclosure, at this point without any data to
                constrain its growth.
              </i>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <p>
                Rhizome Cosmology is made by , an open-source software that
                combines an interactive implementation of a 3D Physarum machine,
                and a simultaneous volume visualization of the generated
                structures. Polyphorm has enabled novel scientific results
                through its ability to create detailed 3D density maps of the
                Cosmic web from sparse cosmological data – catalogues of
                galaxies and/or dark matter halos. Our main findings include the
                attribution of a major portion of the intergalactic medium (IGM)
                to the large-scale filamentary structure of Cosmic web , and an
                explanation of an unusually large dispersion measure of a fast
                radio burst (FRB) event .
              </p>
              <br />
              <p>
                A detailed description of our simulation and visualization
                methodology is given in our prior works . In this document, we
                visually map out the evolution of this project, focusing on
                three aspects:
              </p>
              <br />
              <ol>
                <li>
                  <i>
                    the initial idea of using a simulated Physarum machine for
                    generating a scalar density field representing the 3D matter
                    distribution of the Cosmic web,
                  </i>
                </li>
                <li>
                  <i>algorithmic design choices in our methodology, and</i>
                </li>
                <li>
                  <i>
                    its concrete applications in both simulated and
                    observational cosmological datasets.
                  </i>
                </li>
              </ol>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="section2">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={4}>
            <img
              src="https://elek.pub/projects/Rhizome-Cosmology/images/physarum_polycephalum.png"
              alt=""
            ></img>
            <i>
              Complex transport network of tubes grown by Physarum polycephalum
              in the search for food.
            </i>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <h2>Physarum networks</h2>
            <p>
              Physarum polycephalum ​‘slime mold’ is a unicellular protist,
              whose macroscopic plasmodium form grows complex transport networks
              in the search for food sources. The near-optimality of these
              captivating structures has been demonstrated by numerous
              researchers, for instance in mapping out the greater Tokyo railway
              system .
            </p>
            <br />
            <p>
              In our case, the possibility of reconstructing the Cosmic web by a
              Physarum simulation (usually referred to as ‘Physarum machine’)
              has been inspired by the work of Sage Jenson , who has created
              GPU-accelerated interactive visual performances featuring the
              growth patterns of this organism. We build on the algorithm
              proposed by Jeff Jones , extending this method to 3D and adopting
              a probabilistic ruleset to increase the expressiveness and
              robustness of the model.
            </p>
          </Grid>
        </Grid>
      </div>
      <div style={{ maxWidth: "1300px", margin: "auto" }}>
        <div style={{ margin: "2rem 0" }}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={8}>
              <h2>Structure of the Cosmic web</h2>
              <p>
                The is the largest recognized structure in the Universe,
                composed of filaments that interconnect galaxies into a single,
                cohesive network. One of the greatest challenges of modern
                cosmology, this complex self-similar structure is composed of
                diffuse gas and dark matter filaments with characteristic scales
                between 1 Mpc and 100s of Mpc in length (by comparison, the
                Milky Way is 0.03 Mpc in diameter). The matter density of the
                filaments themselves varies across several orders of magnitude.
              </p>
              <br />
              <p>
                To illustrate the link between the Cosmic web and Physarum
                networks, we quote the work of Libeskind et al. : “Filaments
                appear to be the highways of the Universe, the transport
                channels along which mass and galaxies get channeled into the
                higher density cluster regions, and which define the connecting
                structures between higher density complexes.” Even though the
                two phenomena arise from very different formation processes, the
                structures they produce are remarkably similar.
              </p>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <img
                src="https://elek.pub/projects/Rhizome-Cosmology/images/fractal.png"
                alt=""
              ></img>
              <i>
                Quasi fractal nature of the Cosmic web: zooming in reveals
                similarity of structure across multiple scales. These structures
                are also isotropic, in that the filaments have no dominant
                orientation.
              </i>
            </Grid>
          </Grid>
        </div>
      </div>
      <div style={{ maxWidth: "1300px", margin: "auto"}}>
        <div style={{ margin: "2rem 0" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8}>
              <div className="section3">
                <h2>Galaxies, halos and filaments</h2>
                <p>
                  The main challenge in reconstructing the Cosmic web stems from
                  its extremely low matter density: beside a few most prominent
                  filaments, it is virtually invisible to even the most
                  sensitive instruments. Most evidence we have about its
                  distribution is indirect: the apparent alignment of the
                  luminous matter – i.e., galaxies – into higher-level
                  structures, sparse spectroscopic measurements, and of course,
                  supercomputer N-body cosmological simulations. Obtaining even
                  an approximate density distribution from the positions of the
                  luminous tracers alone (see example in the left figure) is
                  therefore of great interest to astronomical science.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <div className="section4">
                <h2>Monte Carlo Physarum machine</h2>
                <p>
                  The method we designed to address this challenge is an
                  agent-based model called Monte Carlo Physarum machine (MCPM).
                  The core idea of this model is to simulate a swarm of
                  particle-like agents (in the orders of 10⁶-10​⁷) that navigate
                  the 3D domain in the search of ‘food’ deposited by the input
                  data: in our case, these are galaxies or dark matter clusters
                  called halos. The trajectories of all the agents are
                  superimposed over hundreds of simulation steps in a modality
                  dubbed trace. In the limit, this modality approaches a
                  continuous scalar density field representing the probability
                  of finding an agent in any given 3D location.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div style={{ maxWidth: "1300px", margin: "4rem auto" }}>
        <h2 style={{ textAlign: "center" }}>Key features of the model</h2>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={6}>
            <p>
              Due to the stochastic nature of MCPM, the structures traced by its
              agents are not merely discrete geometric instances. Rather, they
              approximate 3D probability density functions conditioned by the
              input data and the model's parameters. 50 agents 10⁶ agents We
              illustrate this by plotting the trajectories described by MCPM
              agents over 500 iterations. While individual agents follow a
              seemingly random set of paths (left panel), the superposition of
              the entire swarm reveals an underlying ​‘fuzzy’ structure present
              in the data (right panel).
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="https://elek.pub/projects/Rhizome-Cosmology/images/trajectories.png"
              alt=""
            ></img>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <i>50 agents</i>
              <i>10⁶ agents</i>
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ maxWidth: "1300px", margin: " auto" }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={8}>
            <div className="section4">
              <h2>Spreading the slime</h2>
              <p>
                The process of growing virtual Physarum is iterative and
                typically takes 1-2 minutes to converge, depending on the
                resolution of the deposit & trace fields and the number of
                agents. Detailed performance figures are provided in .
              </p>
              <br />
              <p>
                We initiate the simultaneously at a number of sites
                corresponding to the positions of the data – galaxies or dark
                matter halos. Unlike the actual Physarum nuclei, the virtual
                agents are not physically constrained to the plasmodium
                membrane. Rather, they flow freely through space, incrementally
                building the resulting trace. The figure shows several snapshots
                of this process over 500 iterations of the model.
              </p>
              <br />
              <p>
                The growing procedure is fully interactive, therefore all of the
                MCPM parameters related to the generated network geometry can be
                modified to improve the quality of the reconstruction. Thanks to
                this design choice, a typical fitting session usually takes only
                about 10-20 minutes.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="section4" style={{backgroundColor: "rgba(232, 117, 2, 0.401)", border: "none"}}>
              <h2>Self-patterning</h2>
              <p>
                Even without structured input data, MCPM remains true to its
                biological inspiration and builds three-dimensional networks
                with organic qualities. The first specimen resembling a tree
                rhizome has been grown without any data; the structure arises
                purely from the agents coalescing together (specifically, due to
                the positive feedback behavior of the ). To grow the second
                specimen, we fed the model a random set of 4k points with
                weights biased upward. The result resembles a rigid scaffolding,
                such as bone marrow.
              </p>
            </div>
          </Grid>
        </Grid>

        <br />
      </div>
      <p style={{textAlign: "center"}}>To read more interesting information visit <a href="https://elek.pub/projects/Rhizome-Cosmology/" style={{color: "#ff8400"}}>this page</a></p>
    </div>
  );
};

export default Story;
