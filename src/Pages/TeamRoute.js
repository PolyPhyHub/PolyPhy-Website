import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { sig_contri, team } from "../Constants/team";
import TeamCard from "../Components/TeamCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamRooute = () => {
  var axios = require("axios");
  const [contri, setContri] = useState([]);

  var config = {
    method: "get",
    url: "https://api.github.com/repos/numpy/numpy.org/contributors",
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        response.data.sort((a,b) => (a.contributions > b.contributions) ? 1 : ((b.contributions > a.contributions) ? -1 : 0));
        setContri(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

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
                <a href={process.env.PUBLIC_URL+"/"}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={process.env.PUBLIC_URL+"/"}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ margin: "4rem auto 2rem auto", maxWidth: "1200px" }}>
        <h2>Other Contributors</h2>
        <div className="github-contributor-wrapper">
          {contri?.map((x) => {
            return (
              x.contributions >= 3 ?
              <a href={`https://github.com/${x.login}`} key={x.id}>
                <div className="github-contributor">
                  <img src={x.avatar_url} alt=""></img>
                  <p>{x.login}</p>
                </div>
              </a> : null
            );
          }).reverse()}
        </div>
      </div>
    </div>
  );
};

export default TeamRooute;
