import React, { useState } from "react";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";

import { AiFillPhone } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionUpdateAddressPhoneAPI } from "../redux/action/CartAction";

function UserInfoPayment(props) {
  let { onHandleShowForm } = props;
  const dispatch = useDispatch();
  let onHandleClickShowForm = () => {
    console.log("click show form");
    onHandleShowForm();
    // lưu profile
    dispatch(actionUpdateAddressPhoneAPI(Address, PhoneNumber));

  };

  let navigate = useNavigate();
  const routeChangeToCart = () => {
    let path = `/cart`;
    navigate(path, { replace: true });
  };

  let [FirstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [PhoneNumber, setPhoneNumber] = useState("");
  let [Address, setAddress] = useState("");

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <Form>
              <Form.Label>
                <h4> THÔNG TIN GIAO HÀNG</h4>
              </Form.Label>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-start" column sm="2">
                  Họ{" "}
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    id="FirstName"
                    name="FirstName"
                    placeholder="Input FirstName"
                    type="FirstName"
                    value={FirstName}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                </Col>

                <Form.Label className="text-start" column sm="2">
                  Tên{" "}
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    id="LastName"
                    name="LastName"
                    placeholder="Input LastName"
                    type="LastName"
                    value={LastName}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3 text-left"
                controlId="formBasicPhone"
              >
                <Form.Label className="text-start" column sm="2">
                  <AiFillPhone />
                  Số điện thoại
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    id="PhoneNumber"
                    name="PhoneNumber"
                    placeholder="Input PhoneNumber"
                    type="PhoneNumber"
                    value={PhoneNumber}
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formBasicAddress"
              >
                <Form.Label className="text-start" column sm="5">
                  <FaHome />
                  Địa chỉ giao hàng
                </Form.Label>
                <Col sm="15">
                  <Form.Control
                    id="Address"
                    name="Address"
                    placeholder="Input Address"
                    type="Address"
                    value={Address}
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                    as="textarea"
                    rows={4}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Button variant="primary" onClick={routeChangeToCart}>
              QUAY LẠI GIỎ HÀNG
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="primary" onClick={onHandleClickShowForm}>
              ĐẶT HÀNG
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UserInfoPayment;
