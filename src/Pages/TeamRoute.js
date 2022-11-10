import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { sig_contri, team } from "../Constants/team";
import TeamCard from "../Components/TeamCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamRooute = () => {
  var axios = require("axios");
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);

  var repo1 = {
    method: "get",
    url: "https://api.github.com/repos/PolyPhyHub/PolyPhy/contributors",
  };

  var repo2 = {
    method: "get",
    url: "https://api.github.com/repos/PolyPhyHub/PolyPhy-Website/contributors",
  }

  const getContributors = (repo, setList) => {
    axios(repo)
    .then(function (response) {
      response.data.sort((a,b) => (a.contributions > b.contributions) ? 1 : ((b.contributions > a.contributions) ? -1 : 0));
      setList(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    getContributors(repo1, setList1);
    getContributors(repo2, setList2);
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
        <h2>GitHub Contributors</h2>
        <p style={{textAlign: "center"}}>PolyPhy Project Repository</p>
        <div className="github-contributor-wrapper">
          {list1?.map((x) => {
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
          <p style={{textAlign: "center"}}>PolyPhy Website Repository</p>
          <div className="github-contributor-wrapper">
          {list2?.map((x) => {
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
