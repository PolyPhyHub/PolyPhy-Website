import { Grid, Box, CircularProgress } from "@mui/material";
import { PubCardLarge, PubCardSmall } from "../Components/PubCard";
import React from "react";
// import { usecases } from "../Constants/usecases";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Papa from "papaparse";

const Tutorials = () => {
  const small = useMediaQuery("(max-width:1000px)");

  const [data, setData] = useState({});

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGU0VUHmG7J6QOvlQYSLaUgBpfrqVEYnvzw3jC8TwmyIrDdCZElZYi4XgrjE_a1bi_4rH4r-NOXCz_/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      }
    );
  }, []);

  const usecaseArray = Array.from(data);

  return (
    <div className="publication-route-wrapper">
      <h1>Tutorials</h1>
      <div style={{ margin: "2rem 0", minHeight: "100vh" }}>
        <Grid container spacing={4}>
          {usecaseArray.length > 0 ? (
            usecaseArray.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {small ? (
                    <PubCardSmall pub={item} type="tutorial" key={item.image} />
                  ) : index % 2 === 0 ? (
                    <PubCardLarge
                      pub={item}
                      type="tutorial"
                      key={item.image}
                      align={true}
                    />
                  ) : (
                    <PubCardLarge pub={item} type="tutorial" key={item.image} />
                  )}
                </React.Fragment>
              );
            })
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "4rem",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Tutorials;
