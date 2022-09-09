import React, { useState, useEffect } from "react";
import { TWITTER_API } from "../constants";

const News = () => {
  var axios = require("axios");
  const [tweets, setTweets] = useState([]);

  var config = {
    method: "get",
    // url: "https://thingproxy.freeboard.io/fetch/https://api.twitter.com/2/users/1204853272583892992/tweets?exclude=replies&tweet.fields=created_at",
    url: "https://api.twitter.com/2/users/1204853272583892992/tweets?exclude=replies&tweet.fields=created_at",
    headers: {
      Authorization: TWITTER_API,
    },
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setTweets(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      // eslint-disable-next-line
  }, []);

  function replaceURLs(message) {
    if (!message) return;

    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return message.replace(urlRegex, function (url) {
      var hyperlink = url;
      if (!hyperlink.match("^https?://")) {
        hyperlink = "http://" + hyperlink;
      }
      return (
        '<a style=color:#ff8400 href="' +
        hyperlink +
        '" target="_blank" rel="noopener noreferrer">' +
        "here" +
        "</a>"
      );
    });
  }

  // <a href={`https://twitter.com/polyphy/status/${x.id}`} >

  return (
    <div className="news-wrapper">
      <h2>POLYPHY UPDATES</h2>
      {tweets.slice(0, 5).map((x) => {
        return (
          <div className="tweet" key={x.id}>
            {/* <p>{x.text.replace(/\bhttps\S+/gi, "")}</p> */}
            <p dangerouslySetInnerHTML={{ __html: replaceURLs(x.text) }} />
            <span>{new Date(x.created_at).toLocaleString().split(",")[0]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default News;
