import React from 'react';
import DetailsJournals from '../DetailsJournals';
import DetailsConference from '../DetailsConference'
import DetailsWorkshop from "../DetailsWorkshop";
import DetailsOfUSandIndianPatentsGranted from '../DetailsOfUSandIndianPatentsGranted';
import DetailsOfUSandIndianPatentsFiled from "../DetailsOfUSandIndianPatentsFiled";
import DetailsBooks from '../DetailsBooks';
import { useState, useEffect } from 'react';

export default function SRPublication() {
     const [item, setItems] = useState({});
     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch(
            import.meta.env.VITE_SRPUBLICATION_API_URL
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
    <div
      style={{
        width: "84%",
        display: "flex",
        justifyContent: "center",
        marginLeft: "20%",
        marginTop: "-9%",
      }}
    >
      <div style={{ width: "90%", maxWidth: "1200px" }}>
        <div
          className="my-4 d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <img
            className="position-relative rounded-4"
            src="https://i.ibb.co/SBq6W0F/public.jpg"
      
            style={{
              width: "100%",
              height: "250px",
              background: "linear-gradient(180deg, #F0EDEC 0%, #B5DFF3 100%)",
              objectFit: "cover",
            }}
            alt="Header Background"
          />
          <h1
            style={{
              position: "absolute",
              top: "85%",
              left: "50%",
              transform: "translate(-50%, -50%)",
             
            }}
          >
            Publications
          </h1>
        </div>
        <div
          className="my-4 d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
          <p style={{ margin: "0 10px" }}>
            <b>Book and Book Chapter</b>
          </p>
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
        </div>
        <div
          style={{
            background: "rgb(253, 246, 230)",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          {item &&
            item.arrayOfBooks &&
            item.arrayOfBooks.map((journals, index) => (
              <DetailsBooks
                key={journals._id}
                {...journals}
                size={item.arrayOfBooks.length - index}
              />
            ))}
        </div>
        <div
          className="my-4 d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
          <p style={{ margin: "0 10px" }}>
            <b>Journal Publications</b>
          </p>
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
        </div>
        <div
          style={{
            background: "rgb(253, 246, 230)",
            padding: "30px",
            borderRadius: "8px",
          }}
        >
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
        <div
          className="my-4 d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
          <p style={{ margin: "0 10px" }}>
            <b>US and Indian Patents Granted</b>
          </p>
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
        </div>
        <div
          style={{
            background: "rgb(253, 246, 230)",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          {item &&
            item.arrayOfGrantedPatents &&
            item.arrayOfGrantedPatents.map((journals, index) => (
              <DetailsOfUSandIndianPatentsGranted
                key={journals._id}
                {...journals}
                size={item.arrayOfGrantedPatents.length - index}
              />
            ))}
        </div>
        <div
          className="my-4 d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
          <p style={{ margin: "0 10px" }}>
            <b>US and Indian Patents Filed</b>
          </p>
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
        </div>
        <div
          style={{
            background: "rgb(253, 246, 230)",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          {item &&
            item.arrayOfFiledPatents &&
            item.arrayOfFiledPatents.map((journals, index) => (
              <DetailsOfUSandIndianPatentsFiled
                key={journals._id}
                {...journals}
                size={item.arrayOfFiledPatents.length - index}
              />
            ))}
        </div>
        <div
          className="my-4 "
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
          <p style={{ margin: "0 10px" }}>
            <b>Conferences</b>
          </p>
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
        </div>
        <div
          style={{
            background: "rgb(253, 246, 230)",
            padding: "20px 8px",
            borderRadius: "8px",
          }}
        >
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
        <div
          className="my-4 d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
          <p style={{ margin: "0 10px" }}>
            <b>Workshop</b>
          </p>
          <div
            style={{ flexGrow: 1, height: "1px", background: "#FCC54C" }}
          ></div>
        </div>
        <div
          style={{
            background: "rgb(253, 246, 230)",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "9%",
          }}
        >
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
    </div>
  );
}

