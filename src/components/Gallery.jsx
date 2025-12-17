

import React, { useState, useEffect } from "react";

const Gallery = () => {   
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
            import.meta.env.VITE_GALLERY_API_URL
        );
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="gallery-container">
      <div
        style={{
          width: "79%",
          height: "150px",
          backgroundColor: "#d9d9d945",
          margin: "125px -246px 4px 8px",
          position: "relative",
          bottom: "65px",
          left: "-10%",
        }}
      ></div>
       
      
      <img
       src="https://i.ibb.co/bdnRDXW/Memories.jpg"
        style={{
          width: "81%",
          height: "200px",
          borderRadius: "9px",
          marginLeft: "13%",
          bottom: "184px",
          position: "relative",
        }}
        alt="Header background"
      />
    
      <div
        style={{
          fontFamily: "Abhaya Libre ExtraBold",
          fontSize: "2rem",
          lineHeight: "1.9",
          bottom: "243px",
          position: "relative",
          fontWeight: "bold",
          right: "-8%",
          color:"#fff"
        }}
      >
        Memories
      </div>
      <div className="card-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${item.urlToImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="card-content">
              <h3>{item.photo_caption}</h3>
              {/* <h4>News Description</h4> */}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .gallery-container {
          max-width: 1200px;
          margin: 50px auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .memories-header {
          background-color: #d9d9d945;
          padding: 20px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .card-container {
          display: grid;
          grid-template-columns: repeat(3, 300px);
          gap: 20px;
          margin-left: 12%;
          margin-top:-16%;  
        }
        .card {
          text-align: center;
          border-radius: 10px;
          box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.07);
          overflow: hidden;
          background-color: white;
        }
        .card-image {
          height: 150px;
          background: linear-gradient(to bottom, #ff7563, #b5dff3);
          margin: 8px;
          border-radius: 10px;
        }
        .card-content {
          padding: 15px;
        }
        .card-content h3 {
          margin: 10px 0;
          font-size: 1.2em;
          color: #333;
        }
        @media only screen and (max-width: 768px) {
          .card-container {
            grid-template-columns: repeat(2, 300px);
          }
        }
        @media only screen and (max-width: 480px) {
          .card-container {
            grid-template-columns: repeat(1, 300px);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;