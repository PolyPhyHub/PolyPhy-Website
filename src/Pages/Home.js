import React from 'react'
import Hero from '../Components/Hero'
import News from '../Components/News'
import About from '../Components/About'
import Publications from '../Components/Publications'
import { useEffect, useState } from "react";
import Papa from "papaparse";

const Home = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQX4cjkIjsgMiHIJy5ZwWlvjWtxGiU4VLi-v0thx9p7vsgVBbZnxxg0sTroChrwBOs39Z9go7m5sMjz/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      }
    );
  }, []);

  return (
    <div className="Home">
      <Hero data={data} />
      <News />
      <About data={data} />
      <Publications />
    </div>
  )
}

export default Home