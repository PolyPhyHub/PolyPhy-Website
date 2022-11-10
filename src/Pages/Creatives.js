import { Grid } from "@mui/material";
import React from "react";
// import { creatives } from "../Constants/creatives";
import CreativeCard from "../Components/CreativeCard";
import { useEffect, useState } from "react";
import Papa from "papaparse";

const Creatives = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vR6GsZkCkgoc2GfqRqd5na-IY0eDGhGLQP-eKmOW9MHi_rcBMhK11GIw3VMB9Z9vvOHsJWMWXW-_WF_/pub?output=csv",
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

  const creativesArray = Array.from(data);

  return (
    <div className="publication-route-wrapper">
      <h1 style={{ textAlign: "center" }}>Creative</h1>
      <div style={{ margin: "2rem 0", minHeight: "100vh"}}>
        <Grid container spacing={4} justifyContent="center">
          {creativesArray.map((x) => {
            return <CreativeCard x={x} key={x.id} />;
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Creatives;
