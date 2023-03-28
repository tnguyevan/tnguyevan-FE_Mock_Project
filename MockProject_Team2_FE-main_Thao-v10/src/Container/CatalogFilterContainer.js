import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CatalogProduct from "../Components/CatalogFilter/CatalogProduct";
import { getAllByCatalogIdAPI } from "../API/ProductAPI.js";
import { Container, Row, Col } from "react-bootstrap";
import PriceFilter from "../Components/CatalogFilter/PriceFilter";

function CatalogFilterContainer(props) {
  let [productList, setProductList] = useState([]);
  let [priceFilter, setPriceFilter] = useState("");
  let [productFilter, setProductFilter] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  // callback function
  let getPriceFilter = (data) => {
    setPriceFilter(data);
  };
  //lay danh sach san pham
  let fetchProduct = () => {
    getAllByCatalogIdAPI(id).then((response) => {
      setProductList(response.content);
      setProductFilter(response.content);
      //   console.log(response);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // loc san pham theo gia ban
  let filterProduct = () => {
    let filterArray1 = [];
    let filterArray2 = [];
    let filterArray3 = [];
    let filterArray4 = [];
    let filterArray5 = [];
    //neu khong co lua chon nao duoc chon thi lay toan bo san pham
    if (priceFilter.length === 0) {
      setProductFilter(productList);
    }
    //loc gia nho hon 500
    if (priceFilter.includes("1")) {
      for (let index = 0; index < productList.length; index++) {
        const element = productList[index];
        if (element.salePrice <= 500000) {
          filterArray1.push(element);
        }
      }
      let total = [].concat(
        filterArray1,
        filterArray2,
        filterArray3,
        filterArray4,
        filterArray5
      );
      setProductFilter(total);
    }
    //loc gia tu 500 toi 800
    if (priceFilter.includes("2")) {
      for (let index = 0; index < productList.length; index++) {
        const element = productList[index];
        if (element.salePrice <= 800000 && element.salePrice > 500000) {
          filterArray2.push(element);
        }
      }
      let total = [].concat(
        filterArray1,
        filterArray2,
        filterArray3,
        filterArray4,
        filterArray5
      );
      setProductFilter(total);
    }
    //loc gia tu 800 toi 1tr
    if (priceFilter.includes("3")) {
      for (let index = 0; index < productList.length; index++) {
        const element = productList[index];
        if (element.salePrice <= 1000000 && element.salePrice > 800000) {
          filterArray3.push(element);
        }
      }
      let total = [].concat(
        filterArray1,
        filterArray2,
        filterArray3,
        filterArray4,
        filterArray5
      );
      setProductFilter(total);
    }
    //loc gia tu 1tr toi 2tr
    if (priceFilter.includes("4")) {
      for (let index = 0; index < productList.length; index++) {
        const element = productList[index];
        if (element.salePrice <= 2000000 && element.salePrice > 1000000) {
          filterArray4.push(element);
        }
      }
      let total = [].concat(
        filterArray1,
        filterArray2,
        filterArray3,
        filterArray4,
        filterArray5
      );
      setProductFilter(total);
    }
    // lco gia hon 2tr
    if (priceFilter.includes("5")) {
      for (let index = 0; index < productList.length; index++) {
        const element = productList[index];
        if (element.salePrice > 2000000) {
          filterArray5.push(element);
        }
      }
      let total = [].concat(
        filterArray1,
        filterArray2,
        filterArray3,
        filterArray4,
        filterArray5
      );
      setProductFilter(total);
    }
  };
  useEffect(() => {
    filterProduct();
  }, [priceFilter]);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={3} lg={3} md={3} xl={3}>
            <PriceFilter getPriceFilter={getPriceFilter} />
          </Col>
          <Col sm={9} lg={9} md={9} xl={9}>
            <CatalogProduct ProductList={productFilter} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CatalogFilterContainer;
