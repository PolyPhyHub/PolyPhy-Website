import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
// import InfoIcon from '@mui/icons-material/Info';
import useMediaQuery from "@mui/material/useMediaQuery";

const Visualizations = () => {
  const mobile = useMediaQuery("(max-width:700px)");

  return (
    <div className="vis-container">
      <h1 style={{ textAlign: "center" }}>Visualisations</h1>
      <div className="image-list1">
        <ImageList sx={{ width: "100%" }} cols={!mobile ? 2 : 1} gap={20}>
          {itemData1.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?h=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    {/* <InfoIcon /> */}
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default Visualizations;

const itemData1 = [
  {
    img: "https://github.com/CreativeCodingLab/Polyphorm/raw/master/docs/mode_particles.png",
    title: "Particle mode",
  },
  {
    img: "https://github.com/CreativeCodingLab/Polyphorm/raw/master/docs/mode_trace.png",
    title: "Trace mode",
  },
  {
    img: "https://github.com/CreativeCodingLab/Polyphorm/raw/master/docs/mode_segmentation.png",
    title: "Overdensity mode",
  },
  {
    img: "https://github.com/CreativeCodingLab/Polyphorm/raw/master/docs/mode_combined.png",
    title: "Highlights mode",
  },
];
