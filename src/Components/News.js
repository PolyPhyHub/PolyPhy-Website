import React, {useState} from "react";
import { TWITTER_API } from "../constants";

const News = () => {
  var axios = require("axios");
  const [tweets, setTweets] = useState([]);

  var config = {
    method: "get",
    url: "https://thingproxy.freeboard.io/fetch/https://api.twitter.com/2/users/1204853272583892992/tweets?exclude=replies&tweet.fields=created_at",
    headers: {
      Authorization: TWITTER_API},
  };

  axios(config)
    .then(function (response) {
      setTweets(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="news-wrapper">
      <h2>POLYPHY UPDATES</h2>
      {tweets.slice(0, 5).map((x) => {
        return (
          <a href={`https://twitter.com/polyphy/status/${x.id}`} key={x.id}>
            <div className="tweet">
              <p>{x.text.replace(/\bhttps\S+/gi, "")}</p>
              <span>
                {new Date(x.created_at).toLocaleString().split(",")[0]}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default News;
