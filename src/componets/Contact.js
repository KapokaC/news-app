import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //display a success message.
    console.log(formData); //Log form data to console

    // reset form fields after submission
    setFormData({
      firstname: "",
      lastname: "",
      subject: "",
    });
  };

  return (
    <div className="background">
      <div className="overlay"></div>
      <Container className="content">
        <h2>Get in Touch</h2>
        <p>
          If you want to send us a press release or tell us about a new story!!!
        </p>
        <div className="glowing-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formFirstName" className="mb-3">
              <Form.Label column sm="2">
                First Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Your name.."
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formLastName" className="mb-3">
              <Form.Label column sm="2">
                Last Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Your last name.."
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formSubject" className="mb-3">
              <Form.Label column sm="2">
                Subject
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  placeholder="Write something.."
                  style={{ height: "200px" }}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
