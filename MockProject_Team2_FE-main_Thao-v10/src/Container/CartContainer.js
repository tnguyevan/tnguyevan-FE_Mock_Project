import React, { useEffect, useState } from "react";
import HeaderCart from "../Components/HeaderCart";

import CartItems from "../Components/CartItems";
import CartTotal from "../Components/CartTotal";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function CartContainer(props) {
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  let stateRedux = useSelector((state) => state);
  console.log("stateRedux:", stateRedux);
  let listProduct = useSelector(
    (state) => stateRedux.listProductRedux.listProduct
  );
  


  return (
    <div>
      <Container className="mt-4">
        {/* <HeaderCart></HeaderCart> */}
        <Row>
          <Col sm={8}>
            <CartItems></CartItems>
          </Col>
          <Col sm={4}>
            <CartTotal ></CartTotal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartContainer;
