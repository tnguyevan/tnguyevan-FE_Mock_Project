import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminNavBar from "../Components/Admin/AdminNavbar";
import AdminSearch from "../Components/Admin/AdminSearch";

function AdminContainer({ onNavigate }) {
  const handleNavigate = (key) => {
    onNavigate(key);
  };
  return (
    <Container className="my-2 py-2">
      <Row>
        <Col xs={12} sm={6} xl={6}>
          <AdminNavBar handleNavigate={handleNavigate} />
        </Col>
        <Col xs={12} sm={6} xl={6}>
          <AdminSearch />
        </Col>
      </Row>
    </Container>
  );
}
export default AdminContainer;
