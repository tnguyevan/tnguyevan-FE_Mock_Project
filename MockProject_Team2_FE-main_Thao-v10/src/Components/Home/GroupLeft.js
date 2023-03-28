import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getAllByCatalogIdAPI } from "../../API/ProductAPI";
function Group(props) {
  let { catalog, Product } = props;
  let TopCard = [];
  let Cards = [];
  let items = "";
  let [products, setProducts] = useState([]);
  let fetchProductByCatalogId = () => {
    getAllByCatalogIdAPI(catalog.id)
      .then((response) => {
        console.log(response);
        if (response) {
          setProducts(response.content);
        } else {
          setProducts([]);
        }
      })
      .catch(() => {
        setProducts([]);
      });
  };

  useEffect(() => {
    fetchProductByCatalogId();
  }, []);

  for (let index = 0; index < products.length; index++) {
    TopCard.push(
      <Link
        to={`/products/${products[index].id}`}
        className="text-decoration-none text-dark"
      >
        <Card className="border-0" key={index}>
          <Card.Img
            variant="top"
            src={"/images/" + products[index].image.image1}
          />
          <Card.Body>
            <Card.Title>{products[index].name}</Card.Title>
            <Card.Text>{products[index].describe}</Card.Text>
            <Card.Text className="text-center my-0 py-0 h5 text-decoration-line-through">
              <CurrencyFormat
                value={products[index].price}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" ₫"}
              />
            </Card.Text>
            <Card.Text className="text-center my-0 py-0 h5 text-danger">
              <CurrencyFormat
                value={products[index].salePrice}
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
    );
  }

  for (let index = 0; index < products.length; index++) {
    Cards.push(
      <Col key={index} sm={3} xl={3} md={3} lg={3}>
        <Link
          to={`/products/${products[index].id}`}
          className="text-decoration-none text-dark"
        >
          <Card className="border-0 rounded-0 h-100">
            <Card.Img
              className="rounded-0"
              variant="top"
              src={"/images/" + products[index].image.image1}
            />
            <Card.Body>
              <Card.Text className="my-1">{products[index].name}</Card.Text>
              <Card.Text className="text-center my-0 py-0 h6 text-decoration-line-through">
                <CurrencyFormat
                  value={products[index].price}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={" ₫"}
                />
              </Card.Text>
              <Card.Text className="text-center my-0 py-0 h6 text-danger">
                <CurrencyFormat
                  value={products[index].salePrice}
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
    items = Cards.slice(1).map((product, index) => {
      return product;
    });
  }

  return (
    <Container className="my-5">
      <h4 className="text-uppercase">{catalog.name}</h4>

      <Row className="mt-4">
        <Col xl={4} md={4} lg={4}>
          {TopCard[0]}
        </Col>
        <Col xl={8} md={8} lg={8}>
          <Row>{items}</Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Group;
