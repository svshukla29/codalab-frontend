import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const Research = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [items, setItems] = useState([]);
  const handleButtonClick = (button) => {
    setSelectedButton((prevSelectedButton) => (prevSelectedButton === button ? null : button));
  };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            import.meta.env.VITE_RESEARCH_API_URL
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

  const renderContent = () => {
    switch (selectedButton) {
      case 'CAD For Microfluidics':
        return (
          <Typography variant="h6">
            {" "}
            <ul
              style={{
                padding: 0,
                margin: 0,
                fontFamily: "Abhaya Libre ExtraBold",
              }}
            >
              {items &&
                items[3] &&
                (Array.isArray(items[3].details) ? (
                  items[3].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))
                ) : (
                  <li key={items[3]._id}>{items[3].details}</li>
                ))}
            </ul>{" "}
          </Typography>
        );
      case 'Silicon Photonic Integrated Circuit':
        return (
          <Typography variant="h6">
            {" "}
            <ul
              style={{
                padding: 0,
                margin: 0,
                fontFamily: "Abhaya Libre ExtraBold",
              }}
            >
              {items &&
                items[3] &&
                (Array.isArray(items[1].details) ? (
                  items[1].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))
                ) : (
                  <li key={items[1]._id}>{items[1].details}</li>
                ))}
            </ul>{" "}
          </Typography>
        );
      case 'ICT- For Disaster Risk Reduction':
        return (
          <Typography variant="h6">
            {" "}
            <ul
              style={{
                width:'55vw',
                padding: 0,
                fontFamily: "Abhaya Libre ExtraBold",
              }}
            >
              {items &&
                items[3] &&
                (Array.isArray(items[2].details) ? (
                  items[2].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))
                ) : (
                  <li key={items[2]._id}>{items[2].details}</li>
                ))}
            </ul>{" "}
          </Typography>
        );
      case 'Iot And Cyber-Physical Systems':
        return (
          <Typography variant="h6">
            {" "}
            <ul
              style={{
                padding: 0,
                margin: 0,
                fontFamily: "Abhaya Libre ExtraBold",
              }}
            >
              {items &&
                items[3] &&
                (Array.isArray(items[0].details) ? (
                  items[0].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))
                ) : (
                  <li key={items[0]._id}>{items[0].details}</li>
                ))}
            </ul>{" "}
          </Typography>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          left: '20%',
          width: '76vw',
          marginTop:'9%',
        }}
      >
        <Box
          sx={{
            width: '79%',
            height: '150px',
            backgroundColor: '#d9d9d945',
            margin: '30px -20px 58px 8px',
            position: 'relative',
            left: '-10%',
          }}
        ></Box>
        
        <Box
          component="img"
          sx={{
            width: '81%',
            height: '200px',
            borderRadius: '4px',
            marginLeft: '-10%',
            bottom: '184px',
            position: 'relative',
          }}
          src="https://i.ibb.co/2qR7kTH/research.jpg"
        />
        <Typography
          sx={{
            fontFamily: 'Abhaya Libre ExtraBold',
            fontSize: '2rem',
            lineHeight: '1.9',
            bottom: '243px',
            position: 'relative',
            fontWeight: 'bold',
            right: '4%',
            color:"#fff"
          }}
        >
          Research Area
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ position: 'relative', width: '96vw', left: '4%', marginTop:'-10%', marginBottom:'8%'}}
      >
        {!selectedButton ? (
          <>
            <Grid container item xs={12} spacing={2} justifyContent="center"sx={{pt:'4%'}}>
              <Grid item xs={6} sm={3}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    backgroundColor: '#f9e1b1',
                    color: 'black',
                    fontWeight: 'bold',
                    fontFamily: 'Abhya Libre Bold',
                  }}
                  onClick={() => handleButtonClick('CAD For Microfluidics')}
                >
                  CAD For Microfluidics
                </Button>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    backgroundColor: '#f9e1b1',
                    color: 'black',
                    fontWeight: 'bold',
                    fontFamily: 'Abhya Libre Bold',
                  }}
                  onClick={() => handleButtonClick('Silicon Photonic Integrated Circuit')}
                >
                  Silicon Photonic Integrated Circuit
                </Button>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={2} justifyContent="center"sx={{pt:'4%'}}>
              <Grid item xs={6} sm={3}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    backgroundColor: '#f9e1b1',
                    color: 'black',
                    fontWeight: 'bold',
                    fontFamily: 'Abhya Libre Bold',
                  }}
                  onClick={() => handleButtonClick('ICT- For Disaster Risk Reduction')}
                >
                  ICT- For Disaster Risk Reduction
                </Button>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    backgroundColor: '#f9e1b1',
                    color: 'black',
                    fontWeight: 'bold',
                    fontFamily: 'Abhya Libre Bold',
                  }}
                  onClick={() => handleButtonClick('Iot And Cyber-Physical Systems')}
                >
                  Iot And Cyber-Physical Systems
                </Button>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid container item xs={12} justifyContent="center">
              <Grid item xs={6} sm={3}>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    backgroundColor: '#f9e1b1',
                    color: 'black',
                    fontWeight: 'bold',
                    fontFamily: 'Abhya Libre Bold',
                    width:'8'
                  }}
                  onClick={() => handleButtonClick(selectedButton)}
                >
                  {selectedButton}
                </Button>
              </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              {renderContent()}
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Research;
