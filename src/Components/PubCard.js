import { Grid, Paper } from "@mui/material";
import React from "react";

const PubCard = ({ pub }) => {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <div className="publication">
        <Paper variant="outlined">
          <h2>{pub.name}</h2>
          <p>
            <i>{pub.journal}</i>
          </p>
          <img src={pub.image} alt=""></img>
          <p className="brief">{pub.brief}</p>
        </Paper>
      </div>
    </Grid>
  );
};

export default PubCard;
