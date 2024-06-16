import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const ArticleSummary = ({ newsData }) => {
  const { id } = useParams();

  return (
    <Container>
      <hr />
      {newsData
        .filter((eachArticle) => eachArticle.fields.headline === id)
        .map((eachArticle) => (
          <Card key={eachArticle.id} className="mb-4 text-center">
            <Row noGutters>
              <Col>
                <Image
                  src={eachArticle.fields.thumbnail}
                  fluid
                  className="custom-rounded-img mt-3"
                />
              </Col>
            </Row>
            <Card.Body>
              <Card.Title>
                <a href={eachArticle.webUrl} target="_blank" rel="noreferrer">
                  {eachArticle.fields.headline}
                </a>
              </Card.Title>
              {eachArticle.fields.bodyText
                .split("\n\n")
                .map((paragraph, index) => (
                  <Card.Text key={index}>{paragraph}</Card.Text>
                ))}
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
};

export default ArticleSummary;
