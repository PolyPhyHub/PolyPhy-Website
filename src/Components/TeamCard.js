import { Grid } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ x }) => {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <div className="team-card">
        <img src={x.image} alt=""></img>
        <div className="team-content">
          <h3>{x.name}</h3>
          <p>{x.about}</p>
          <Grid container>
            <a href="/">
              <FontAwesomeIcon icon={faCode} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default TeamCard;
