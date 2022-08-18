import { Grid } from "@mui/material";
import { PubCardLarge, PubCardSmall } from "./PubCard";
import React from "react";
import { publications } from "../Constants/publications";
import {useMediaQuery} from "@mui/material";

const PublicationRoute = () => {
  const small = useMediaQuery("(max-width:1000px)");

  return (
    <div className="publication-route-wrapper">
      <h1>Research and Publications</h1>
      <div style={{ margin: "2rem 0" }}>
        <Grid container spacing={4}>
          {publications.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {small ? (
                  <PubCardSmall pub={item} key={item.image} />
                ) : index % 2 === 0 ? (
                  <PubCardLarge pub={item} key={item.image} align={true} />
                ) : (
                  <PubCardLarge pub={item} key={item.image} />
                )}
              </React.Fragment>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default PublicationRoute;
