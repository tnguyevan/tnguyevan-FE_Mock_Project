import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
function NewProduct(props) {
  let { NewProductList } = props;

  let items = "";

  items = NewProductList.slice(NewProductList.length - 5).map(
    (product, index) => {
      return (
        <Col sm={2} xl={2} md={2} lg={2} className="text-center" key={index}>
          <Link
            to={`/products/${product.id}`}
            className="text-decoration-none text-dark"
          >
            <Card className="border-0 round-0">
              <Card.Img variant="top" src={"/images/" + product.image.image1} />
              <Card.Body>
                <Card.Title className="h6">{product.name}</Card.Title>
                <Card.Text className="text-center my-0 py-0 h6 text-decoration-line-through">
                  <CurrencyFormat
                    value={product.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" ₫"}
                  />
                </Card.Text>
                <Card.Text className="text-center my-0 py-0 h6 text-danger">
                  <CurrencyFormat
                    value={product.salePrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" ₫"}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    }
  );
  return (
    <Container className="mt-5">
      <h4 className="text-center my-4">HÀNG MỚI VỀ</h4>
      <Row className="row justify-content-center">{items}</Row>
    </Container>
  );
}

export default NewProduct;
