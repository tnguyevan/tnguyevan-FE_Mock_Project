import "./App.css";
import { routes } from "./Router/Route";
import Menu from "./Components/Menu";
import Toast from "react-bootstrap/Toast";

import ToastContainer from "react-bootstrap/ToastContainer";
import { useDispatch, useSelector } from "react-redux";
import toastrReducer from "./redux/reducers/toastrReducer";
import { TOASTR_HIDE } from "./redux/action/actionTypes";
function App() {
  const dispatch = useDispatch();
  const toastr = useSelector(toastrReducer);
  const onCloseHide = () => {
    dispatch({
      type: TOASTR_HIDE,
    });
  };
  return (
    <>
      <ToastContainer className="p-3" position="top-end">
        <Toast
          onClose={onCloseHide}
          show={toastr.toastr.isShow}
          animation={false}
          delay={3000}
          autohide
        >
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{toastr.toastr.title}</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>{toastr.toastr.message}</Toast.Body>
        </Toast>
      </ToastContainer>
      <div>
        <Menu />
        {routes}
      </div>
    </>
  );
}

export default App;
