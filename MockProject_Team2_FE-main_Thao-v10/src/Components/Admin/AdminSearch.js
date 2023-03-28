import React from "react";
import * as Icon from "react-bootstrap-icons";
import { InputGroup, Form } from "react-bootstrap";

function AdminSearch() {
  return (
    <InputGroup className="mb-3">
      <Form.Select>
        <option value="1">Sản phẩm</option>
        <option value="2">Đơn hàng</option>
        <option value="3">Danh mục</option>
      </Form.Select>
      <Form.Control
        name="textsearch"
        type="text"
        placeholder="Nhập tên ký tự cần tìm"
      />
      <InputGroup.Text>
        <Icon.Search />
      </InputGroup.Text>
    </InputGroup>
  );
}

export default AdminSearch;
