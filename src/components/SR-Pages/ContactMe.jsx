import React, { useState } from "react";
import ContactCard from "./ContactCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
} from "@mui/material";

const ContactMe = () => {
  const [addressType, setAddressType] = useState("mailing");

  const handleAddressTypeChange = (type) => {
    setAddressType(type);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        autoClose: 3000, // Close the notification after 3 seconds
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
        phoneNumber: "",
        description: "",
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
          width: "80%",
          top: "-1%",
        }}
      >
        <Box
          sx={{
            width: "79%",
            height: "150px",
            backgroundColor: "rgba(255, 233, 184, 0.42)",
            margin: "30px -20px 4px 8px",
            position: "relative",
            bottom: "65px",
            left: "-8%",
          }}
        ></Box>
        <Box
          component="img"
          src="https://i.ibb.co/TMYnNYp/contact.jpg"
          sx={{
            width: "81%",
            height: "200px",
            borderRadius: "4px",
            marginLeft: "-27%",
            bottom: "184px",
            position: "relative",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "2rem",
            lineHeight: "1.9",
            bottom: "243px",
            position: "relative",
            fontWeight: "bold",
            right: "15%",
            color:"#fff"
          }}
        >
          {" "}
          How To Reach?{" "}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "Abel",
          fontSize: "1.4rem",
          top: "-7%",
          position: "relative",
          width: "73%",
          right: "-28%",
        }}
      >
        {" "}
        You can get in touch with Dr. Sudip Roy in many ways. Check this page to
        see which contact information is relevant to you.
      </Typography>
      <ContactCard />
      <Box
        sx={{
          padding: "20px",
          position: "relative",
          bottom: "4%",
          right: "-28%",
          width: "68%",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontFamily: "Abhaya Libre ExtraBold",
            fontSize: "1.4rem",
            fontWeight: "bold",
          }}
        >
          For More Details
        </Typography>
        <Box
          sx={{
            borderBottom: "1px solid #FCC54C",
            width: "107%",
            marginBottom: "20px",
          }}
        />
      </Box>

      <Container
        className="form-container"
        sx={{
          backgroundColor: "#FFF8E1",
          borderRadius: "7px",
          width: "55%",
          padding: "1rem",
          border: "1px solid #FCC54C",
          marginRight: "8%",
          bottom: "100px",
          position: "relative",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "0.5rem", backgroundColor: "#ffff" }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "0.5rem", backgroundColor: "#ffff" }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            type="email"
            sx={{ marginBottom: "0.5rem", backgroundColor: "#ffff" }}
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            type="tel"
            sx={{ marginBottom: "0.5rem", backgroundColor: "#ffff" }}
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            sx={{ marginBottom: "0.5rem", backgroundColor: "#ffff" }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#FFB74D",
              ":hover": { backgroundColor: "#FFA726" },
              width: "fit-content",
            }}
          >
            Submit
          </Button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </>
  );
};

export default ContactMe;
