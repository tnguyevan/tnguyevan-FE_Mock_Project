import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AdminListCatalog from "../Components/Admin/AdminListCatalog";
import AdminContainer from "../Container/AdminContainer";

function AdminPage(props) {
  const [key, setKey] = useState("link-0");
  const onNavigate = (key) => {
    console.log(key);
    setKey(key);
  };
  return (
    <div>
      <Container>
        <AdminContainer onNavigate={onNavigate} />
      </Container>
      <Container>
        {key === "san-pham" ? (
          <div> quan ly san pham</div>
        ) : key === "don-hang" ? (
          <div>quan ly don hang</div>
        ) : (
          <AdminListCatalog />
        )}
      </Container>
    </div>
  );
}

export default AdminPage;
