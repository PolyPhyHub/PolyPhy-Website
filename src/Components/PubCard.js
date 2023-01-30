import { Grid, Link, Paper } from "@mui/material";
import React from "react";

function getId(url) {
  // eslint-disable-next-line
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return "error";
  }
}

export const PubCardSmall = ({ pub, type }) => {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <div className="publication_card_small">
        <Paper variant="outlined">
          <h2>{pub.name}</h2>
          <p style={{ padding: "0 1rem" }}>
            <i>{pub.journal}</i>
          </p>
          {type === "tutorial" ? (
            <iframe
              width="100%"
              height="250"
              src={`https://www.youtube.com/embed/${getId(pub.video)}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ) : (
            <img src={pub.image} alt=""></img>
          )}

          <p className="brief">{pub.brief}</p>

          {type === "publication" ? (
            <p style={{ padding: "0.5rem 1rem" }}>
              <i>{pub.authors}</i>
            </p>
          ) : (
            <div className="detail-button">
              <Link
                href={
                  type !== "tutorial"
                    ? `https://elek.pub/projects/Rhizome-Cosmology/#${pub.id}`
                    : `${pub.video}`
                }
                target="_blank"
                rel="noreferrer"
                underline="none"
                color="inherit"
              >
                {type !== "tutorial" ? `See Details` : `See Video`}
              </Link>
            </div>
          )}
        </Paper>
      </div>
    </Grid>
  );
};

export const PubCardLarge = ({ pub, align, type }) => {
  return (
    <Grid item xs={12} sm={12}>
      <div className="publication_card_large">
        <Paper variant="outlined">
          <Grid container>
            {align ? (
              <>
                <Grid item xs={6} sm={6}>
                  <div className="image-container">
                    {type === "tutorial" ? (
                      <iframe
                        width="100%"
                        height="250"
                        src={`https://www.youtube.com/embed/${getId(pub.video)}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    ) : (
                      <div className="centered-image">
                        <img src={pub.image} alt="" />
                      </div>
                    )}
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <h2>{pub.name}</h2>
                  <p style={{ padding: "0 1rem" }}>
                    <i>{pub.journal}</i>
                  </p>
                  <p className="brief">{pub.brief}</p>
                  {type === "publication" ? (
                    <p style={{ padding: "0.5rem 1rem" }}>
                      <i>{pub.authors}</i>
                    </p>
                  ) : (
                    <div className="detail-button">
                      <Link
                        href={
                          type !== "tutorial"
                            ? `https://elek.pub/projects/Rhizome-Cosmology/#${pub.id}`
                            : `${pub.video}`
                        }
                        target="_blank"
                        rel="noreferrer"
                        underline="none"
                        color="inherit"
                      >
                        {type !== "tutorial" ? `See Details` : `See Video`}
                      </Link>
                    </div>
                  )}
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={6} sm={6}>
                  <h2>{pub.name}</h2>
                  <p style={{ padding: "0 1rem" }}>
                    <i>{pub.journal}</i>
                  </p>
                  <p className="brief">{pub.brief}</p>
                  {type === "publication" ? (
                    <p style={{ padding: "0.5rem 1rem" }}>
                      <i>{pub.authors}</i>
                    </p>
                  ) : (
                    <div className="detail-button">
                      <Link
                        href={
                          type !== "tutorial"
                            ? `https://elek.pub/projects/Rhizome-Cosmology/#${pub.id}`
                            : `${pub.video}`
                        }
                        target="_blank"
                        rel="noreferrer"
                        underline="none"
                        color="inherit"
                      >
                        {type !== "tutorial" ? `See Details` : `See Video`}
                      </Link>
                    </div>
                  )}
                </Grid>
                <Grid item xs={6} sm={6}>
                  <div className="image-container">
                    {type === "tutorial" ? (
                      <iframe
                        width="100%"
                        height="250"
                        src={`https://www.youtube.com/embed/${getId(pub.video)}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    ) : (
                      <div className="centered-image">
                        <img src={pub.image} alt="" />
                      </div>
                    )}
                  </div>
                </Grid>
              </>
            )}
          </Grid>
        </Paper>
      </div>
    </Grid>
  );
};
