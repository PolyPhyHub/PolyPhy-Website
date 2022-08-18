import { Grid } from "@mui/material";
import React from "react";
import { publications } from "../Constants/publications";
import ButtonSwipe from "./ButtonSwipe";
import { PubCardSmall, PubCardLarge } from "./PubCard";
import {useMediaQuery} from "@mui/material";

const Publications = () => {
  const small = useMediaQuery("(max-width:1000px)");

  return (
    <div className="publications-wrapper">
      <h1>Publications and Case Studies</h1>
      <div style={{ margin: "2rem 0" }}>
        <Grid container spacing={4}>
          {publications.slice(0,2).map((item, index) => {
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
      <ButtonSwipe link="/publications">Read more {">"}</ButtonSwipe>
    </div>
  );
};

export default Publications;
