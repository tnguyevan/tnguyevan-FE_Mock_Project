import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderCart from '../Components/HeaderCart';

import { useDispatch } from "react-redux";
import { actionCloseShowForm, actionShowForm } from '../redux/action/FormAction';
import ConfirmOrder from '../Components/ConfirmOrder';
import UserInfoPayment from '../Components/UserInfoPayment';
import Bill from '../Components/Bill';



function DeliveryContainer(props) {
  let dispatchRedux = useDispatch();
  let onHandleCloseForm = () => {
    dispatchRedux(actionCloseShowForm());
  }
  let onHandleShowForm = () =>{
    console.log("click show");
    dispatchRedux(actionShowForm());
  }
  

    return (
        <div>
      <Container fluid className='mt-5'>
        {/* <HeaderCart></HeaderCart> */}
        <Row>
          <Col sm={6}>
            <UserInfoPayment onHandleShowForm={onHandleShowForm}  />
          </Col>
          <Col sm={6}>
            <Bill/>
          </Col>
        </Row>
        {/* <ConfirmOrder
        onHandleCloseForm = {onHandleCloseForm}
        onHandleShowForm={onHandleShowForm}
        /> */}
      
      </Container>
    </div>
    );
}

export default DeliveryContainer;