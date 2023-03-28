import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserApi from "../api/UserApi";
import { Button, Card, Container, Col, Row, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../App";
import { TOASTR_SHOW } from "../redux/action/actionTypes";

function NewPassword() {
  const { token } = useParams();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(true);
  let navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/signin");
  };
  const showNotification = (title, message) => {
    dispatch({
      type: TOASTR_SHOW,
      payload: {
        title: title,
        message: message,
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Must be between 6 and 50 characters")
        .max(50, "Must be between 6 and 50 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .min(5, "Must be 5 characters or greater")
        .required("Required")
        .when("password", {
          is: (value) => (value && value.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Confirmed password does not match"
          ),
        }),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // call api
        await UserApi.resetPassword(token, values.password);
        // message
        showNotification("Reset Password", "Reset password thành công!");
        // redirect page error login
        redirectToLogin();
      } catch (error) {
        // redirect page error server
        navigate("/error");
      }
    },
  });
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-md-center">
        <Col xl={6} sm={6}>
          <Card className="form-center">
            <Card.Header className="text-center">
              <Card.Title>Reset Password</Card.Title>
              <Card.Text>Vui lòng nhập password mới của bạn</Card.Text>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                {/* password */}
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Vui lòng nhập password mới của bạn"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <Form.Text className="text-danger">
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-danger">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </Form.Text>
                </Form.Group>

                {/* confirmed password */}
                <Form.Group controlId="confirmPassword" className="mb-3">
                  <Form.Label>Xác nhận lại Password</Form.Label>
                  <Form.Control
                    name="confirmPassword"
                    type="password"
                    placeholder="Vui lòng nhập lại password mới của bạn"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />
                  <Form.Text className="text-danger">
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className="text-danger">
                        {formik.errors.confirmPassword}
                      </div>
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
    </Container>
  );
}

export default NewPassword;
