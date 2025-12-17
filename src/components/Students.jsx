import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";
import PublicList from "./PublicList";

function Students() {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState("Overview");
  const [student, setStudent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_ST_API_URL}/${id}`
        );

        const data = await response.json();
        setStudent(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    if (!student) {
      return <p>Loading...</p>;
    }

    switch (activeSection) {
      case "Overview":
        return (
          <Box sx={{ marginTop: "20px", marginLeft: "14%", width: "84%" }}>
            <Typography
              variant="body1"
              style={{ width: "80%", marginLeft: "150px" }}
            >
              <p>{student.overview}</p>
            </Typography>
          </Box>
        );
      case "Research":
        return (
          <Box sx={{ marginTop: "20px", marginLeft: "14%", width: "84%" }}>
            <Typography
              variant="body1"
              style={{ width: "80%", marginLeft: "150px" }}
            >
              <p>{student.researches} </p>
            </Typography>
          </Box>
        );
      case "Contact":
        return (
          <Box
            sx={{
              marginTop: "38px",
              marginLeft: "17%",
              width: "84%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "row", // Adjusted flexDirection to row for horizontal alignment
              alignItems: "center",
              flexWrap: "wrap", // Added flexWrap to wrap content if necessary
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 2,
                marginRight: 2, // Added marginRight for spacing between boxes
              }}
            >
              <a
                title="Google, Public domain, via Wikimedia Commons"
                href="https://commons.wikimedia.org/wiki/File:Gmail_icon_(2020).svg"
              >
                <img
                  width="40"
                  alt="Gmail icon (2020)"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png?20221017173631"
                />
              </a>
              <Typography style={{ marginLeft: "10px" }}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href={`mailto:${student.contactInformation.email[0]}`}
                >
                  Mail 1
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href={`mailto:${student.contactInformation.email[1]}`}
                >
                  {"  "} Mail 2
                </Link>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 2,
                marginRight: 2,
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/2048px-Google_Scholar_logo.svg.png"
                alt="Google Scholar"
                style={{ width: 40, height: 40, marginRight: "10px" }}
              />
              <Typography variant="body1">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href={student.contactInformation.googleScholarLink}
                >
                  Google Scholar Link
                </Link>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 2,
                marginRight: 2,
              }}
            >
              <a
                style={{ marginRight: "10px" }}
                title="ORCID, CC0, via Wikimedia Commons"
                href="https://commons.wikimedia.org/wiki/File:ORCID_iD.svg"
              >
                <img
                  width="40"
                  alt="ORCID iD"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/512px-ORCID_iD.svg.png?20190308043226"
                />
              </a>
              <Typography variant="body1">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href={student.contactInformation.orcidLink}
                >
                  Orcid Link
                </Link>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 2,
                marginRight: 2,
              }}
            >
              <a
                style={{ marginRight: "10px" }}
                title="ZyMOS-Bot, CC0, via Wikimedia Commons"
                href="https://commons.wikimedia.org/wiki/File:Linkedin_icon.svg"
              >
                <img
                  width="40"
                  alt="Linkedin icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/256px-Linkedin_icon.svg.png?20110609134306"
                />
              </a>
              <Typography variant="body1">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href={student.contactInformation.linkedIn}
                >
                  LinkedIn Link
                </Link>
              </Typography>
            </Box>

            <Typography sx={{ cursor: "pointer", textDecoration: "underline" }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href={student.contactInformation.clickForMore}
              >
                Click For More
              </Link>
            </Typography>
          </Box>
        );
      case "Publication":
        return (
          <Box
            style={{
              background: "rgb(253, 246, 230)",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
              marginTop: "20px",
              marginLeft: "24%",
              width: "67.5%",
            }}
          >
            {student.publications &&
              student.publications.conference_publications &&
              student.publications.conference_publications.map(
                (publication, index) => (
                  <PublicList
                    key={index}
                    publication={publication}
                    size={
                      student.publications.conference_publications.length -
                      index
                    }
                  />
                )
              )}
          </Box>
        );
      default:
        return null;
    }
  };

  if (!student) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Box
        sx={{
          width: "67%",
          bgcolor: "#B5DFF3",
          padding: "30px",
          borderRadius: "30px",
          marginLeft: "24%",
          position: "relative",
          marginTop: "8%",
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            width: 140,
            height: 100,
            borderRadius: "50%",
            position: "relative",
            bottom: -90,
            marginLeft: "41.1%",
          }}
        />
      </Box>
      <Box
        sx={{
          width: 130,
          height: 130,
          borderRadius: "50%",
          position: "relative",
          bottom: 31,
          marginLeft: "52.5%",
          backgroundImage: `url(${student.urlToImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* margin-left: 13.5%; margin-top: -15px; text-align: center; */}
      <Box
        sx={{ marginLeft: "14.5%", marginTop: "-15px", textAlign: "center" }}
      >
        <Typography variant="h5">{student.name}</Typography>
        <Typography variant="subtitle1" sx={{ ml: 4 }}>
          ({student.subtitle})
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: 60,
          boxShadow: "0 2px #FFB81B",
          borderRadius: 1,
          p: 2,
          width: "67%",
          marginTop: "8px",
          marginLeft: "24.5%",
        }}
        className="container"
      >
        {["Overview", "Research", "Publication", "Contact"].map((section) => (
          <Typography
            key={section}
            variant="h6"
            sx={{
              position: "relative",
              cursor: "pointer",
              "&:hover::after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: "-2px",
                left: 0,
                backgroundColor: "#FFB81B",
                borderRadius: "2px",
              },
            }}
            onClick={() => handleSectionChange(section)}
          >
            {section}
          </Typography>
        ))}
      </Box>
      <Box style={{ marginBottom: "5%", marginRight: "13%" }}>
        {renderContent()}
      </Box>
    </>
  );
}

export default Students;
