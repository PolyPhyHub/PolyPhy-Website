import { Grid, Box, LinearProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import TeamCard from "../Components/TeamCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Papa from "papaparse";

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
  };

  const getContributors = (repo, setList) => {
    axios(repo)
      .then(function (response) {
        response.data.sort((a, b) =>
          a.contributions > b.contributions
            ? 1
            : b.contributions > a.contributions
            ? -1
            : 0
        );
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getContributors(repo1, setList1);
    getContributors(repo2, setList2);
    // eslint-disable-next-line
  }, []);

  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRlC9kNSo6wp7dtvB5ipj7Va6AEUE4RKTH9MrCUEirGdB1OODZTG1udReTmHSWwWqtVIg0NgFowagVU/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          console.log(results.data);
          setData1(results.data);
        },
      }
    );
  }, []);

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAVbKeZJCNoQwyZdAlHNpVdE3zBLG244MdxnanmrP4VMNRs6aOQlALQoQiDb-PM01qkcEZoiQIXO_H/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          console.log(results.data);
          setData2(results.data);
        },
      }
    );
  }, []);

  const teamArray = Array.from(data1);
  const sigContriArray = Array.from(data2);

  return (
    <div className="team-route-wrapper">
      <h1>Minds behind PolyPhy</h1>
      <div style={{ margin: "4rem 0 2rem 0" }}>
        <h2>Current Stakeholders</h2>
        <Grid container spacing={3} justifyContent="center">
          {teamArray.length > 0 ? (
            teamArray.map((x) => {
              return <TeamCard x={x} key={x.name} />;
            })
          ) : (
            <Box sx={{ width: "100px", marginTop: "2rem" }}>
              <LinearProgress />
            </Box>
          )}
        </Grid>
      </div>
      <div style={{ margin: "4rem auto 2rem auto", maxWidth: "700px" }}>
        <h2>Significant Contributors</h2>
        {sigContriArray.length > 0 ? (
          sigContriArray.map((x) => {
            return (
              <div className="sig-contri" key={x.name}>
                <p>{x.name}</p>
                <a href={x.link}>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            );
          })
        ) : (
          <Box sx={{ width: "100px", marginTop: "2rem" }}>
            <LinearProgress />
          </Box>
        )}
      </div>
      <div style={{ margin: "4rem auto 2rem auto", maxWidth: "1200px" }}>
        <h2>GitHub Contributors</h2>
        <p style={{ textAlign: "center" }}>PolyPhy Project Repository</p>
        <div className="github-contributor-wrapper">
          {list1
            ?.map((x) => {
              return x.contributions >= 3 ? (
                <a href={`https://github.com/${x.login}`} key={x.id}>
                  <div className="github-contributor">
                    <img src={x.avatar_url} alt=""></img>
                    <p>{x.login}</p>
                  </div>
                </a>
              ) : null;
            })
            .reverse()}
        </div>
        <p style={{ textAlign: "center" }}>PolyPhy Website Repository</p>
        <div className="github-contributor-wrapper">
          {list2
            ?.map((x) => {
              return x.contributions >= 3 ? (
                <a href={`https://github.com/${x.login}`} key={x.id}>
                  <div className="github-contributor">
                    <img src={x.avatar_url} alt=""></img>
                    <p>{x.login}</p>
                  </div>
                </a>
              ) : null;
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default TeamRooute;
