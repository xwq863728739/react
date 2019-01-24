import React from "react";
import Square from "../square";
import Func from "../func";
import axios from "axios";
import http from "../../utils/http";
import api from "../../utils/api";
import config from "../../utils/config";
// import { Skeleton } from "antd";
import Pie from "../charts/pie/index";
import Column from "../charts/column/index";
import { Row, Col } from "antd";

// import { Divider } from 'antd';
export default class page2 extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 0,
      loading: true
    };
  }

  // 在组件完成更新后立即调用。在初始化时不会被调用。
  componentDidMount() {
    let params = {
      reportSelectType: 1,
      userId: 0,
      custmentId: 0,
      begTime: "2019-01-16T01:36:29.136Z",
      endTime: "2019-01-16T01:36:29.136Z"
    };
    const GetShopReport = `${config.baseUrl}${api.GetShopReport}`;
    http.post(GetShopReport, params).then(res => {
      console.log(res.status, this.state.status);
      setTimeout(() => {
        this.setState({ status: "2000", loading: false });
      }, 2000);
    });
  }
  // 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  render() {
    return (
      <Row>
        <Col span={12}>
          <Column />
        </Col>
        <Col span={12}>
          <Pie />
        </Col>
      </Row>
    );
  }
}
