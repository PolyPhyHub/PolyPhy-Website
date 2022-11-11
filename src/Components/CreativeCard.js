import { Grid } from "@mui/material";
import React from "react";

const CreativeCard = ({ x }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
    <a href={`https://elek.pub/creative.html#${x.id}`} target="_blank" rel="noreferrer">
      <div className="creative-card">
        <img src={x.image} alt="" />
        <div className="content">
          <h2>{x.title}</h2>
          <p>{x.subtitle}</p>
          <i>{x.authors}</i>
        </div>
      </div>
      </a>
    </Grid>
  );
};

export default CreativeCard;
