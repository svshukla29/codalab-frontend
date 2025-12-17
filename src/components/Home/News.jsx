// src/components/News.js

import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import NewsItem from "./NewsItem";
import useNewsStore from "../store/newsStore";

const News = () => {
  const scrollContainerRef = useRef(null);
  const { news, setNews } = useNewsStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_NEWS_API_URL);
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setNews]);

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fde5a8",
          padding: "10px 20px",
          borderRadius: "5px",
          width: "65vw",
          margin: "20px auto",
          marginLeft: "2%",
        }}
      >
        <img
          src="https://img.icons8.com/FCC54C/ios11/2x/ios-photos.png"
          alt="News Icon"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#4b2d0e",
            margin: "0",
          }}
        >
          News
        </h2>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "-3%",
        }}
      >
        <h2 style={{ fontSize: "23px", margin: "0" }}>Featured News</h2>
        <hr
          style={{
            border: "none",
            borderTop: "2px solid #f6b72d",
            margin: "10px auto",
            width: "65vw",
          }}
        />
      </div>
      <div style={{ position: "relative", width: "65vw", marginLeft:'2%' }}>
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
          {news.map((item) => (
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
    </>
  );
};

export default News;
