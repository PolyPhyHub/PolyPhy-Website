import { Grid } from "@mui/material";
import React from "react";
import { creatives } from "../Constants/creatives";
import CreativeCard from "../Components/CreativeCard";

const Creatives = () => {
  // const images = [
  //   "https://elek.pub/img/50shades_2_sm.jpg",
  //   "https://elek.pub/img/50shades_1_sm.jpg",
  //   "https://elek.pub/img/rhizome_cosmology.jpg",
  //   "https://elek.pub/img/liminal3_sm.jpg",
  //   "https://elek.pub/img/liminal2_sm.jpg",
  //   "https://elek.pub/projects/Biomimetic/print_SDSS_SLA_z0.038_sm.jpg",
  //   "https://elek.pub/projects/Biomimetic/print_SDSS_SLA_z0.038_2_sm.jpg",
  //   "https://elek.pub/img/physarum_telam.png",
  //   "https://elek.pub/projects/MAH2021/as_above-so_below_small.jpg",
  // ];

  return (
    <div className="publication-route-wrapper">
      <h1 style={{textAlign: "center"}}>Creative</h1>
      <div style={{margin: "2rem 0"}}>
      <Grid container spacing={4} justifyContent="center">
        {
          creatives.map(x => {
            return (
              <CreativeCard x={x} key={x.id}/>
            )
          })
        }
      </Grid>
      </div>
    </div>
  );
};

export default Creatives;
