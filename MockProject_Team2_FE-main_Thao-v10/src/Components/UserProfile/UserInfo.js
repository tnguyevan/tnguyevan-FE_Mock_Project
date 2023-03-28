import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import avatar from "../../assets/img/avatar.jpg";
import UserApi from "../../API/UserApi";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TOASTR_SHOW } from "../../redux/action/actionTypes";
import { connect, useDispatch } from "react-redux";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const dispatch = useDispatch();
  const showNotification = (title, message) => {
    dispatch({
      type: TOASTR_SHOW,
      payload: {
        title: title,
        message: message,
      },
    });
  };
  const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  useEffect(() => {
    async function getProfile() {
      const result = await UserApi.getProfile();
      // TODO update storage
      // TODO update redux
      setUserInfo(result);
    }
    getProfile();
  }, []);
  const updateInfo = async () => {
    setShowModal(true);
    const userInfo = await UserApi.getProfile();
    setUserInfo(userInfo);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userInfo && userInfo.firstName ? userInfo.firstName : "",
      lastName: userInfo && userInfo.lastName ? userInfo.lastName : "",
      phoneNumber: userInfo && userInfo.phoneNumber ? userInfo.phoneNumber : "",
      address: userInfo && userInfo.address ? userInfo.address : "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(50, "Must be less than 50 characters")
        .required("Required"),
      lastName: Yup.string()
        .max(50, "Must be less than 50 characters")
        .required("Required"),
      phoneNumber: Yup.string()
        .min(10, "Must be 10 characters")
        .max(10, "Must be 10 characters")
        .required()
        .matches(phoneRegExp, "Phone number is not valid"),
      address: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      try {
        // call api
        await UserApi.updateInfo(
          values.firstName,
          values.lastName,
          values.phoneNumber,
          values.address
        );
        showNotification(
          "Cập nhật Profile thành công",
          "Profile của bạn đã được cập nhật!"
        );
        setShowModal(false);
        // gọi lại profile
        const result = await UserApi.getProfile();
        setUserInfo(result);
      } catch (error) {
        // redirect page error server
        showNotification("Không thể cập nhật Profile", "Đã có lỗi xảy ra!");
        setShowModal(false);
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title className="text-center">
            {userInfo.firstName + " " + userInfo.lastName}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            {userInfo.username}
          </Card.Subtitle>
          <Card.Text className="text-center">
            <dl>
              <dt>
                <Icon.EnvelopeAtFill /> Email
              </dt>
              <dd>{userInfo.email}</dd>
              <dt>
                <Icon.TelephoneFill /> Điện thoại
              </dt>
              <dd>{userInfo.phoneNumber ? userInfo.phoneNumber : "none"}</dd>
              <dt>
                <Icon.HouseDoorFill /> Địa chỉ
              </dt>
              {/* <dd>{userInfo.address}</dd> */}
              <dd>{userInfo.address ? userInfo.address : "none"}</dd>
            </dl>
          </Card.Text>
          <Card.Text className="text-end" onClick={updateInfo}>
            <Icon.PencilSquare />
            <small> Chỉnh sửa profile</small>
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link> */}
        </Card.Body>
      </Card>

      {/* Modal update profile */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        className="my-5"
      >
        {/* Header */}
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật thông tin người dùng</Modal.Title>
        </Modal.Header>

        {/* Body */}
        <Form onSubmit={formik.handleSubmit} className="my-4 mx-4">
          {/* first name */}
          <Form.Group controlId="firstName" className="mb-3">
            <Form.Label>Tên</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="Vui lòng nhập tên của bạn"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            <Form.Text className="text-danger">
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-danger">{formik.errors.firstName}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

          {/* last name */}
          <Form.Group controlId="lastName" className="mb-3">
            <Form.Label>Họ</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Vui lòng nhập họ của bạn"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            <Form.Text className="text-danger">
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-danger">{formik.errors.lastName}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

          {/* phoneNumber */}
          <Form.Group controlId="phoneNumber" className="mb-3">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              name="phoneNumber"
              type="text"
              placeholder="Vui lòng nhập số điện thoại của bạn"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            <Form.Text className="text-danger">
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-danger">{formik.errors.phoneNumber}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

          {/* address */}
          <Form.Group controlId="address" className="mb-3">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              name="address"
              type="text"
              placeholder="Vui lòng nhập địa chỉ của bạn"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            <Form.Text className="text-danger">
              {formik.touched.address && formik.errors.address ? (
                <div className="text-danger">{formik.errors.address}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

          {/* button */}
          <Form.Group className="mt-3 text-center">
            <Button
              variant="primary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Cập nhật Profile
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    </Container>
  );
};
export default UserInfo;
// export default connect(null, { setUserLoginInfo, setTokenLoginInfo })(UserInfo);
