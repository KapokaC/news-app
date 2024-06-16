import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="text-center text-white bg-dark p-4">
      <Container>
        <section className="mb-4">
          <Button
            href="https://www.linkedin.com/in/charity-kapoka-ba213b172/"
            variant="outline-warning"
            className="m-1 glowing-icon"
          >
            <i className="fab fa-instagram"></i>
          </Button>
          <Button
            href="https://www.linkedin.com/in/charity-kapoka-ba213b172/"
            variant="outline-warning"
            className="m-1 glowing-icon"
          >
            <i className="fab fa-linkedin-in"></i>
          </Button>
          <Button
            href="https://github.com/KapokaC"
            variant="outline-warning"
            className="m-1 glowing-icon"
          >
            <i className="fab fa-github"></i>
          </Button>
        </section>

        <section className="mb-4">
          {/* Newsletter Signup Form */}
          <Form>
            <Row className="justify-content-center">
              <Col xs="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </Col>
              <Col md="5">
                <InputGroup className="mb-4">
                  <FormControl
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    variant="outline-light"
                    id="button-addon2"
                    className="glowing-button"
                  >
                    Subscribe
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </Form>
        </section>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        {/* Copyright Notice */}© {new Date().getFullYear()} Charity Kapoka 2024
      </div>
    </footer>
  );
};

export default Footer;
