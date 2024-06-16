import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Article = ({ headline }) => {
  return (
    <NavLink to={`/${headline}`}>
      <Button
        variant="primary"
        style={{
          backgroundColor: "#6f42c1",
          borderColor: "#6f42c1",
          transition: "background-color 0.2s, border-color 0.2s",
        }}
        className="custom-primary-btn"
      >
        View Article
      </Button>
    </NavLink>
  );
};

export default Article;
