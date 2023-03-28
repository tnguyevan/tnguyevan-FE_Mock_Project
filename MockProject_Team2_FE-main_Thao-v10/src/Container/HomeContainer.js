import React, { useEffect, useState } from "react";

import FilterByCatalog from "../Components/CatalogFilter/FilterByCatalog";
import HomeCarousel from "../Components/Home/HomeCarousel";
import NewProduct from "../Components/Home/NewProduct";
import GroupLeft from "../Components/Home/GroupLeft";
import GroupRight from "../Components/Home/GroupRight";
import { getCatalogListAPI } from "../API/CatalogAPI.js";
import { getProductListAPI, getAllByCatalogIdAPI } from "../API/ProductAPI.js";

function HomeContainer(props) {
  let [catalogList, setCatalogList] = useState([]);
  let [productList, setProductList] = useState([]);
  // let [productListByCatalogId, setProductListByCatalogId] = useState([]);
  // const { index } = useParams();
  let fetchCatalog = () => {
    getCatalogListAPI().then((response) => {
      console.log(response);
      setCatalogList(response);
    });
  };

  let fetchProduct = () => {
    getProductListAPI().then((response) => {
      console.log(response);
      setProductList(response);
    });
  };

  // let fetchProductByCatalogId = () => {
  //   getAllByCatalogIdAPI(index).then((response) => {
  //     console.log(response);
  //     setProductListByCatalogId(response);
  //   });
  // };

  // console.log(fetchProductByCatalogId);
  // useEffect(() => {
  //   fetchProductByCatalogId();
  // }, []);

  useEffect(() => {
    fetchCatalog();
    fetchProduct();
    // fetchProductByCatalogId();
  }, []);

  // list theo catalog
  let items = [];
  // for (let index = 0; index < catalogList.length; index++) {
  //   let fetchProductByCatalogId = () => {
  //     getAllByCatalogIdAPI(index).then((response) => {
  //       console.log(response);
  //       setProductListByCatalogId(response);
  //     });
  //   };
  //   useEffect(() => {
  //     fetchProductByCatalogId();
  //   }, []);
  // }

  // for (let index = 0; index < catalogList.length; index++) {
  //   if (index % 2 === 0) {
  //     items.push(
  //       <GroupLeft
  //         Product={productList}
  //         // Product={productListByCatalogId[index]}
  //         Catalog={catalogList[index]}
  //         key={index}
  //       />
  //     );
  //   } else {
  //     items.push(
  //       <GroupRight
  //         Product={productList}
  //         Catalog={catalogList[index]}
  //         key={index}
  //       />
  //     );
  //   }
  // }
  catalogList.map((catalog, index) => {
    if (index % 2 === 0) {
      items.push(
        <GroupLeft
          // Product={productListByCatalogId[index]}
          catalog={catalog}
          key={index}
        />
      );
    } else {
      items.push(<GroupRight catalog={catalog} key={index} />);
    }
  });

  return (
    <div className="text-center">
      <HomeCarousel />
      <FilterByCatalog Catalog={catalogList} />
      <NewProduct NewProductList={productList} />
      <img
        height={600}
        src="/images/big-sale-2018-website-banner-1000-x-500-pixels_v43.jpeg"
        className="img-fluid"
        alt=""
      />
      {items}
    </div>
  );
}

export default HomeContainer;
