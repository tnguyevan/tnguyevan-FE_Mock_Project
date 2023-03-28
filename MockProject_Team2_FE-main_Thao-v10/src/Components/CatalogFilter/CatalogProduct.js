import React from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CurrencyFormat from "react-currency-format";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
function CatalogProduct(props) {
  const { id } = useParams();
  let { ProductList } = props;
  let ProductCatalog = [];
  for (let index = 0; index < ProductList.length; index++) {
    if (ProductList[index].catalogId === id) {
      ProductCatalog.push(
        <Col key={index} xl={2} md={2} lg={2}>
          <Link
            to={`/products/${ProductList[index].id}`}
            className="text-decoration-none text-dark"
          >
            <Card className="border-0 h-100">
              <Card.Img
                variant="top"
                src={"/images/" + ProductList[index].image.image1}
              />
              <Card.Body className="text-center">
                <Card.Title className="h6">
                  {ProductList[index].name}
                </Card.Title>

                <Card.Text className="text-center my-0 py-0 h6 text-decoration-line-through">
                  <CurrencyFormat
                    value={ProductList[index].price}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" ₫"}
                  />
                </Card.Text>
                <Card.Text className="text-center my-0 py-0 h6 text-danger">
                  <CurrencyFormat
                    value={ProductList[index].salePrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" ₫"}
                  />
                </Card.Text>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-half text-warning"></i>
                <i className="bi bi-star text-warning"></i>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    }
  }

  let items = "";
  items = ProductCatalog.map((product, index) => {
    return product;
  });
  return (
    <Container className="mt-3">
      <Row>
        <h5 className="mt-4 text-uppercase">TÌM KIẾM SẢN PHẨM</h5>
        <small className="mb-2 text-right">
          Tìm thấy {ProductCatalog.length} kết quả
        </small>
        {items}
      </Row>
    </Container>
  );
}

export default CatalogProduct;
