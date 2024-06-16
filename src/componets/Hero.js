import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <div className="white-strip"></div>
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Container className="text-center text-white">
            <h1 className="display-4">Get your latest news</h1>
            <h2 className="h1">Breaking & Trending</h2>
            <Button
              href="https://www.theguardian.com/uk"
              variant="warning"
              size="lg"
              className="mt-3"
            >
              HERE
            </Button>
          </Container>
        </div>
      </div>
      <div className="white-strip"></div>
    </>
  );
};

export default Hero;
