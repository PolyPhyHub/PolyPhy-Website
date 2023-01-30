import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Papa from "papaparse";

const Opportunities = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTr0EqNy0pSDiesAYjvjk4pBdF4uta1xzySW6GddS_BCrxF9SD3NMg66JtS2t8vWgYKcBTq2qQnFLSc/pub?output=csv",
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

  const opportunityArray = Array.from(data);

  return (
    <div className="publication-route-wrapper">
      <h1>Opportunities</h1>
      <div className="opportunities-content">
        <Grid container spacing={4}>
          {opportunityArray.length > 0 ? (
            opportunityArray.map((x, y) => {
              return (
                <Grid item xs={12} sm={12} md={6} key={y}>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <h3>{x.title}</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>{x.description}</p>
                      <p style={{ textAlign: "right" }}>
                        <a href={x.link}> I'm interested! </a>
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              );
            })
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "4rem",
                marginBottom: "2rem",
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

export default Opportunities;
