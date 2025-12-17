import React from "react";
import Imagepage from "./ImagePage";
import Event from "./Event";
import Slideimage from "./Slideimage";
import Vision from "./Vision";
import News from "./News";
import Para from "./Para";

const Home = () => {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div
        className="content"
        style={{
          marginLeft: "15%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Imagepage />
        <Para />
        <Slideimage />
        <Vision />
        <News />
        <Event />
      </div>
    </div>
  );
};

export default Home;
