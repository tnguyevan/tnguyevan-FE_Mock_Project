import React from "react";
import { Nav } from "react-bootstrap";

function AdminNavBar({ handleNavigate }) {
  const onNavigate = (key) => {
    handleNavigate(key);
  };
  return (
    <Nav activeKey="/home" onSelect={(selectedKey) => onNavigate(selectedKey)}>
      <Nav.Item>
        <Nav.Link eventKey="san-pham">Quản lý Sản phẩm</Nav.Link>
        {/* <Nav.Link href="/">Quản lý Sản phẩm</Nav.Link> */}
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="don-hang">Quản lý Đơn hàng</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="danh-muc">Quản lý Danh mục</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default AdminNavBar;
