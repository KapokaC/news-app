import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Article from "./Article";

const Headlines = ({ newsData }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {newsData.map((eachArticle, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 custom-card">
              {" "}
              <Card.Img
                variant="top"
                src={eachArticle.fields.thumbnail}
                className="custom-rounded-img"
              />
              <Card.Body>
                <Card.Title>{eachArticle.webTitle}</Card.Title>
                <Article headline={eachArticle.webTitle} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Headlines;
