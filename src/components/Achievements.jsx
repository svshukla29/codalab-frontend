import React from "react";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Achievements = () => {
  const [items, setItems] = useState([]);

  const formattedDate = (d) => {
    let date = new Date(d);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let month = monthNames[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    let ans = `${month}, ${day}, ${year}`;
    return ans;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_ACHIEVEMENTS_API_URL
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
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          left: "24%",
          width: "76%",
          marginTop: "11%",
        }}
      >
        <Box
          sx={{
            width: "79%",
            height: "150px",
            backgroundColor: "#d9d9d945",
            margin: "30px -20px 4px 8px",
            position: "relative",
            bottom: "65px",
            left: "-10%",
          }}
        ></Box>
        
        <Box
      component="img"
      src="https://i.ibb.co/f9dB1Cm/achievements.jpg"
      sx={{
        width: "81%",
        height: "200px",
        borderRadius: "4px",
        marginLeft: "-10%",
        bottom: "184px",
        position: "relative",
      }}
    />
        
      
        <Typography
          sx={{
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "2rem",
            lineHeight: "1.9",
            bottom: "257px",
            position: "relative",
            fontWeight: "bold",
            right: "4%",
            color:"#fff"
          }}
        >
          Achievements By Students
        </Typography>
      </Box>

      <Box
        sx={{
          width: "68%",
          backgroundColor: "#d3d3d34a",
          position: "relative",
          left: "25%",
          marginTop: "-11%",
          marginBottom: "7%",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "1.3rem",
            fontFamily: "Abhaya Libre ExtraBold",
            padding: "3%",
            textAlign: "justify",
          }}
        >
          <ul style={{ padding: 0, margin: 0 }}>
            {items.map((item, index) => (
              <li>
                "Jane Doe from the {item.department} department{" "}
                {item.achievement.title && item.achievement.title} which is
                organized by {item.achievement.organised_by} on{" "}
                {formattedDate(item.achievement.date)}.{" "}
                {item.achievement.additionalInfo}
              </li>
            ))}
          </ul>
        </Typography>
      </Box>
    </>
  );
};

export default Achievements;
