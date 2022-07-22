import { Grid, Paper } from "@mui/material";
import React from "react";

export const PubCardSmall = ({ pub }) => {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <div className="publication_card_small">
        <Paper variant="outlined">
          <h2>{pub.name}</h2>
          <p style={{ padding: "0 1rem" }}>
            <i>{pub.journal}</i>
          </p>
          <img src={pub.image} alt=""></img>
          <p className="brief">{pub.brief}</p>
        </Paper>
      </div>
    </Grid>
  );
};

export const PubCardLarge = ({ pub, align }) => {
  return (
    <Grid item xs={12} sm={12}>
      <div className="publication_card_large">
        <Paper variant="outlined">
          <Grid container>
            {align ? (
              <>
                <Grid item xs={6} sm={6}>
                  <div className="image-container">
                    <div className="centered-image">
                      <img src={pub.image} alt="" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <h2>{pub.name}</h2>
                  <p style={{ padding: "0 1rem" }}>
                    <i>{pub.journal}</i>
                  </p>
                  <p className="brief">{pub.brief}</p>
                  <p style={{ padding: "0.5rem 1rem" }}>
                    <i>
                      Oskar Elek, Joseph N. Burchett, J. Xavier Prochaska, Angus
                      G. Forbes
                    </i>
                  </p>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={6} sm={6}>
                  <h2>{pub.name}</h2>
                  <p style={{ padding: "0 1rem" }}>
                    <i>{pub.journal}</i>
                  </p>
                  <p className="brief">{pub.brief}</p>
                  <p style={{ padding: "0.5rem 1rem" }}>
                    <i>
                      Oskar Elek, Joseph N. Burchett, J. Xavier Prochaska, Angus
                      G. Forbes
                    </i>
                  </p>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <div className="image-container">
                    <div className="centered-image">
                      <img src={pub.image} alt="" />
                    </div>
                  </div>
                </Grid>
              </>
            )}
          </Grid>
        </Paper>
      </div>
    </Grid>
  );
};
