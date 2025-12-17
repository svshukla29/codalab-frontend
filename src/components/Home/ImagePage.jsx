import { Fullscreen, Opacity } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

const textArray = [
  "Design And Application",
  "Embedded Systems",
  "Internet Of Things",
  "Machine Learning"
];

const ImagePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % textArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.imageContainer}>
      <img style={styles.bgBodySecondary}/>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={{ marginBottom: "0px", color:"#fff"}}>
            We Are Interdisciplinary Research Lab Working To Advance The Future
            Of
          </p>
          <p style={styles.dynamicText}>{textArray[currentIndex]}</p>
          <div style={styles.horizontalLine}></div>
        </div>
        <div style={styles.footer}>
          {textArray.map((text, index) => (
            <div key={index} style={styles.footerItem}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "67vw",
    padding: "20px",
    boxSizing: "border-box",
  },
  bgBodySecondary: {
    width: "100%",
    loding:"lazy",
    margin: "30px 0 16px 0",
    height: "250px",
    background: `url(https://i.ibb.co/JBGL2b5/Whats-App-Image-2024-07-23-at-17-51-23.jpg )`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    borderRadius: "6px",
  },
  container: {
    position: "absolute",
    top: "39%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "90%",
    maxWidth: "800px",
    color:"#000"
  },
  header: {
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    color: "#fff",
    marginLeft: "40px",
  },
  dynamicText: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "10px",
    color:"#fff"
  },
  horizontalLine: {
    width: "40%",
    height: "2px",
    backgroundColor: "#fff",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
    flexWrap: "nowrap",
    width: "108%",
    marginLeft: "11px",
  },
  footerItem: {
    padding: "10px",
    backgroundColor: "#E7DBC2",
    border: "1px solid black",
    cursor: "pointer",
    borderRadius: "4px",
    flex: "1 1 calc(25% - 10px)",
    boxSizing: "border-box",
    textAlign: "center",
    margin: "5px",
    minWidth: "100px",
    opacity: "83%",
    fontWeight: "500",
  },
};

export default ImagePage;
