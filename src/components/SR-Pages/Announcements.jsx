import React from "react";
import useNewsStore from "../store/newsStore";
import AnnouncementsItem from "./AnnouncementsItem";
import { useState, useEffect, useRef } from "react";
import NewsItem from "../Home/NewsItem";
import {
  Box,
  Typography,
  Button,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Announcements = () => {
  const scrollContainerRef = useRef(null);
  const { news } = useNewsStore();
  const [item, setItems] = useState([]);
  // console.log(news)
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_ANNOUNCEMENTS_API_URL
        );
        const response1 = await fetch(
          import.meta.env.VITE_NEWS_API_URL
        );
        const data = await response.json();
        const data1 = await response1.json();
        setPhoto(data1);
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
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
          top: "-3%",
          left: "29%",
        }}
      />
      <Box
        sx={{
          top: "-3%",
          position: "relative",
          right: "-53%",
          width: "41%",
          textAlign: "justify",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mt: 1,
            position: "relative",
            right: "50%",
            width: "170%",
            fontFamily: "Abhaya Libre ExtraBold",
          }}
        >
          Sudip Roy completed his schooling (Class I to XII) from Kalyani
          University Experimental High School at Kalyani, a town of West Bengal,
          India in 1998. He passed Secondary (Class X Board Exam.) in 1996
          from WBBSE and Higher-Secondary (Class XII Board Exam.) in 1998
          from WBCHSE. He studied Bachelor of Science (BSc) with Physics Honors
          from Rahara Ramakrishna Mission Vivekananda Centenary College and
          received his BSc degree from the University of Calcutta in 2001. Then
          he studied Bachelor of Technology (BTech) in Computer Science and
          Engineering (a 3-year program) from University College of Science and
          Technology (a.k.a. Rajabazar Science College) and received his BTech
          degree from the University of Calcutta in 2004. In 2004, he wrote his
          BTech dissertation on Crosstalk Minimization in VLSI Channel Routing
          using Artificial Intelligence. He received the MS (by research) and
          PhD degrees in Computer Science and Engineering from the Indian
          Institute of Technology Kharagpur (IITkgp), India, in 2009 and 2014,
          respectively.
        </Typography>
        <br />
        <Typography
          variant="h6"
          spacing={3}
          sx={{
            mt: 1,
            position: "relative",
            right: "50%",
            width: "170%",
            fontFamily: "Abhaya Libre ExtraBold",
          }}
        >
          In 2008, he wrote his masters thesis on Impact of Leakage Power
          Reduction Techniques on Parametric Yield with his thesis advisor
          of Prof. Ajit Pal at the Department of Computer Science and
          Engineering, Indian Institute of Technology Kharagpur (IITkgp), India.
          In 2014, he wrote his doctoral thesis on Design Automation Algorithms
          for Sample Preparation on a Digital Microfluidic Lab-on-a-Chip with
          his thesis advisors of Prof. Partha P. Chakrabarti and Prof. Bhargab
          B. Bhattacharya at the Department of Computer Science and
          Engineering, Indian Institute of Technology Kharagpur (IITkgp), India.
        </Typography>
        <Typography
          variant="h6"
          spacing={3}
          sx={{
            mt: 1,
            position: "relative",
            right: "50%",
            width: "170%",
            fontFamily: "Abhaya Libre ExtraBold",
          }}
        >
          During 2004-2009, he had research experiences in different intervals
          as a Project-Linked-Personnel (Nov 2004 - Jul 2005) at the Machine
          Intelligence Unit, Indian Statistical Institute Kolkata, India, as a
          Junior Project Assistant (Aug 2005 - Jun 2008) at the Department of
          Computer Science and Engineering, Indian Institute of Technology
          Kharagpur (IITkgp), India, and as a Project-Linked-Personnel (Jul 2008
          - Sep 2009) at the Advanced Computing and Microelectronics
          Unit, Indian Statistical Institute Kolkata, India.
        </Typography>
        <Typography
          variant="h6"
          spacing={3}
          sx={{
            mt: 1,
            position: "relative",
            right: "50%",
            width: "170%",
            fontFamily: "Abhaya Libre ExtraBold",
          }}
        >
          Since Jul 2014, Dr. Roy has been working as an Assistant Professor at
          the Department of Computer Science and Engineering, Indian Institute
          of Technology Roorkee (IITR), India. Before joining with IITR, he was
          a Research Associate (Feb 2014 - Jul 2014) at the Electronic Design
          Automation Laboratory in the Department of Computer Science and
          Information Engineering (CSIE), National Cheng Kung University,
          Tainan, Taiwan.
        </Typography>
        <Typography
          variant="h6"
          spacing={3}
          sx={{
            mt: 1,
            position: "relative",
            right: "50%",
            width: "170%",
            fontFamily: "Abhaya Libre ExtraBold",
          }}
        >
          He is a recipient of the Microsoft Research India Ph.D. Fellowship
          award in 2010, and the national scholarship award by the Ministry of
          Human Resource Development (MHRD), Government of India based on
          performance in B.Sc. Physics Honors in 2001 (Duration: One time).
          <br />
          His research interest includes electronic design automation (EDA) of
          microfluidic lab-on-a-chips and digital VLSI integrated circuits. He
          has published 13 research articles in peer-reviewed journals, 24
          research articles in international conference proceedings, holds 2
          United States patents. He has authored one book and one book chapter.
          <br />
          Dr. Roy is a member of the IEEE and ACM.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFF8E1",
          borderBottom: "2px solid #FFC107",
          padding: "10px 16px",
          position: "relative",
          top: "-3%",
          right: "-31%",
          width: "74%",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", fontFamily: "Abhaya Libre ExtraBold" }}
        >
          Expertise
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          position: "relative",
          top: "-2%",
          right: "-32%",
          width: "70%",
          fontFamily: "Abhaya Libre ExtraBold",
        }}
      >
        {" "}
        Electronic Design Automation and Embedded System Design, Algorithm
        Design and Optimization Techniques, Microfluidic Biochips, CAD for VLSI,
        Cyber-Physical and IoT-based System Design, ICT for Disaster Management,
        Applications of Machine Learning.
      </Typography>
      <Box
        sx={{
          backgroundColor: "#FFF8E1",
          borderBottom: "2px solid #FFC107",
          padding: "10px 16px",
          position: "relative",
          top: "-1%",
          right: "-31%",
          width: "74%",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold", fontFamily: "Abhaya Libre ExtraBold" }}
        >
          News And Highlights
        </Typography>
      </Box>
      <div style={{ position: "relative", width: "59vw", marginLeft: "31%" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            overflowX: "auto",
            padding: "10px 5px",
            scrollbarWidth: "thin",
            scrollbarColor: "#f8f9fa transparent",
            minHeight: "200px",
          }}
          ref={scrollContainerRef}
        >
          {photo.map((item) => (
            <NewsItem
              key={item._id}
              image={item.urlToImage}
              title={item.newsTopic}
              url={item.url}
              description={item.newsDescription}
            />
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "107%",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "-34px",
          }}
        >
          <button
            onClick={scrollLeft}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: "1",
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
          <button
            onClick={scrollRight}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: "1",
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      </div>
      <Box
        sx={{
          backgroundColor: "#FFF8E1",
          borderBottom: "2px solid #FFC107",
          padding: "15px 20px",
          marginBottom: "6%",
          position: "relative",
          top: "55px",
          right: "-31%",
          width: "74%",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold", fontFamily: "Abhaya Libre ExtraBold" }}
        >
          Announcements
        </Typography>
      </Box>

      <div style={{ marginBottom: "5%" }}>
        {item.map((item) => (
          <AnnouncementsItem key={item._id} {...item}></AnnouncementsItem>
        ))}
      </div>
    </>
  );
};

export default Announcements;
