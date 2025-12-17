import React from "react";
import { Link } from "react-router-dom";

export default function PeopleItem({ id, image, name, subtitle, Area }) {
  return (
    <Link
      to={`/student/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="border border-warning my-2 mx-2"
        style={{ width: "33vw", background: "rgb(239 239 239)" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            loading="lazy"
            className="rounded-circle border border-warning"
            style={{ height: "100px", width: "100px", marginTop: "10px" }}
            src={image}
            alt="image"
          />
          <div>
            <p style={{ marginBottom: "0", textAlign: "center" }}>
              <b>{name}</b>
            </p>
            <p style={{ marginBottom: "0", textAlign: "center" }}>
              ({subtitle})
            </p>
          </div>
        </div>
        <div className="d-flex flex-end">
          <p style={{ marginTop: "20px", marginLeft: "5px" }}>
            <b>Area: </b>
            {Area}
          </p>
        </div>
      </div>
    </Link>
  );
}
