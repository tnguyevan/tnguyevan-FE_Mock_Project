// UserOrderDetail
import React, { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { selectUserOrderDetail } from "../../redux/selector/userOrderDetailSelector";
import { getUserOrderDetailAction } from "../../redux/action/userOrderDetailAction";
import OrderDetailApi from "../../API/OrderDetailApi";

function priceFormatter(cell, row) {
  if (row.totalPayment) {
    return <span>{new Intl.NumberFormat().format(cell)} vnđ</span>;
  }
  return <span>{new Intl.NumberFormat().format(cell)} vnđ</span>;
}

const columns = [
  {
    dataField: "productName",
    text: "Tên sản phẩm",
  },
  {
    dataField: "price",
    text: "Giá",
    sort: true,
    formatter: priceFormatter,
  },
  {
    dataField: "quantity",
    text: "Số lượng",
    sort: true,
  },
  {
    dataField: "total",
    text: "Tổng tiền",
    sort: true,
    formatter: priceFormatter,
  },
];

// const data = [
//   {
//     productName: "Áo khoác dài",
//     price: 10000000,
//     quantity: 1,
//     total: 11500000,
//   },
//   {
//     productName: "Áo lông thỏ",
//     price: 4000000,
//     quantity: 3,
//     total: 12000000,
//   },
// ];

const UserOrderDetail = (props) => {
  const getUserOrderDetailList = props.getUserOrderDetailAction;
  useEffect(() => {
    const getOrderDetailList = async (oderId) => {
      try {
        const result = await OrderDetailApi.getOderDetailByOderId(oderId);
        const orderDetailLists = result.content;
        getUserOrderDetailList(orderDetailLists);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderDetailList(props.order.id);
  }, [getUserOrderDetailList, props.order.id]);

  return (
    <BootstrapTable
      headerWrapperClasses="userOrderDetailTable"
      keyField="id"
      data={props.userOrderDetail}
      columns={columns}
      hover
      condensed
      // bordered={false}
      // pagination={paginationFactory({sizePerPage: 5, sizePerPageList: [5, 10,25, 50]})}
      noDataIndication="Không có đơn hàng"
    />
  );
};

const mapGlobalStateToProps = (state) => {
  return {
    userOrderDetail: selectUserOrderDetail(state),
  };
};

export default connect(mapGlobalStateToProps, {
  getUserOrderDetailAction,
})(UserOrderDetail);
