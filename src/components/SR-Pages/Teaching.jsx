import React from "react";
import { Link, Element } from "react-scroll";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";


export default function Teaching() {
  const [item, setItems] = useState([]);
  const [item1, setItems1] = useState([]);
  const date = new Date();
  const month = date.getMonth();
  var check  = false;
  if (month > 5){
    check = true;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_SPRING_API_URL
        );
        const response1 = await fetch(
          import.meta.env.VITE_AUTUMN_API_URL
        );
        const data = await response.json();
        const data1 = await response1.json();
        setItems(data);
        console.log(data);
        setItems1(data1);
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
        marginBottom: "8%",
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
        </div>
        <div
          style={{
            position: "relative",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <img
            loading="lazy"
            className="position-relative rounded-4"
            src="https://i.ibb.co/XyL39SL/Whats-App-Image-2024-07-23-at-17-51-41.jpg "
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
              color: "#fff",
            }}
          >
            Teaching
          </h1>
        </div>
        <nav
          style={{
            display: "flex",
            justifyContent: "start",
            columnGap: "10px",
            marginBottom: "10px",
          }}
        >
          <Button
            style={{ padding: "10px", cursor: "pointer", color: "black" }}
          >
            <Link to="spring" spy={true} smooth={true} duration={100}>
              Spring
            </Link>
          </Button>
          <Button
            style={{ padding: "10px", cursor: "pointer", color: "black" }}
          >
            <Link to="autumn" spy={true} smooth={true} duration={100}>
              Autumn
            </Link>
          </Button>
        </nav>
        <div>
          <div
            className="my-1 d-flex"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              background: "#FFE9B8",
            }}
          >
            <p style={{ margin: "0 10px" }}>
              <b>Current Teachings</b>
            </p>
          </div>
          <div
            style={{
              flexGrow: 1,
              height: "1px",
              background: "#FCC54C",
              marginBottom: "10px",
            }}
          ></div>
        </div>
        <Element name="spring">
          <div
            style={{
              background: "rgb(243 242 242)",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <ul>
              <li>
                <p style={{ marginBottom: "0px" }}>
                  <b>{check ? "Autumn" : "Spring"}</b>
                </p>
              </li>
              <li>
                <p style={{ marginBottom: "0px" }}>
                  {!check && item.length > 0 && item[0].year
                    ? `${item[0].year}`
                    : ""}
                  {check && item1.length > 0 && item1[0].year
                    ? `${item1[0].year}`
                    : ""}
                </p>
                {!check &&
                  item &&
                  item[0] &&
                  item[0].courses &&
                  item[0].courses.map((course, idx) => (
                    <div style={{ marginBottom: "0px" }} key={idx}>
                      <span>{course.subjectCode}</span>: {course.subjectName}
                      {course.additionalInfo && (
                        <span> ({course.additionalInfo})</span>
                      )}
                      <div style={{ marginBottom: "0px" }}>
                        {course.studentsStrength && (
                          <p
                            style={{ marginBottom: "0px" }}
                          >{`Student Strength:  ${course.studentsStrength}`}</p>
                        )}
                      </div>
                    </div>
                  ))}
                {check &&
                  item1 &&
                  item1[0] &&
                  item1[0].courses &&
                  item1[0].courses.map((course, idx) => (
                    <div style={{ marginBottom: "0px" }} key={idx}>
                      <span>{course.subjectCode}</span>: {course.subjectName}
                      {course.additionalInfo && (
                        <span> ({course.additionalInfo})</span>
                      )}
                      <div style={{ marginBottom: "0px" }}>
                        {course.studentsStrength && (
                          <p
                            style={{ marginBottom: "0px" }}
                          >{`Student Strength:  ${course.studentsStrength}`}</p>
                        )}
                      </div>
                    </div>
                  ))}
              </li>
            </ul>
          </div>
        </Element>
        <div
          className="my-4 d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{ flexGrow: 1, height: "3px", background: "#FCC54C" }}
          ></div>
          <p style={{ margin: "0 10px" }}>
            <b>Past Teaching Experience</b>
          </p>
          <div
            style={{ flexGrow: 1, height: "3px", background: "#FCC54C" }}
          ></div>
        </div>
        <div>
          <div
            className="my-1 d-flex"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              background: "#FFE9B8",
            }}
          >
            <p style={{ margin: "0 10px" }}>
              <b>Spring semester</b>
            </p>
          </div>
          <div
            style={{
              flexGrow: 1,
              height: "1px",
              background: "#FCC54C",
              marginBottom: "10px",
            }}
          ></div>
        </div>
        <div
          style={{
            background: "rgb(243 242 242)",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <ul>
            {item &&
              item.map((item, index) => (
                <div key={index}>
                  <ul style={{ marginBottom: "5px", marginLeft: "-30px" }}>
                    <li>
                      <b>{item.year}</b>
                    </li>
                    {item &&
                      item.courses.map((course, idx) => (
                        <p style={{ marginBottom: "0px" }} key={idx}>
                          <span>{course.subjectCode}</span>:{" "}
                          {course.subjectName}
                          {course.additionalInfo && (
                            <span> ({course.additionalInfo})</span>
                          )}
                          {course.studentsStrength && (
                            <p
                              style={{ marginBottom: "0px" }}
                            >{`Student Strength:  ${course.studentsStrength}`}</p>
                          )}
                        </p>
                      ))}
                  </ul>
                </div>
              ))}
          </ul>
        </div>
        <Element name="autumn">
          <div>
            <div
              className="my-1 d-flex"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                background: "#FFE9B8",
              }}
            >
              <p style={{ margin: "0 10px" }}>
                <b>Autumn Semester</b>
              </p>
            </div>
            <div
              style={{
                flexGrow: 1,
                height: "1px",
                background: "#FCC54C",
                marginBottom: "10px",
              }}
            ></div>
          </div>
          <div
            style={{
              background: "rgb(243 242 242)",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <ul>
              {item1 &&
                item1.map((item, index) => (
                  <div key={index}>
                    <ul style={{ marginBottom: "5px", marginLeft: "-30px" }}>
                      <li>
                        <b>{item.year}</b>
                      </li>
                      {item &&
                        item.courses.map((course, idx) => (
                          <p style={{ marginBottom: "0px" }} key={idx}>
                            <span>{course.subjectCode}</span>:{" "}
                            {course.subjectName}
                            {course.additionalInfo && (
                              <span> ({course.additionalInfo})</span>
                            )}
                            {course.studentsStrength && (
                              <p
                                style={{ marginBottom: "0px" }}
                              >{`Student Strength:  ${course.studentsStrength}`}</p>
                            )}
                          </p>
                        ))}
                    </ul>
                  </div>
                ))}
            </ul>
          </div>
        </Element>
      </div>
    </div>
  );
}
