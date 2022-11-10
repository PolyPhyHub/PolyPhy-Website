import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
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
          {opportunityArray.map((x) => {
            return (
              <Grid item xs={12} sm={6}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3>{x.title}</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>{x.description}</p>
                    <p><a href="/"> I'm interested! </a></p>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Opportunities;
