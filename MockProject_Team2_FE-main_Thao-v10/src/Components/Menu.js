import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import { getCartItemAPI } from "../API/CartItemAPI";
import { useNavigate } from "react-router-dom";
function Menu(props) {
  const navigate = useNavigate();
  let [signin, SetSignIn] = useState(true);
  let token = localStorage.getItem("token");
  let userName = localStorage.getItem("username");
  let userid = localStorage.getItem("id");
  let [cartItem, setCartItem] = useState(localStorage.getItem("cartItem"));
  let fetchCartItem = () => {
    getCartItemAPI(userid).then((res) => {
      setCartItem(res.totalElements);
    });
  };
  useEffect(() => {
    if (token) {
      SetSignIn(true);
    } else {
      SetSignIn(false);
    }
  }, [signin]);
  // useEffect(() => {
  //   fetchCartItem();
  // }, []);
  useEffect(() => {
    fetchCartItem();
  }, [cartItem]);

  //handle exit
  let handleExit = () => {
    localStorage.clear();
    SetSignIn(false);
    navigate("/signin");
  };
  return (
    <Navbar bg="light shadow-lg" className="d-flex" id="top-nav" expand="lg">
      <Container fluid>
        <Navbar.Brand id="nav-text1" href="/" className="fw-bold fs-4">
          <span className="text-danger">FASHION</span> SHOP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Form className="search">
            <Form.Control type="search" placeholder="Tìm Kiếm" className="rounded-pill mx-3" aria-label="Tìm Kiếm" />


          </Form> */}
          <Nav className="ms-auto">
            <Nav.Link href="/" className="fs-6 fw-bold" id="nav-text">
              TRANG CHỦ
            </Nav.Link>
            <Nav.Link href="/catalog/1" className="fs-6 fw-bold" id="nav-text">
              ÁO KHOÁC
            </Nav.Link>
            <Nav.Link href="/catalog/2" className="fs-6 fw-bold" id="nav-text">
              ÁO SƠ MI
            </Nav.Link>
            <Nav.Link href="/catalog/3" className="fs-6 fw-bold" id="nav-text">
              ÁO PHÔNG
            </Nav.Link>
            <Nav.Link href="/catalog/4" className="fs-6 fw-bold" id="nav-text">
              QUẦN
            </Nav.Link>
            <Nav.Link href="/catalog/5" className="fs-6 fw-bold" id="nav-text">
              VÁY
            </Nav.Link>
            <Nav.Link href="/catalog/7" className="fs-6 fw-bold" id="nav-text">
              ÁO LEN
            </Nav.Link>
            <Nav.Link href="/catalog/8" className="fs-6 fw-bold" id="nav-text">
              VEST
            </Nav.Link>
          </Nav>
          <Form className="">
            {signin ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle
                    className="bg-light text-danger border-0"
                    variant="success"
                    id="dropdown-basic"
                  >
                    {userName}
                    <Badge bg="light" className="text-danger fs-6">
                      <i className="bi bi-cart4"></i> {cartItem}
                    </Badge>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleExit}>Thoát</Dropdown.Item>
                    <Dropdown.Item href="/userProfile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/carts">Cart</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <Button variant="outline-danger" href="/signin">
                Đăng nhập
              </Button>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
