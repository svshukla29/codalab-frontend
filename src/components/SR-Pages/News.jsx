import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fade,
  TextField,
  Divider,
  Button,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const News = () => {
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First Name is required";
    if (!formData.lastName) formErrors.lastName = "Last Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number is invalid";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all fields correctly.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const formDataObject = new FormData(e.target);
    formDataObject.append("access_key", "3eed4094-9572-4c17-8d3d-28b0bf807289");
    const object = Object.fromEntries(formDataObject);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("😊 Successfully Submitted!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } else {
      toast.error("Submission Failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          borderBottom: "1px solid #FCC54C",
          width: "76%",
          position: "relative",
          top: "-6.3%",
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
          left: "32%",
          width: "88%",
        }}
      >
        <Box
          sx={{
            width: "79%",
            height: "150px",
            backgroundColor: "rgba(255, 233, 184, 0.42)",
            margin: "30px -20px 4px 8px",
            position: "relative",
            bottom: "135px",
            left: "-8%",
          }}
        ></Box>
        <Box
          component="img"
          sx={{
            width: "81%",
            height: "200px",
            borderRadius: "4px",
            marginLeft: "-27%",
            bottom: "270px",
            position: "relative",
          }}
          src="https://i.ibb.co/XyL39SL/Whats-App-Image-2024-07-23-at-17-51-41.jpg "
        />
        <Typography
          sx={{
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "1.5rem",
            lineHeight: "1.9",
            bottom: "310px",
            position: "relative",
            fontWeight: "bold",
            right: "12%",
            color:'white'
          }}
        >
          Who can be a part of this community?
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "Abel",
          fontSize: "1.3rem",
          bottom: "309px",
          position: "relative",
          width: "70%",
          right: "-30%",
        }}
      >
        Welcome to our research lab, where innovation meets dedication. Our lab
        is committed to pushing the boundaries of computer science, focusing on
        both foundational core subjects and cutting-edge interdisciplinary
        domains. We are looking for passionate, driven, and curious students to
        join our team and contribute to groundbreaking research.
      </Typography>
      <Box
        sx={{
          padding: "20px",
          position: "relative",
          bottom: "15%",
          right: "-27%",
          width: "68%",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Research Domains
        </Typography>
        <Box
          sx={{
            borderBottom: "1px solid #FCC54C",
            width: "116%",
            marginBottom: "20px",
          }}
        />
        <Grid
          container
          spacing={2}
          sx={{
            marginLeft: "6px",
            marginTop: "-16px",
            width: "calc(109% + 16px)",
          }}
        >
          {[
            { name: "Algorithms", highlighted: false },
            { name: "Computer Architecture", highlighted: true },
            { name: "CAD", highlighted: false },
            { name: "Programming", highlighted: true },
            { name: "Discrete Mathematics", highlighted: false },
            { name: "EDA", highlighted: true },
            { name: "Data Structures", highlighted: false },
            { name: "Internet Of Things", highlighted: true },
          ].map((domain, index) => (
            <Grid item xs={3} key={index}>
              <Box
                sx={{
                  padding: "10px",
                  border: "1px solid #FCC54C",
                  borderRadius: "4px",
                  textAlign: "center",
                  backgroundColor: domain.highlighted
                    ? "#FCC54C"
                    : "transparent",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Abhaya Libre ExtraBold",
                    fontSize: "1.1rem",
                  }}
                >
                  {domain.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          padding: "14px",
          position: "relative",
          bottom: "15%",
          right: "-30%",
          width: "68%",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Explore Your Options
        </Typography>
        <Box
          sx={{
            borderBottom: "1px solid #FCC54C",
            width: "112%",
            marginBottom: "20px",
          }}
        />
      </Box>

      <div>
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
            "& .MuiAccordionDetails-root": {
              display: expanded ? "block" : "none",
            },
            bottom: "255px",
            right: "-31%",
            width: "73%",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              sx={{ fontFamily: "Abhaya Libre ExtraBold", fontSize: "1.3rem" }}
            >
              For Ph.D
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "rgba(255, 233, 184, 0.42)" }}
          >
            <Typography
              sx={{ fontFamily: "Abhaya Libre ExtraBold", fontSize: "1.3rem" }}
            >
              If you are highly motivated to do research and have a strong
              interest in core CSE subjects like algorithms and computer
              architecture (specifically, graph and geometric algorithms, CAD,
              and EDA), I would be delighted to consider you for PhD
              supervision. For admission to PhD in IITR, Click Here.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bottom: "255px", right: "-31%", width: "73%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography
              sx={{ fontFamily: "Abhaya Libre ExtraBold", fontSize: "1.3rem" }}
            >
              For M.Tech/B.Tech
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "rgba(255, 233, 184, 0.42)" }}
          >
            <Typography
              sx={{ fontFamily: "Abhaya Libre ExtraBold", fontSize: "1.3rem" }}
            >
              If you are an M.Tech or B.Tech student at IITR with a passion for
              algorithms, data structures, graph theory, discrete mathematics,
              computer architecture, and programming in C/C++/Perl/Python/Java,
              I am here to guide and mentor you in your research journey.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bottom: "255px", right: "-31%", width: "73%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography
              sx={{ fontFamily: "Abhaya Libre ExtraBold", fontSize: "1.3rem" }}
            >
              For Non IITR Students
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "rgba(255, 233, 184, 0.42)" }}
          >
            <Typography
              sx={{ fontFamily: "Abhaya Libre ExtraBold", fontSize: "1.3rem" }}
            >
              If you are a non - IITR student and have interests in algorithms,
              data structures, graph theory, discrete mathematics, computer
              architecture, and programming in C/C++/Perl/Python/Java, then
              follow summer internship program by IITR.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "rgba(255, 233, 184, 0.42)",
          padding: "20px",
          position: "relative",
          bottom: "11%",
          right: "-32%",
          width: "73%",
          border: "1px solid #FCC54C",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Get in Touch
        </Typography>
        <Box
          sx={{
            borderBottom: "1px solid #FCC54C",
            width: "100%",
            marginBottom: "20px",
          }}
        />
        <Grid container spacing={2}>
          {["firstName", "lastName", "email", "phone"].map((field) => (
            <Grid item xs={12} sm={6} key={field}>
              <TextField
                fullWidth
                label={field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                error={!!errors[field]}
                helperText={errors[field]}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: "20px", backgroundColor: "#FCC54C" }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default News;
