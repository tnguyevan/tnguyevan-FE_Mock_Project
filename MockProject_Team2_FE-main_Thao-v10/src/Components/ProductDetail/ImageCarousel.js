import React, { useEffect } from 'react';


import ImageGallery from 'react-image-gallery';
function ImageCarousel(props) {
  let { ProductDetail } = props;

  let img = ProductDetail;

console.log("kq",ProductDetail);

//   const images = [
//   {
//     original: '/images/221011_category_w_sweat.jpeg',
//     thumbnail: '/images/221011_category_w_sweat.jpeg',
//   },
//   {
//     original: '/images/221011_category_w_cardigan.jpeg',
//     thumbnail: '/images/221011_category_w_cardigan.jpeg',
//   },
//   {
//     original: '/images/221011_category_w_tops.jpeg',
//     thumbnail: '/images/221011_category_w_tops.jpeg',
//   },
//   ];
// console.log(images);
  return (
    <div>
      <ImageGallery items={img} />    
    </div>
  );
}

export default ImageCarousel;