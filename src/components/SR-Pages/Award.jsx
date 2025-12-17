import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";


const Award = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_AWARD_API_URL
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
          top: "-8%",
          left: "29%",
        }}
      />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          left: "36%",
          width: "80%",
          top: "-3%",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "91%",
            height: "200px",
            borderRadius: "4px",
            marginLeft: "-23%",
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
            right: "11%",
          }}
        >
          {" "}
          Awards and Honours
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#FFF8E1",
          borderBottom: "2px solid #FFC107",
          padding: "10px 16px",
          position: "relative",
          top: "-6%",
          right: "-30%",
          width: "74%",
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
          Awards and Fellowships
        </Typography>
      </Box>

      <Box
        sx={{
          width: "74%",
          backgroundColor: "#efececc9",
          position: "relative",
          left: "30%",
          top: "-5%",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "1.4rem",
            fontFamily: "Abhaya Libre ExtraBold",
            padding: "3%",
            textAlign: "justify",
          }}
        >
          <ul style={{ padding: 0, margin: 0 }}>
            {items &&
              items["Awards And Fellowships"] &&
              items["Awards And Fellowships"].map((item, index) => (
                <li key={index}>{item.additionalInfo}</li>
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
          top: "-2%",
          right: "-30%",
          width: "74%",
          marginBottom:"20px"
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "1.4rem",
          }}
        >
          Invited Talks
        </Typography>
      </Box>
      <Box
        sx={{
          width: "74%",
          backgroundColor: "#efececc9",
          position: "relative",
          left: "30%",
          top: "-2%",
          marginBottom: "5%",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "1.4rem",
            fontFamily: "Abhaya Libre ExtraBold",
            padding: "3%",
            textAlign: "justify",
          }}
        >
          <ul style={{ padding: 0, margin: 0 }}>
            {items &&
              items["Invited Talks"] &&
              items["Invited Talks"].map((item, index) => (
                <li key={index}>{item.additionalInfo}</li>
              ))}
          </ul>
        </Typography>
      </Box>
    </>
  );
};

export default Award;
