import usecase1 from "../Assets/usecase1.PNG"

export const usecases = [
  {
    name: "Pilot experiments: EAGLE data",
    image: "https://elek.pub/projects/Rhizome-Cosmology/images/eagle.png",
    id: "sec-a6d8",
    brief:
      "The EAGLE simulation catalog  was our first experiment with actual astrophysical data. These is a relatively small but detailed dataset, mapping the baryonic matter distribution on the level of several adjacent galactic clusters. These data served a calibration purpose, to verify that MCPM can find structures on different spatial scales and distinguish between density regimes: filament cores, filament outskirts, and diffuse medium surrounding them.",
  },
  {
    name: "Calibrating the model: Bolshoi-Planck data",
    image: "https://elek.pub/projects/Rhizome-Cosmology/images/main.png",
    id: "bolshoi-planck",
    brief:
      "In this experiment we fit to the Bolshoi-Planck dark matter simulation data  to calibrate MCPM’s geometric parameters. We chose this dataset because 1) it is complete, i.e., no data are missing for observational reasons and 2) the dark matter distribution is geometrically simpler, as it is not subject to electromagnetic interaction, only the gravitational force.",
  },
  {
    name: "Understanding large simulations",
    image:
      "https://elek.pub/projects/Rhizome-Cosmology/images/8-corners-sm.png",
      id: "sec-3d7e",
    brief:
      "In this experiment we fit and visualize the MassiveNuS dataset at redshift z=0 (i.e., present day). This is a large dataset of 12M dark matter halos resulting from a cosmological simulation of a 256​³ Mpc region of space .After fitting the data with Polyphorm we render it with volumetric path tracing. To distinguish between the input dark matter halos and the reconstructed filaments, we use two different emission profiles: white-red for the halos and yellow-blue for the filaments. ​The inner four views correspond to the upper corners of the density cube, while the outer four to the bottom corners. Thus, we obtain a view of the dataset from all directions. In Burchett et al.  we analyze another large-scale simulation: IllustrisTNG . Thanks to Polyphorm, we were able to visualize not only the structure of the Cosmic web, but also the directionality of its filaments and relationship between galactic star formation rates and their relative positions in the structure.",
  },
  {
    name: "First application to observations: SDSS data for nearby galaxies",
    image: "https://elek.pub/projects/Rhizome-Cosmology/images/main1.png",
    id: "sdss",
    brief:
      "Once the MCPM model is calibrated on the reference , we proceed with fitting to observational data, specifically the Sloan Digital Sky Survey (SDSS) catalog . We limit the redshift range (i.e., the distance from Earth) between 0.018 and 0.038 to obtain a consistent coverage of the domain, yielding approximately 37,600 galaxies.",
  },
  {
    name: "Matter density distribution",
    image: "https://elek.pub/projects/Rhizome-Cosmology/images/bracketing.png",
    id: "sec-69a2",
    brief:
      "Since MCPM produces scalar density fields, we can do more than just identify individual Cosmic web filaments. In this experiment, we visualize a single slice of the 3D Cosmic web map derived from the  and color-code it into three density regimes: filament cores (red), outskirts of filaments (green) and external diffuse regions (blue). Probing the green regions further (bottom insets) we can further distinguish its individual layers as a function of distance from the galactic halos. These regions are of particular astronomical interest, as they lie in the transition between the well explored circumgalactic environments and the vast extragalactic space.",
  },
  {
    name: "Going big: Extended SDSS galaxy catalog",
    image: usecase1,
    id: "sec-1e1e",
    brief:
      " ​In this experiment, we fit to 325k galaxies from the SDSS catalog, up to redshift of 0.1, which corresponds to more than a billion light years of Cosmic distance. At these scales, our ability to observe galaxies diminishes significantly. To obtain viable reconstructions with MCPM, adjusting the sensing distance parameter is necessary – we need double the value compared to the smaller dataset (5 Mpc instead of 2.5 Mpc).",
  },
  {
    name: "Fast radio bursts",
    image: "https://elek.pub/projects/Rhizome-Cosmology/images/frb_PT32.png",
    id: "sec-07db",
    brief:
      "Fast radio bursts, or FRBs, are strong and extremely short (around 1 ms) flashes of electromagnetic radiation spreading through space on intergalactic scales. Discovered only about a decade ago, they are one of the active topics of inquiry in both theoretical and observational astronomy.      The adjacent visualization recreates the hypothetical situation of what an FRB would look like, were it emitted in visible light rather than the much longer radio waves. We see that due to occlusions by the Cosmic web structures the FRB radiation spreads through space very unevenly. Thanks to Polyphorm, we were able to both reconstruct the Cosmic web structure surrounding this virtual FRB and visualize the situation in a physically plausible way.",
  },
];
