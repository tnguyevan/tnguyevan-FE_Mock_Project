import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserOrder from "../Components/UserProfile/UserOrder";
import UserInfo from "../Components/UserProfile/UserInfo";
function UserProfileContainer(props) {
  return (
    <div>
      <Container className="my-5 py-5">
        <Row>
          <Col xs={12} sm={3} xl={3}>
            <UserInfo />
          </Col>
          <Col xs={12} sm={9} xl={9}>
            <UserOrder />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfileContainer;
