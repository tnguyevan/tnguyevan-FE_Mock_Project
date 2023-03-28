import React, { useEffect, useState } from "react";
import { Card, ListGroup, Button, Navbar, Container } from "react-bootstrap";
import { TbTruckDelivery } from "react-icons/tb";
import { BiTimer } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
 import { useNavigate  } from "react-router-dom";
import { useSelector } from "react-redux";
import CurrencyFormat from 'react-currency-format';

function CartTotal(props) {
  let navigate = useNavigate(); 

  
  const routeChangeToDelivery = () =>{ 
    let path = `/delivery`; 
    navigate(path, {replace: true});
  }

  const routeChangeToHome = () =>{ 
    let path = `/`; 
    navigate(path, {replace: true});
  }
  

  let total1 = useSelector(
    (state) => state.listProductRedux.total
  );
  console.log(total1)
  
  
    let totalQ = useSelector(
      (state) => state.listProductRedux.totalQuantity
    );
    console.log(totalQ);
  
    
  return (
    <Card style={{ width: "auto" }}>
      <ListGroup>
        <ListGroup.Item>
          <Navbar>
            <Container>
              <Navbar.Brand>Tổng đơn hàng </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{color: 'red',fontSize: 20}}>
                  <CurrencyFormat
                thousandSeparator={true} 
                displayType={'text'}
                  value={total1}
                  decimalSeparator={'.'}
                  suffix={'  VND'}
                  thousandSpacing={'3'}
                  />
                
                  </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </ListGroup.Item>
        <ListGroup.Item>
          <Navbar>
            <Container>
              <Navbar.Brand>Số lượng</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>{totalQ}</Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="text-sm-start">
            <TbTruckDelivery /> Miễn phí vận chuyển cho đơn hàng từ 499k
          </p>
          <p className="text-sm-start">
            <GoPackage /> Hỗ trợ đổi sản phẩm trong vòng 30 ngày (Áp dụng cho
            đơn hàng Online)
          </p>
          <p className="text-sm-start">
            <BiTimer /> Thời gian giao hàng từ 3 - 5 ngày
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="danger" size="sm" onClick={routeChangeToDelivery}>
            THANH TOÁN
          </Button>{" "}
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="light" size="sm" onClick={routeChangeToHome}>
            MUA SẮM THÊM
          </Button>{" "}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CartTotal;
