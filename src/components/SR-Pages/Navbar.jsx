import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";

const Navbar = ({ setCurrentView }) => {
  const navItems = [
    { text: "Home", view: "Announcements" },
    { text: "Teaching", view: "teaching" },
    { text: "Publications", view: "publications" },
    { text: "Projects", view: "projects" },
    { text: "Awards and Honours", view: "awards" },
    { text: "Activities", view: "activities" },
    { text: "For Prospective Students", view: "news" },
    { text: "Contact", view: "contact" },
  ];

  return (
    <Box
      sx={{
        width: "20%",
        position: "fixed",
        right: "79%",
        top: "12%",
        zIndex: 1000,
      }}
    >
      <List>
        {navItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => setCurrentView(item.view)}
          >
            <ListItemIcon>
              <Box
                component="img"
                src="https://img.icons8.com/FCC54C/ios11/2x/ios-photos.png"
                alt={item.text}
                sx={{ width: "20px", height: "20px" }}
              />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
