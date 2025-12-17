import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Announcements from "./Announcements";
import News from "./News";
import Activities from "./Activities";
import ContactMe from "./ContactMe";
import SRPublication from "./SRPublication";
import Project from "./Project";
import Award from "./Award";
import Teaching from "./Teaching";

const Homes = () => {
  const [currentView, setCurrentView] = useState("profile");
  const location = useLocation();
  const renderView = () => {
    switch (currentView) {
      case "Home" || "Announcements":
        return <Announcements />;
      case "news":
        return <News />;
      case "activities":
        return <Activities />;
      case "contact":
        return <ContactMe />;
      case "teaching":
        return <Teaching />;
      case "publications":
        return <SRPublication />;
      case "projects":
        return <Project />;
      case "awards":
        return <Award />;
      default:
        return <Announcements />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {location.pathname === "/SR_Profile" && (
        <Navbar setCurrentView={setCurrentView} />
      )}
      <Box
        sx={{
          width: "80%",
          marginLeft: "4%",
          position: "relative",
          marginTop: "5%",
        }}
      > 
        <Profile />
        {renderView()}
      </Box>
    </Box>
  );
};

export default Homes;
