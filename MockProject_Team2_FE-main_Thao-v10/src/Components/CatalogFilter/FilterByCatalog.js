import React from "react";

import { Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function FilterByCatalog(props) {
  const { id } = useParams();
  let { Catalog } = props;
  let items = "";
  items = Catalog.map((catalog, index) => {
    return (
      <Col sm={3} xl={3} md={3} lg={3} key={index}>
        <Link
          to={`/catalog/${catalog.id}`}
          className="text-decoration-none text-dark"
        >
          <Card className="border-0">
            <Card.Img variant="top" src={"/images/" + catalog.image} />
            <Card.Body>
              <Card.Title className="text-center text-uppercase">
                {catalog.name}
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  });
  return (
    <Container>
      {id}
      <h4 className="text-center my-4">TÌM THEO DANH MỤC</h4>
      <Row>{items}</Row>
      <hr />
    </Container>
  );
}

export default FilterByCatalog;
