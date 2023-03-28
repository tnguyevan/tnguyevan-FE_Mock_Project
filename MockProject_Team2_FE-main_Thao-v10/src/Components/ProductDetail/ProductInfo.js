import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
function ProductInfo(props) {
  let { ProductDetail } = props;
  const { id } = useParams();
  let [color, SetColor] = useState("");
  let [size, SetSize] = useState("");
  let userid = localStorage.getItem("id");
  let [qty, SetQty] = useState(1);
  let {createCartItem} = props;
  let handleAddtoCart = () => {
    let newCartItem = {
      userId: userid,
      productId: id,
      quantity: qty
    }
    console.log("item",newCartItem);
    createCartItem(newCartItem);
  }
  return (
    <div className='mx-4 px-4 mt-5'>

      <h4>{ProductDetail.name}</h4>
      <h5 className='my-0 py-0 h5 text-decoration-line-through'>
        <CurrencyFormat value={ProductDetail.price} displayType={'text'} thousandSeparator={true} suffix={' ₫'} />
      </h5>
      <h3 className='text-danger fw-bold'> <CurrencyFormat value={ProductDetail.salePrice} displayType={'text'} thousandSeparator={true} suffix={' ₫'} /> </h3>
      <i className="bi bi-star-fill text-warning"></i>
      <i className="bi bi-star-fill text-warning"></i>
      <i className="bi bi-star-fill text-warning"></i>
      <i className="bi bi-star-half text-warning"></i>
      <i className="bi bi-star text-warning"></i>
      <br />
      <p className='mt-4 mb-0'> Lựa chọn màu sắc</p>

      <div key='inline-radio mt-0'>
        <Form.Check inline onChange={e => SetColor(e.target.value)} className='bg-danger text-danger px-4' label="3" type='radio' name='color' />
        <Form.Check inline onChange={e => SetColor(e.target.value)} className='bg-warning text-warning px-4' label="3" type='radio' name='color' />
        <Form.Check inline onChange={e => SetColor(e.target.value)} className='bg-success text-success px-4' label="3" type='radio' name='color' />
        <Form.Check inline onChange={e => SetColor(e.target.value)} className='bg-secondary text-secondary px-4' label="3" type='radio' name='color' />
      </div>
      <div key='inline-radio'>
        <p className='mt-4 mb-0'> Lựa chọn size</p>
        <Form.Check inline className='px-4' label="XS" type='radio' name='color' />
        <Form.Check inline onChange={e => SetSize(e.target.value)} className='px-4' label="S" type='radio' name='color' />
        <Form.Check inline onChange={e => SetSize(e.target.value)} className='px-4' label="M" type='radio' name='color' />
        <Form.Check inline onChange={e => SetSize(e.target.value)} className='px-4' label="L" type='radio' name='color' />
        <Form.Check inline onChange={e => SetSize(e.target.value)} className='px-4' label="XL" type='radio' name='color' />
      </div>
      <p>{ProductDetail.describe}</p>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFormik101" className="position-relative">
            <Form.Label>Số lượng</Form.Label>
            <Form.Control type="number" name="firstName" onChange={e=>SetQty(e.target.value)} value={1} />
           
          </Form.Group>


        </Row>
      </Form>
      <Button type='submit' variant="danger text-white mt-5" onClick={handleAddtoCart}><i className="bi bi-cart3"></i> Thêm vào giỏ hàng</Button>
    </div>
  );
}

export default ProductInfo;