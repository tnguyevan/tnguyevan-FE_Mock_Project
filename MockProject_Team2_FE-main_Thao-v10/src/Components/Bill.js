import React from "react";
import { Card, Container, ListGroup, Navbar, Table } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";

function Bill(props) {
  const dispatch = useDispatch();
  let stateRedux = useSelector((state) => state);
  console.log("stateRedux:", stateRedux);
  let listProduct = useSelector(
    (stateRedux) => stateRedux.listProductRedux.listProduct
  );

  // tổng đơn hàng
  let total1 = useSelector((state) => state.listProductRedux.total);
  // tổng số lượng
  let totalQ = useSelector((state) => state.listProductRedux.totalQuantity);
  let items = "";
  items = listProduct.content.map((product, index) => {
    return (
       <tr>
                          <td>{product.productName}</td>
                          <td>L</td>
                          <td>{product.quantity}</td>
                          <td className="text-right">
                            <CurrencyFormat
                              thousandSeparator={true}
                              displayType={"text"}
                              value={
                                product.productSalePrice
                                  ? product.productSalePrice
                                  : product.productPrice
                              }
                              decimalSeparator={"."}
                              suffix={"  VND"}
                              thousandSpacing={"3"}
                            />
                          </td>
                        </tr>
    )
  })
  return (
    <Card className="border-0" style={{ width: "auto" }}>
      <ListGroup>
        <ListGroup.Item>
          <Navbar>
            <Container>
              <Navbar.Brand>
               
                 
                    
                    <Table className="table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Sản phẩm</th>
                          <th>size</th>
                          <th>Số lượng</th>
                          <th>Giá</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                     {items}
                      </tbody>
                    </Table>
                  
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text></Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </ListGroup.Item>
        <ListGroup.Item>
          <Navbar>
            <Container>
              <Navbar.Brand>Tổng tiền </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{ color: "red", fontSize: 20 }}>
                  <CurrencyFormat
                    thousandSeparator={true}
                    displayType={"text"}
                    value={total1}
                    decimalSeparator={"."}
                    suffix={"  VND"}
                    thousandSpacing={"3"}
                  />
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Bill;
