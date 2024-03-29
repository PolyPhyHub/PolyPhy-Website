import { CircularProgress, Grid, Box } from "@mui/material";
import { PubCardLarge, PubCardSmall } from "../Components/PubCard";
import React from "react";
// import { publications } from "../Constants/publications";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Papa from "papaparse";

const PublicationRoute = () => {
  const small = useMediaQuery("(max-width:1000px)");

  const [data, setData] = useState({});

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRrdzU_g3m6mRRt1nCvZGmlew16FgCjTjgKIpr9yhV4nqsECL0aHsEe55L_ol8r5PxlnMyrT4Ah_6hq/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      }
    );
  }, []);

  const publicationArray = Array.from(data);

  return (
    <div className="publication-route-wrapper">
      <h1>Research and Publications</h1>
      <div style={{ margin: "2rem 0", minHeight: "100vh" }}>
        <Grid container spacing={4}>
          {publicationArray.length > 0 ? (
            publicationArray.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {small ? (
                    <PubCardSmall pub={item} type="publication" key={item.image} />
                  ) : index % 2 === 0 ? (
                    <PubCardLarge pub={item} type="publication" key={item.image} align={true} />
                  ) : (
                    <PubCardLarge pub={item} type="publication" key={item.image} />
                  )}
                </React.Fragment>
              );
            })
          ) : (
            <Box sx={{ display: "flex", justifyContent:"center", width: "100%", marginTop: "4rem" }}>
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default PublicationRoute;
