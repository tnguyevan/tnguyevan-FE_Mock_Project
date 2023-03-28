import React, { useEffect, useState } from 'react';
import ImageCarousel from '../Components/ProductDetail/ImageCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductInfo from '../Components/ProductDetail/ProductInfo';
import Review from '../Components/ProductDetail/Review';
import { useParams } from 'react-router-dom';
import { getProductByIDAPI } from '../API/ProductDetailAPI';
import { getCommentByProductIDAPI, addNewComment } from '../API/CommentAPI'
import { addNewCartItem } from '../API/AddToCartAPI';
import { getCartItemAPI } from '../API/CartItemAPI';
import { useDispatch } from 'react-redux';
import { actionFetchListCartItemRedux } from "../redux/action/CartItemAction";
function ProductDetailContainer(props) {
    let userid = localStorage.getItem("id");
  const { id } = useParams();
  let [productDetail, setProductDetail] = useState([]);
  let [productImg, setproductImg] = useState([]);
  let [comment, setComment] = useState([]);
      let dispathRedux = useDispatch();
  let [cartItem, setCartItem] = useState("");
  

 let fetchCartItem = () => {
        getCartItemAPI(userid).then((res) => {
            setCartItem(res.totalElements);
                dispathRedux(actionFetchListCartItemRedux());
        })

    }

  //lay comment theo productid
  let fetchComment = () => {
    getCommentByProductIDAPI(id).then((res) => {
      setComment(res.content);
    
    })
  }
// them comment
  let addComment = (cm) => {
    addNewComment(cm).then((res) => {
    console.log("res",res);
  })
}

  // them vao gio hang

  let createCartItem = (cartItem) => {
    addNewCartItem(cartItem).then((res) => {
     getCartItemAPI(userid).then((response) => {
       setCartItem(response.totalElements);
       localStorage.setItem("cartItem",response.totalElements)
            
        })
        alert("da them vao gio hang");
  }
    )
  }
  //lay thong tin san pham theo id

  let fetchProductDetail = () => {
    getProductByIDAPI(id).then((response) => {

      setProductDetail(response);
      let img = [{
        original: '/images/' + response.image.image1,
        thumbnail: '/images/' + response.image.image1,
      },
      {
        original: '/images/' + response.image.image2,
        thumbnail: '/images/' + response.image.image2,
      },
      {
        original: '/images/' + response.image.image3,
        thumbnail: '/images/' + response.image.image3,
      },
      {
        original: '/images/' + response.image.image4,
        thumbnail: '/images/' + response.image.image4,
      },
      {
        original: '/images/' + response.image.image5,
        thumbnail: '/images/' + response.image.image5,
      },
      {
        original: '/images/' + response.image.image6,
        thumbnail: '/images/' + response.image.image6,
      }]
      setproductImg(img);

    })






  };
  // useEffect
  useEffect(() => {

    fetchProductDetail();
    fetchComment();
    fetchCartItem();
  }, []);

  return (

    <div>
      <Container className='my-5'>

        <Row>
          <Col lg={5} xl={5}><ImageCarousel ProductDetail={productImg} /></Col>
          <Col lg={7} xl={7}><ProductInfo ProductDetail={productDetail} createCartItem={createCartItem} /></Col>


        </Row>

        <Row>
            <Col lg={6} xl={6}> <Review Comment={comment} addComment={addComment} /></Col>

        </Row>
      </Container>

    </div>
  );
}

export default ProductDetailContainer;