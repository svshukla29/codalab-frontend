import React, { useState, useEffect, createContext, useContext } from "react";
import PeopleItem from "./PeopleItem";
import {styled } from "@mui/material";
import DetailsPhD from "./DetailsPhD";
import DetailsMtech from "./DetailsMtech";
import DetailsInterns from "./DetailsInterns";
import DetailsBtech from './DetailsBtech'
import { useNavigate } from "react-router-dom";


export default function CodaPople() {
  const [items, setItems] = useState({ MTech: [], PhD: [] });
  const [items1, setItems1] = useState([{}, {}, {}]);
  const navigate = useNavigate();
  const CustomContainer = styled("div")({
    display: "inline-block",
    height: "38px",
    padding: "6px 20px",
    border: "2px solid #FFD700",
    borderRadius: "20px",
    backgroundColor: "#FFF8E1",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    color: "#333",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_STUDENTS_API_URL
        );
        const response1 = await fetch(
          import.meta.env.VITE_NEWSTUDENTS_API_URL
        );
        const data = await response.json();
        const data1 = await response1.json();
        setItems(data);
        setItems1(data1);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const goToSRProfile = () => {
    navigate("/SR_Profile");
  };
  return (
    <div
      className="container"
      style={{ paddingLeft: "13rem", marginTop: "5%" }}
    >
      <div className="image-container">
        <div
          className="bg-body-secondary position-absolute"
          style={{
            width: "66vw",
            margin: "30px -19px 16px 8px",
            height: "250px",
          }}
        ></div>
        
        <img
         className="position-relative rounded-4"
      src="https://i.ibb.co/XtCrG2K/people.jpg"
      style={{
        width: '66vw',
        marginLeft: '48px',
        marginTop: '67px',
        height: '250px',
      }}
      title="Google Drive Preview"
    ></img>

        <h1
          className="position-relative"
          style={{ marginLeft: "194px", marginTop: "-54px", color:"#fff" }}
        >
          Meet our faculty and students
        </h1>
      </div>
      <div className="container" style={{ width: "67vw" }}>
        <div
          className="my-3"
          style={{
            width: "69vw",
            background: "#FCC54C",
            marginLeft: "-6px",
            opacity: "10px",
            height: "30px",
          }}
        >
          <h5 className="mx-3">Faculty</h5>
        </div>
        <div className="my-2 ">
          <p style={{ marginBottom: "0" }}>
            <span
              onClick={goToSRProfile}
              className="h4"
              style={{ cursor: "pointer" }}
            >
              Sudip Roy
            </span>{" "}
            <small>(JSPS Fellow (2021-2022))</small>
          </p>
          <p style={{ marginBottom: "0" }}>
            Associate Professor,{" "}
            <a
              className="link-underline-dark text-dark"
              href="https://iitr.ac.in/Departments/Computer%20Science%20and%20Engineering%20Department/index.html"
            >
              Department of Computer Science and Engineering
            </a>
          </p>
          <p style={{ marginBottom: "0" }}>
            Joint Faculty,
            <a
              className="link-underline-dark text-dark"
              href="https://iitr.ac.in/Centres/Centre%20of%20Excellence%20in%20Disaster%20Mitigation%20and%20Management/Home.html"
            >
               Center of Excellence in Disaster Mitigation and Management
              (CoEDMM)
            </a>
          </p>
          <a
            className="link-underline-dark text-dark"
            href="https://www.iitr.ac.in/"
          >
            Indian Institute of Technology (IIT) Roorkee
          </a>
          <p style={{ marginBottom: "0" }}>
            Roorkee 247667, Uttarakhand, India
          </p>
        </div>
        <div
          className="my-3"
          style={{
            width: "69vw",
            background: "#FCC54C",
            marginLeft: "-6px",
            opacity: "10px",
            height: "30px",
          }}
        >
          <h5 className="mx-3" style={{ width: "100%" }}>
            Students List
          </h5>
        </div>

        <div
          className="my-4 d-flex"
          style={{ width: "69vw", marginLeft: "-6px", height: "30px" }}
        >
          <div
            style={{ width: "45vw", height: "3px", background: "#FCC54C" }}
          ></div>
          <p style={{ marginTop: "-9px", marginLeft: "6px", width: "14em" }}>
            <b>Current Students</b>
          </p>
          <div
            style={{ width: "45vw", height: "3px", background: "#FCC54C" }}
          ></div>
        </div>

        <div
          className="my-4 d-flex"
          style={{ width: "69vw", marginLeft: "-6px", height: "30px" }}
        >
          <CustomContainer>Ph.D Scholars</CustomContainer>
        </div>

        <div className="d-flex d-row">
          {items.PhD && (
            <>
              <div className="column">
                {items.PhD.filter((_, index) => index % 2 === 0).map((item) => (
                  <div key={item.studentId} className="item">
                    <PeopleItem
                      id={item.studentId}
                      image={item.urlToImage}
                      name={item.name}
                      subtitle={item.subtitle}
                      Area={`${item.areaOfInterest.substring(0, 104)}...`}
                    />
                  </div>
                ))}
              </div>
              <div className="column">
                {items.PhD.filter((_, index) => index % 2 !== 0).map((item) => (
                  <div key={item.studentId} className="item">
                    <PeopleItem
                      id={item.studentId}
                      image={item.urlToImage}
                      name={item.name}
                      subtitle={item.subtitle}
                      Area={`${item.areaOfInterest.substring(0, 104)}...`}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div
          className="my-4 d-flex"
          style={{ width: "69vw", marginLeft: "-6px", height: "30px" }}
        >
          <CustomContainer>M.Tech Students</CustomContainer>
        </div>

        <div className="d-flex">
          {items["M.Tech"] && (
            <>
              <div className="column">
                {items["M.Tech"]
                  .filter((_, index) => index % 2 !== 0)
                  .map((item) => (
                    <div key={item.studentId} className="item">
                      <PeopleItem
                        id={item.studentId}
                        image={item.urlToImage}
                        name={item.name}
                        subtitle={`M.Tech in ${item.domain}, ${item.graduatingYear}`}
                        Area={`${item.areaOfInterest.substring(0, 104)}...`}
                      />
                    </div>
                  ))}
              </div>
              <div className="column">
                {items["M.Tech"]
                  .filter((_, index) => index % 2 === 0)
                  .map((item) => (
                    <div key={item.studentId} className="item">
                      <PeopleItem
                        id={item.studentId}
                        image={item.urlToImage}
                        name={item.name}
                        subtitle={`M.Tech in ${item.domain}, ${item.graduatingYear}`}
                        Area={`${item.areaOfInterest.substring(0, 104)}...`}
                      />
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>

        <div
          className="my-4 d-flex"
          style={{ width: "69vw", marginLeft: "-6px", height: "30px" }}
        >
          <div
            style={{ width: "45vw", height: "3px", background: "#FCC54C" }}
          ></div>
          <p style={{ marginTop: "-9px", marginLeft: "6px", width: "16em" }}>
            <b>Graduated Students</b>
          </p>
          <div
            style={{ width: "45vw", height: "3px", background: "#FCC54C" }}
          ></div>
        </div>

        <div
          className="my-4 d-flex"
          style={{ width: "69vw", marginLeft: "-6px", height: "30px" }}
        >
          <CustomContainer>Ph.D Scholars</CustomContainer>
        </div>

        <div
          className="border border-warning"
          style={{ width: "69vw", background: "white", marginBottom: "30px" }}
        >
          <div>
            {items1 && items1[0] && items1[0]["PhD Scholar"] && (
              <ol className="my-3">
                {items1[0]["PhD Scholar"].map((item, index) => (
                  <DetailsPhD key={index} {...item} />
                ))}
              </ol>
            )}
          </div>
        </div>

        <div
          className="my-4 d-flex"
          style={{ width: "69vw", marginLeft: "-6px", height: "30px" }}
        >
          <CustomContainer>M.Tech Students</CustomContainer>
        </div>

        <div
          className="border border-warning"
          style={{
            width: "69vw",
            background: "rgb(239 239 239)",
            marginBottom: "30px",
          }}
        >
          <div>
            {items1 && items1[0] && items1[0]["PhD Scholar"] && (
              <ol className="my-3">
                {items1[1] &&
                  items1[1]["M.Tech"] &&
                  items1[1]["M.Tech"].map((item, index) => (
                    <DetailsMtech key={index} {...item} />
                  ))}
              </ol>
            )}
          </div>
        </div>
        <div
          className="my-4 d-flex"
          style={{ width: "69vw", marginLeft: "-6px", height: "30px" }}
        >
          <CustomContainer>B.Tech Students</CustomContainer>
        </div>

        <div
          className="border border-warning"
          style={{
            width: "69vw",
            background: "rgb(239 239 239)",
            marginBottom: "30px",
          }}
        >
          <div>
            {items1 && items1[0] && items1[0]["PhD Scholar"] && (
              <ol className="my-3">
                {items1[2] &&
                  items1[2]["B.Tech"] &&
                  items1[2]["B.Tech"].map((item, index) => (
                    <DetailsBtech key={index} {...item} />
                  ))}
              </ol>
            )}
          </div>
        </div>
        <div
          className="my-4 d-flex"
          style={{ width: "69vw", marginLeft: "-6px", height: "30px" }}
        >
          <div
            style={{ width: "45vw", height: "3px", background: "#FCC54C" }}
          ></div>
          <p style={{ marginTop: "-9px", marginLeft: "6px", width: "14em" }}>
            <b>Interned Students</b>
          </p>
          <div
            style={{ width: "45vw", height: "3px", background: "#FCC54C" }}
          ></div>
        </div>

        <div
          className="my-4 d-flex"
          style={{ width: "69vw", marginLeft: "-6px", height: "30px" }}
        >
          <CustomContainer>Interns</CustomContainer>
        </div>
        <div
          className="border border-warning"
          style={{ width: "69vw", background: "white", marginBottom: "9%" }}
        >
          <div>
            {items1 && items1[3] && items1[3]["Intern"] && (
              <ol className="my-3">
                {items1[3]["Intern"].map((item, index) => (
                  <DetailsInterns key={index} {...item} />
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
