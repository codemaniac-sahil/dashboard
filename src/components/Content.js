import React from "react";
import "../styles/content.css";
import Cards from "./Cards";
function Content() {
  return (
    <>
      <div className="content-section">
        <div className="content-section-header">
          <h1>Dashboard</h1>
        </div>
        <div className="content-section-cards-container">
          <Cards title="Orders" />
          <Cards title="Revenue" />
          <Cards title="Trips" />
          <Cards title="Expenses" />
        </div>
      </div>
    </>
  );
}

export default Content;
