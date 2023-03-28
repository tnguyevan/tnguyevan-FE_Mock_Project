import React, { useEffect, useState } from "react";
import { Form, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeleteProductAPI,
  actionGetListProductAPI,
  actionUpdateQuantityAPI,
} from "../redux/action/CartAction";
import { AiFillDelete } from "react-icons/ai";
import CurrencyFormat from "react-currency-format";
import { getCartItemAPI } from "../API/CartItemAPI";

function CartItems(props) {
  let id = localStorage.getItem("id");
  const dispatch = useDispatch();
  let stateRedux = useSelector((state) => state);
  console.log("stateRedux:", stateRedux);
  let listProduct = useSelector(
    (stateRedux) => stateRedux.listProductRedux.listProduct
  );

  console.log("lids", listProduct);

  let [pro, setPro] = useState([]);
  let fetchgetPro = () => {
    getCartItemAPI(id).then((res) => {
      console.log("kq", res.content);
      setPro(res.content);
    });
  };
  let handleClickDelete = (idProduct) => {
    dispatch(actionDeleteProductAPI(idProduct));
    fetchgetPro();
  };
  let onChangeQuantity = (event, productId) => {
    // console.log(event.target.value);
    // console.log(event);
    // console.log(productId);
    let quantity = event.target.value;
    dispatch(actionUpdateQuantityAPI(productId, id, quantity)); //userId 1
  };

  useEffect(() => {
    dispatch(actionGetListProductAPI(id)); // truyền userId vào
    fetchgetPro();
    // console.log("hj");
  }, []);
  let items = "";
  items = pro.map((product, index) => {
    console.log(product);
    console.log(index);
    return (
      <div>
        <Table key={index}>
          <tbody>
            <tr>
              <td width={200}>
                <Image
                  // src="/images/jpgoods_61_345589.webp"
                  src={"/images/" + product.productImageImage1}
                  className=""
                  height="200px"
                />
              </td>
              <td colSpan={2}>
                <p className="text-sm-start fw-bold">{product.productName}</p>
                <p className="text-sm-start">Size: L</p>
                <p className="text-sm-start">
                  Giá:{" "}
                  <CurrencyFormat
                    thousandSeparator={true}
                    displayType={"text"}
                    value={
                      product.productSalePrice
                        ? product.productSalePrice
                        : product.productPrice
                    }
                    decimalSeparator={"."}
                    suffix={"  VND"}
                    thousandSpacing={"3"}
                  />
                  {/* {product.productSalePrice
                      ? product.productSalePrice
                      : product.productPrice} */}
                </p>
                <p className="text-sm-start">
                  {" "}
                  Số lượng
                  <Form.Select
                    size="sm"
                    onChange={(e) => {
                      onChangeQuantity(e, product.productId);
                    }}
                  >
                    <option>{product.quantity ? product.quantity : 1}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Form.Select>
                </p>

                <p className="text-sm-start ">
                  <AiFillDelete
                    className="fs-3"
                    onClick={() => handleClickDelete(product.productId)}
                  />
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  });
  return <>{items}</>;
}

export default CartItems;
