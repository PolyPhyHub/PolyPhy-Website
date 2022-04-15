export const viz = [
  {
    img: "https://github.com/CreativeCodingLab/Polyphorm/raw/master/docs/mode_particles.png",
    title: "Particle mode",
    description:
      "Particle mode directly renders the input data (red) and MCPM agents (white) as discrete points. While the data points are static, the agents flow dynamically through space.    ",
  },
  {
    img: "https://github.com/CreativeCodingLab/Polyphorm/raw/master/docs/mode_trace.png",
    description:
      "Trace mode uses direct volume rendering to visualize the spatio-temporal agent density field. The density is mapped to a configurable color palette and rendered using the emission-absorption volumetric medium model.",
    title: "Trace mode",
  },
  {
    img: "https://github.com/CreativeCodingLab/Polyphorm/raw/master/docs/mode_segmentation.png",
    description:
      "Overdensity mode segments the trace field into three configurable intervals (low/medium/high density) and renders each with a different color (blue/green/red) to better understand the spatial distribution of the agents.",
    title: "Overdensity mode",
  },
  {
    img: "https://github.com/CreativeCodingLab/Polyphorm/raw/master/docs/mode_combined.png",
    description:
      "Highlights mode renders the trace (purple) superimposed on the deposit - the volumetric 'footprint' of the input data (bright yellow). This modality additionally supports the highlighting of a selected density band.",
    title: "Highlights mode",
  },
];
