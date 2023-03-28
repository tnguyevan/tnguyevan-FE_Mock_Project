import React, { useState } from 'react';
import Moment from 'moment';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
function Review(props) {
  let { Comment } = props;
  let [comment, setComment] = useState("");
  const { id } = useParams();
  let userid = localStorage.getItem("id");
  let { addComment } = props;
//them comment
  let handleComment = () => {
    let commentNew = {
       userId: userid,
    productId:id,
    content: comment
    }
    addComment(commentNew);
    console.log(commentNew);
  }
console.log(comment);
    let review = "";
    review = Comment.map((rev, index) => {
        return (
            <div key={index}>
                <p className='fw-bold my-0 fw-bold'> <i className="bi bi-person fs-2"></i>{rev.userUsername}</p>
                <div className='mb-3 pt-0'>
                    <p className='my-0 py-0'>Đánh giá:  <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                        <i className="bi bi-star text-warning"></i>
                        <i className="bi bi-star text-warning"></i></p>

                </div>
                <p>{rev.content}</p>
                <small>Ngày đánh giá: {Moment(rev.createDate).format('YYYY-MM-DD')}</small>
                <hr />
            </div>
        )
    })
    return (
        <div className='mt-5'>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nhập nội dung đánh giá sản phẩm</Form.Label>
       <Form.Control
          as="textarea"
              onChange={e => setComment(e.target.value)}
          style={{ height: '100px' }}
        />
        <Form.Text className="text-muted">
          Bạn phải đăng nhập để đánh đánh giá sản phẩm
        </Form.Text>
      </Form.Group>

     
      <Button variant="danger" type="submit" onClick={handleComment}>
        Gửi Đánh giá
      </Button>
    </Form>
            <h4 className='mt-5'>Đánh giá - Nhận xét từ Khách Hàng</h4>
            <p>Đánh giá trung bình:  <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-half text-warning"></i>
                <i className="bi bi-star text-warning"></i></p>

            <hr />


            {review}




        </div>
    );
}

export default Review;