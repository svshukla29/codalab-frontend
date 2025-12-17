import React from "react";
import { useState, useEffect } from "react";
import DetailsJournals from "./DetailsJournals";
import DetailsConference from "./DetailsConference";
import DetailsWorkshop from "./DetailsWorkshop";
import DetailsOfUSandIndianPatentsGranted from "./DetailsOfUSandIndianPatentsGranted";
import DetailsOfUSandIndianPatentsFiled from "./DetailsOfUSandIndianPatentsFiled";

const Publications = () => {

   const [item, setItems] = useState({})
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(
          import.meta.env.VITE_PUBLICATION_API_URL
         );
         const data = await response.json();
         setItems(data);
         console.log(data);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };

    fetchData();
   }, []);
  return (
    <div>
      <style>
        {`
          body {
            font-family: Abhya Libre Bold;
          } 
          .publication-container1 {
            margin-top: -1%;
          }

          .publication-container {
            margin-top: 28%;
          }

          .publication-container2 {
            margin-top: -1%;
          }
            .publication-container3 {
            margin-top: -1%;
          }
            .publication-container4 {
            margin-top: -1%;
          }
        
          .journal1 {
            background-color: rgba(252, 196, 76, 0.44);
            margin: 2%;
            margin-left: 24%;
            width: 67.5%;
          } 
          .journal1 h4 {
            padding: 12px;
          }
        
          .pcontainer {
            width: 67.5%;
            margin-left: 25%;
            padding: 20px;
          }
        
          .publication-year {
            margin-left: 25%;
            border: 2px solid #f4b400;
            padding: 5px 20px;
            margin-bottom: 50px;
            font-weight: bold;
            font-size: 18px;
            margin-top: 50%;
          }
        
          .publication {
            display: flex;
            margin-bottom: 2px;
          }
        
          .publication-number {
            font-weight: bold;
            margin-right: 10px;
          }
        
          .publication-details {
            flex: 1;
          }   
          .authors1 p,
          .authors2 p {
            margin: 5px 0;
          }
        
          @media (max-width: 600px) {
            .container {
              padding: 10px;
            }
          
            .publication-year {
              padding: 5px;
            }
          
            .publication-title {
              font-size: 14px;
            }
          }
        `}
      </style>

      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          left: "23%",
          width: "80%",
          top: "25%",
        }}
      >
        <div
          style={{
            width: "79%",
            height: "150px",
            backgroundColor: "#d9d9d945",
            margin: "30px -20px 4px 8px",
            position: "relative",
            bottom: "65px",
            left: "-10%",
          }}
        ></div>
        <img
          style={{
            width: "81%",
            height: "200px",
            borderRadius: "9px",
            marginLeft: "-10%",
            bottom: "184px",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          src="https://i.ibb.co/SBq6W0F/public.jpg"
        />
        <div
          style={{
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "2rem",
            lineHeight: "1.9",
            bottom: "243px",
            position: "relative",
            fontWeight: "bold",
            right: "4%",
          }}
        >
          Publication
        </div>
      </div>

      <div className="publication-container">
        <div className="journal1">
          <h4>Journal Publication</h4>
        </div>
        {item &&
          item.arrayOfJournals &&
          item.arrayOfJournals.map((journals, index) => (
            <DetailsJournals
              key={journals._id}
              {...journals}
              size={item.arrayOfJournals.length - index}
            />
          ))}
      </div>

      <div className="publication-container2">
        <div className="journal1">
          <h4>Conference Proceeding Publication</h4>
        </div>
        <div style={{ marginLeft: "23%", width: "69vw" }}>
          {item &&
            item.arrayOfConference &&
            item.arrayOfConference.map((Conference, index) => (
              <DetailsConference
                key={Conference._id}
                {...Conference}
                size={item.arrayOfConference.length - index}
              />
            ))}
        </div>
        <div className="publication-container2">
          <div className="journal1">
            <h4>Workshop And Forum Presentations</h4>
          </div>

          <div style={{ marginLeft: "23%", width: "69vw" }}>
            {item &&
              item.arrayOfWorkshops &&
              item.arrayOfWorkshops.map((Workshops, index) => (
                <DetailsWorkshop
                  key={Workshops._id}
                  {...Workshops}
                  size={item.arrayOfWorkshops.length - index}
                />
              ))}
          </div>
        </div>
        <div className="publication-container2">
          <div className="journal1">
            <h4>Us And Indain Patents Granted</h4>
          </div>

          <div style={{ marginLeft: "23%", width: "69vw" }}>
            {item &&
              item.arrayOfGrantedPatents &&
              item.arrayOfGrantedPatents.map((Patents, index) => (
                <DetailsOfUSandIndianPatentsGranted
                  key={Patents._id}
                  {...Patents}
                  size={item.arrayOfGrantedPatents.length - index}
                />
              ))}
          </div>
          <div className="publication-container2">
            <div className="journal1">
              <h4>Us And Indain Patents Filed</h4>
            </div>

            <div
              style={{ marginLeft: "23%", width: "69vw", marginBottom: "7%" }}
            >
              {item &&
                item.arrayOfFiledPatents &&
                item.arrayOfFiledPatents.map((Patents, index) => (
                  <DetailsOfUSandIndianPatentsFiled
                    key={Patents._id}
                    {...Patents}
                    size={item.arrayOfFiledPatents.length - index}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
