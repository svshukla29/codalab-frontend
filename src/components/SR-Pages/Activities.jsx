import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";


const Activities = () => {
  const [items, setItems] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_ACTIVITIES_API_URL
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid #FCC54C",
          width: "76%",
          position: "relative",
          top: "-4.3%",
          left: "26%",
        }}
      />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          left: "32%",
          width: "88%",
          top: "-1%",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "86%",
            height: "200px",
            borderRadius: "4px",
            marginLeft: "-27%",
            bottom: "38px",
            position: "relative",
          }}
          src="https://i.ibb.co/XyL39SL/Whats-App-Image-2024-07-23-at-17-51-41.jpg "
        />
        <Typography
          sx={{
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "2rem",
            lineHeight: "1.9",
            bottom: "100px",
            position: "relative",
            fontWeight: "bold",
            right: "13%",
          }}
        >
          {" "}
          Activities
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFF8E1",
          borderBottom: "2px solid #FFC107",
          padding: "10px 16px",
          position: "relative",
          top: "-4%",
          right: "-26%",
          width: "76%",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "1.5rem",
          }}
        >
          Major Service In IIT Roorkee
        </Typography>
      </Box>
      <Box
        sx={{
          width: "76%",
          backgroundColor: "#d3d3d345",
          position: "relative",
          left: "26%",
          top: "-2%",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "1.5rem",
            fontFamily: "Abhaya Libre ExtraBold",
            padding: "3%",
            textAlign: "justify",
          }}
        >
          <ul style={{ padding: 0, margin: 0 }}>
            {items &&
              items["Major Services in IIT Roorkee"] &&
              items["Major Services in IIT Roorkee"].map((item, index) => (
                <li key={index}>{item.details}</li>
              ))}
          </ul>
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FFF8E1",
          borderBottom: "2px solid #FFC107",
          padding: "10px 16px",
          position: "relative",
          right: "-26%",
          width: "76%",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "1.5rem",
          }}
        >
          Professional Membership and Affiliation
        </Typography>
      </Box>
      <Box
        sx={{
          width: "76%",
          backgroundColor: "#d3d3d345",
          position: "relative",
          left: "26%",
          top: "2%",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "1.5rem",
            fontFamily: "Abhaya Libre ExtraBold",
            padding: "3%",
            textAlign: "justify",
          }}
        >
          <ul style={{ padding: 0, margin: 0 }}>
            {items &&
              items["Professional Memberships and Affiliations"] &&
              items["Professional Memberships and Affiliations"].map(
                (item, index) => <li key={index}>{item.details}</li>
              )}
          </ul>
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FFF8E1",
          borderBottom: "2px solid #FFC107",
          padding: "10px 16px",
          position: "relative",
          top: "4%",
          right: "-26%",
          width: "76%",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "1.5rem",
          }}
        >
          Outreach From Research Activities
        </Typography>
      </Box>
      <Box
        sx={{
          width: "76%",
          backgroundColor: "#d3d3d345",
          position: "relative",
          left: "26%",
          top: "6%",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "1.5rem",
            fontFamily: "Abhaya Libre ExtraBold",
            padding: "1%",
            textAlign: "justify",
            marginBottom: "40%",
          }}
        >
          <ul style={{ padding: 0, margin: 0 }}>
            {items &&
              items["Outreach From Research Activities"] &&
              items["Outreach From Research Activities"].map((item, index) => (
                <li key={index}>{item.details}</li>
              ))}
          </ul>
        </Typography>
      </Box>
    </>
  );
};

export default Activities;
