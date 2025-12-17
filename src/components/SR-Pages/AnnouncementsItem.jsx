import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
export default function AnnouncementsItem(props) {
  const dateObj = new Date(props.date);
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const dayOfWeek = weekdays[dateObj.getUTCDay()];
  const day = String(dateObj.getUTCDate()).padStart(2, "0");
  const month = months[dateObj.getUTCMonth()];
  const year = dateObj.getUTCFullYear();
  const modifyDate = `${dayOfWeek} ${day} ${month} ${year}`;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          right: "-30%",
          padding: "30px",
          width: "79%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            fontSize={20}
            sx={{ fontFamily: "Abhaya Libre ExtraBold" }}
          >
            {modifyDate}
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            fontSize={20}
            sx={{ fontFamily: "Abhaya Libre ExtraBold" }}
          >
            <ul style={{ padding: 0, margin: 0 }}>
              <li>{props.topicOfAnnouncement}</li>
            </ul>
          </Typography>
        </Box>
        <Button
          href={props.readMore}
          variant="contained"
          color="warning"
          sx={{ ml: "auto", fontFamily: "Abhaya Libre ExtraBold" }}
        >
          Read More
        </Button>
      </Box>
      <Divider
        sx={{
          display: "flex",
          position: "relative",
          right: "-31%",
           width: "76%"
        }}
      />
    </Box>
  );
}
