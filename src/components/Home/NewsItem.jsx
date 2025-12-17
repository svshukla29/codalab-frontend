import React from 'react';

export default function NewsItem({ image, title, url, description }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "inherit",
        minWidth: "250px",
        borderRadius: "10px",
        boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.07)",
        overflow: "hidden",
        backgroundColor: "white",
        flexShrink: "0",
        display: "block",
      }}
    >
      <img
        loading="lazy"
        src={image}
        alt={title}
        style={{
          width: "250px",
          height: "150px",
          objectFit: "cover",
          marginLeft: "10px",
          margin: "8px",
          borderRadius: "10px",
        }}
      />
      <div style={{ padding: "15px", width: "260px" }}>
        <h3 style={{ margin: "10px 0", fontSize: "1.2em", color: "#333" }}>
          {title}
        </h3>
        <h4 style={{ margin: "0", fontSize: "0.9em", color: "#777" }}>
          {description}
        </h4>
      </div>
    </a>
  );
}
