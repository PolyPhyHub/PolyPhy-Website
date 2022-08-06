import { Grid } from "@mui/material";
import React from "react";
import { sig_contri, team } from "../Constants/team";
import TeamCard from "./TeamCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamRooute = () => {
  return (
    <div className="team-route-wrapper">
      <h1>Minds behind PolyPhy</h1>
      <div style={{ margin: "4rem 0 2rem 0" }}>
        <h2>Current Stakeholders</h2>
        <Grid container spacing={3} justifyContent="center">
          {team.map((x) => {
            return <TeamCard x={x} key={x.name} />;
          })}
        </Grid>
      </div>
      <div style={{ margin: "4rem auto 2rem auto", maxWidth: "700px" }}>
        <h2>Significant Contributors</h2>
        {sig_contri.map((x) => {
          return (
            <div className="sig-contri" key={x.name}>
              <p>{x.name}</p>
              <div style={{ display: "flex" }}>
                <a href="/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamRooute;
