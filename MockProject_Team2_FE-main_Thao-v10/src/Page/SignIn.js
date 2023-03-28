import {
  Button,
  Card,
  Container,
  Form,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import "..//App";
import UserApi from "../API/UserApi";
import LoginApi from "../API/LoginApi";
import { useState } from "react";
import Storage from "../storage/Storage";
import { connect, useDispatch } from "react-redux";
import { TOASTR_SHOW } from "../redux/action/actionTypes";
import {
  setUserLoginInfo,
  setTokenLoginInfo,
} from "../redux/action/userLoginIfoAction";

function SignIn(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(true);
  const [email, setEmail] = useState("");
  const [isDisableResendButton, setDisableResendButton] = useState(false);
  const resendEmailToActiveAccount = async () => {
    setDisableResendButton(true);
    await UserApi.resendEmailToActiveAccount(email);
    setDisableResendButton(false);
  };
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
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
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, "Must be between 6 and 50 characters")
        .max(50, "Must be between 6 and 50 characters")
        .required("Required")
        .test(
          "checkExistsUsername",
          "This username does not exist.",
          async (username) => {
            // call api
            const isExists = await UserApi.existsByUsername(username);
            // console.log(isExists);
            return isExists;
          }
        ),
      password: Yup.string()
        .min(6, "Must be between 6 and 50 characters")
        .max(50, "Must be between 6 and 50 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // // call api
        const result = await LoginApi.login(values.username, values.password);
        console.log(result);
        if (result.token === null || result.token === undefined) {
          // modal
          setEmail(result.email);
          setShowModal(true);
        } else {
          // save token to storage
          Storage.setToken(result.token);
          // save userinfo to storage
          Storage.setUserInfo(
            result.id,
            result.username,
            result.email,
            result.firstName,
            result.lastName,
            result.role,
            result.status
          );
          // save token & userinfo to redux
          props.setTokenLoginInfo(result.token);
          props.setUserLoginInfo(
            result.id,
            result.username,
            result.email,
            result.firstName,
            result.lastName,
            result.role,
            result.status
          );

          if (result.role === "[ADMIN]" || result.role === "[STAFF]") {
            // if user is staff or admin, navigate to admin page
            navigate("/admin");
          } else {
            // if user is customer, navigate to previous page
            navigate(-1);
          }
        }
      } catch (error) {
        if (error.status === 401) {
          // show notification
          showNotification("Log in Fail!", "Wrong Username or Password!");
        } else {
          // redirect page error server
          navigate("/error");
        }
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
            <Form onSubmit={formik.handleSubmit}>
              <Card.Header>
                <div className="mt-4 text-center">
                  <h2>Chào mừng bạn trở lại với Fashion Shop</h2>
                  <p className="lead">
                    Đăng nhập & Tận hưởng quá trình mua sắm
                  </p>
                </div>
              </Card.Header>
              <Card.Body>
                {/* username */}
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="Vui lòng nhập username của bạn"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  <Form.Text className="text-danger">
                    {formik.touched.username && formik.errors.username ? (
                      <div className="text-danger">
                        {formik.errors.username}
                      </div>
                    ) : null}
                  </Form.Text>
                </Form.Group>
                {/* password */}
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Vui lòng nhập password của bạn"
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
                  <Form.Text>
                    <Link to="/resetPassword">
                      <small>Quên password?</small>
                    </Link>
                  </Form.Text>
                </Form.Group>
              </Card.Body>
              <Card.Footer>
                <div className="mt-3"></div>
                <Form.Group className="text-center d-grid gap-2">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(values) => setFormState(values)}
                    disabled={formik.isSubmitting}
                  >
                    Đăng nhập
                  </Button>
                  <p className="text-muted">
                    <small>
                      Bạn đã có tài khoản chưa?{" "}
                      <Link to="/signup">Đăng ký ở đây</Link>
                    </small>
                  </p>
                </Form.Group>
              </Card.Footer>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Modal active account */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        {/* Header */}
        <Modal.Header>
          <Modal.Title>Bạn cần xác nhận tài khoản</Modal.Title>
        </Modal.Header>

        {/* Body */}
        <Modal.Body>
          <p className="mb-0">
            Chúng tôi đã gửi một email đến địa chỉ <b>{email}</b>.
          </p>
          <p className="mb-0">Hãy kiểm tra email để kích hoạt tài khoản.</p>
        </Modal.Body>

        {/* Footer */}
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={resendEmailToActiveAccount}
            disabled={isDisableResendButton}
          >
            Gửi lại
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

// export default SignIn;
export default connect(null, { setUserLoginInfo, setTokenLoginInfo })(SignIn);
