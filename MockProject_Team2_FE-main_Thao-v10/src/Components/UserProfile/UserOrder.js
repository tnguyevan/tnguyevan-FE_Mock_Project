import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UserOrderList from "./UserOrderList";

const UserOrder = () => {
  const [key, setKey] = useState("DELIVERING");

  return (
    <Tabs
      id="controlled-tab-example"
      defaultActiveKey="DELIVERING"
      onSelect={(k) => setKey(k)}
      className="mb-3"
      justify
    >
      <Tab eventKey="DELIVERED" title="Đã vận chuyển">
        <UserOrderList status={key} />
      </Tab>
      <Tab eventKey="DELIVERING" title="Đang vận chuyển">
        <UserOrderList status={key} />
      </Tab>
      <Tab eventKey="WAITING" title="Chờ gửi hàng">
        <UserOrderList status={key} />
      </Tab>
      <Tab eventKey="CANCELED" title="Hủy đơn">
        <UserOrderList status={key} />
      </Tab>
    </Tabs>
  );
};
export default UserOrder;
