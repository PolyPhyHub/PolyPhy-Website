import { Grid } from "@mui/material";
import React from "react";
// import { publications } from "../Constants/publications";
import ButtonSwipe from "./ButtonSwipe";
import { PubCardSmall, PubCardLarge } from "./PubCard";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Papa from "papaparse";

const Publications = () => {
  const small = useMediaQuery("(max-width:1000px)");

  const [data, setData] = useState({});

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRrdzU_g3m6mRRt1nCvZGmlew16FgCjTjgKIpr9yhV4nqsECL0aHsEe55L_ol8r5PxlnMyrT4Ah_6hq/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          console.log(results.data);
          setData(results.data);
        },
      }
    );
  }, []);

  const publicationArray = Array.from(data);

  return (
    <div className="publications-wrapper">
      <h1>Publications and Case Studies</h1>
      <div style={{ margin: "2rem 0" }}>
        <Grid container spacing={4}>
          {publicationArray.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item.homepage === "TRUE" ? (
                  small ? (
                    <PubCardSmall pub={item} key={item.image} />
                  ) : index % 2 === 0 ? (
                    <PubCardLarge pub={item} key={item.image} align={true} />
                  ) : (
                    <PubCardLarge pub={item} key={item.image} />
                  )
                ) : null}
              </React.Fragment>
            );
          })}
        </Grid>
      </div>
      <ButtonSwipe link={process.env.PUBLIC_URL+"/research"}>Read more {">"}</ButtonSwipe>
    </div>
  );
};

export default Publications;
