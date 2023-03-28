import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserApi from "../API/UserApi";
import {
  Button,
  Card,
  Container,
  Col,
  Row,
  Form,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "..//App";

function ResetPassword() {
  const [formState, setFormState] = useState(true);
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  // const handleShowModal = () => setShowModal(true);
  let navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/signin");
  };
  const [isDisableResendButton, setDisableResendButton] = useState(false);
  const resendEmailToResetPassword = async () => {
    setDisableResendButton(true);
    await UserApi.resendEmailToResetPassword(email);
    setDisableResendButton(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .test("checkExistsEmail", "Email này không tồn tại.", async (email) => {
          // call api
          const isExists = await UserApi.existsByEmail(email);
          // console.log(isExists);
          return isExists;
        }),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // call api
        await UserApi.requestResetPassword(values.email);
        // message
        setEmail(values.email);
        setShowModal(true);
      } catch (error) {
        // redirect page error server
        navigate("/error");
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-md-center">
        <Col xl={6} sm={6}>
          <Card className="form-center">
            <Card.Header className="text-center">
              <Card.Title>Reset Password</Card.Title>
              <Card.Text>Nhập email để reset password</Card.Text>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                {/* email */}
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Vui lòng nhập email của bạn"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <Form.Text className="text-danger">
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                  </Form.Text>
                </Form.Group>
                {/* button */}
                <div className="mt-3"></div>
                <Form.Group className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(values) => setFormState(values)}
                    disabled={formik.isSubmitting}
                  >
                    Reset password
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal reset password */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        {/* Header */}
        <Modal.Header closeButton>
          <Modal.Title>Bạn cần xác nhận hành động reset password</Modal.Title>
        </Modal.Header>

        {/* Body */}
        <Modal.Body>
          <p className="mb-0">
            Chúng tôi đã gửi một email đến địa chỉ <b>{email}</b>.
          </p>
          <p className="mb-0">Vui lòng kiểm tra email để reset password.</p>
        </Modal.Body>

        {/* Footer */}
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={resendEmailToResetPassword}
            disabled={isDisableResendButton}
          >
            Gửi lai
          </Button>
          <Button variant="primary" onClick={redirectToLogin}>
            Đăng nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ResetPassword;
