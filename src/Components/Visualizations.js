import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { viz } from "../Constants/vis";

const Visualizations = () => {
  const mobile = useMediaQuery("(max-width:700px)");

  return (
    <div className="vis-container">
      <h1 style={{ textAlign: "center" }}>Visualizations</h1>
      <div className="image-list1">
        <ImageList sx={{ width: "100%" }} cols={!mobile ? 2 : 1} gap={20}>
          {viz.map((item) => (
            <div key={item.img}>
              <ImageListItem>
                <img
                  src={`${item.img}?h=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar title={item.title} />
              </ImageListItem>
              <p style={{ marginTop: "10px" }}>{item.description}</p>
            </div>
          ))}
        </ImageList>
      </div>
      <div className="download">
        <p>Explore other functions &gt;</p>
      </div>
    </div>
  );
};

export default Visualizations;
