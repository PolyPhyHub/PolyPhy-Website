import { Grid, Box, CircularProgress } from "@mui/material";
import { PubCardLarge, PubCardSmall } from "../Components/PubCard";
import React from "react";
// import { usecases } from "../Constants/usecases";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Papa from "papaparse";

const Usecases = () => {
  const small = useMediaQuery("(max-width:1000px)");

  const [data, setData] = useState({});

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTj_oHYtnb7xXNVwnqnQdMsAGMWgU86u3X7k4lStX5z3a_XUegElnIUybNo0AHhiodcGpu4T7h1Qqzy/pub?output=csv",
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
      <h1>Usecases and Experiments</h1>
      <div style={{ margin: "2rem 0", minHeight: "100vh" }}>
        <Grid container spacing={4}>
          {usecaseArray.length > 0 ? (
            usecaseArray.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {small ? (
                    <PubCardSmall pub={item} type="usecase" key={item.image} />
                  ) : index % 2 === 0 ? (
                    <PubCardLarge
                      pub={item}
                      type="usecase"
                      key={item.image}
                      align={true}
                    />
                  ) : (
                    <PubCardLarge pub={item} type="usecase" key={item.image} />
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

export default Usecases;
