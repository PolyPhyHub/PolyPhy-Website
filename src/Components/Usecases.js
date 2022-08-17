import { Grid } from "@mui/material";
import { PubCardLarge, PubCardSmall } from "./PubCard";
import React from "react";
import { usecases } from "../Constants/usecases";
import useMediaQuery from "@mui/material/useMediaQuery";

const Usecases = () => {
  const small = useMediaQuery("(max-width:1000px)");

  return (
    <div className="publication-route-wrapper">
      <h1>Usecases and Experiments</h1>
      <div style={{ margin: "2rem 0" }}>
        <Grid container spacing={4}>
          {usecases.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {small ? (
                  <PubCardSmall pub={item} type="usecase" key={item.image} />
                ) : index % 2 === 0 ? (
                  <PubCardLarge pub={item} type="usecase" key={item.image} align={true} />
                ) : (
                  <PubCardLarge pub={item} type="usecase" key={item.image} />
                )}
              </React.Fragment>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Usecases;
