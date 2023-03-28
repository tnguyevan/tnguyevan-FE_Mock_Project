// UserOrderList
import UserOrderDetail from "./UserOrderDetail";
import React, { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { selectUserOrderList } from "../../redux/selector/userOrderListSelector";
import { getUserOrderListAction } from "../../redux/action/userOrderListAction";
import OrderListApi from "../../API/OrderListApi";

function priceFormatter(cell, row) {
  if (row.totalPayment) {
    return (
      <span>
        <strong>{new Intl.NumberFormat().format(cell)} vnđ</strong>
      </span>
    );
  }
  return <span>{new Intl.NumberFormat().format(cell)} vnđ</span>;
}

const columns = [
  {
    dataField: "id",
    text: "ID đơn hàng",
    sort: true,
  },
  {
    dataField: "oderDate",
    text: "Ngày đặt hàng",
    sort: true,
  },
  {
    dataField: "totalPayment",
    text: "Giá trị đơn",
    sort: true,
    formatter: priceFormatter,
  },
  {
    dataField: "status",
    text: "Tình trạng",
    sort: true,
  },
];

const UserOrderList = (props) => {
  const getUserOrderList = props.getUserOrderListAction;
  const expandRow = {
    onlyOneExpanding: true,
    renderer: (row) => {
      return <UserOrderDetail order={row} />;
    },
  };
  useEffect(() => {
    const getOrderList = async (status) => {
      try {
        const result = await OrderListApi.getAllByStatus(status);
        const orderLists = result.content;
        getUserOrderList(orderLists);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderList(props.status);
  }, [getUserOrderList, props.status]);

  // console.log("props", props.userOrderLists);
  // let Watting = [];
  // for (let index = 0; index < props.userOrderLists.length; index++) {
  //   if (props.userOrderLists[index].status==="CANCELED") {
  //     Watting.push(props.userOrderLists[index])
  //   }
  // }

  return (
    <BootstrapTable
      keyField="id"
      data={props.userOrderLists}
      columns={columns}
      expandRow={expandRow}
      condensed
      bordered={false}
      // pagination={paginationFactory({sizePerPage: 5, sizePerPageList: [5, 10,25, 50]})}
      noDataIndication="Không có đơn hàng nào"
    />
  );
};
// export default UserOrderList;

const mapGlobalStateToProps = (state) => {
  return {
    userOrderLists: selectUserOrderList(state),
  };
};

export default connect(mapGlobalStateToProps, {
  getUserOrderListAction,
})(UserOrderList);
