//import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function ConfirmOrder(props) {
  let navigate = useNavigate();
  
  const routeChangeToHome = () => {
    let path = `/`;
    navigate(path, { replace: true });
  };

  let { onHandleCloseForm } = props;
  let show = useSelector((state) => state.showFormRedux.showForm);
  console.log(show);
  let onHandleClickClose = () => {
    console.log("click close");
    onHandleCloseForm();

  };

  let totalApi = useSelector((state) => state.listProductRedux.totalAPI);
  console.log(totalApi);

  return (
    <>
      <Container>
        <Modal show={show} onHide={onHandleCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>Xác nhận đặt hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Bạn có muốn thanh toán số tiền {" "}
            <CurrencyFormat
              thousandSeparator={true}
              displayType={"text"}
              value={totalApi}
              decimalSeparator={"."}
              suffix={"  VND "}
              thousandSpacing={"3"}
            />
            không?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHandleClickClose}>
              HỦY
            </Button>
            <Button variant="primary" onClick={routeChangeToHome}>
              XÁC NHẬN
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default ConfirmOrder;
