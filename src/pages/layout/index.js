import React from "react";
import { Layout, Menu, Icon, Spin, Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Page1 from "../page1";
import Page2 from "../page2";
import Page3 from "../page3";
import Person from "../person";
require("./style.css");
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    openKey: "",
    selectedKey: this.props.location.pathname //选中
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
    if(!this.state.collapsed){
        this.setState({
            openKey:''
        })
    }else{
        this.update()

    }
  };
  update() {
    console.log("this.props.history", this.props.history.location);
    const { pathname } = this.props.history.location;
    console.log("change", pathname);
    let path = pathname.split("/");
    if (pathname.split("/").length == 3) {
      this.setState({ openKey: "/" + path[1] });
      this.setState({ selectedKey: pathname });
    }
    if (pathname.split("/").length < 3) {
      this.setState({ openKey: "" });
    }
  }
  componentDidMount() {
    this.props.history.listen(() => {
        this.update()
    });
    this.update();
  }
  menuClick = e => {
    this.setState({ selectedKey: e.key });
  };
  onOpenChange = k => {
    if (k.length > 1) {
      this.setState({ openKey: k[k.length - 1] });
    } else {
      this.setState({ openKey: "" });
    }
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <NavLink to="/mine/person">
            <span
              target="_blank"
              rel="noopener noreferrer"
              href="javascript:void(0)"
            >
              个人中心个人中心个人中心
            </span>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            修改密码
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            安全退出
          </a>
        </Menu.Item>
      </Menu>
    );
    console.log(this.props, this.state.openKey, "props");
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            onClick={this.menuClick}
            defaultSelectedKeys={["/page1"]}
            selectedKeys={[this.state.selectedKey]}
            openKeys={[this.state.openKey]}
            // openKeys={[this.state.openKey]}
            onOpenChange={this.onOpenChange}
          >
            <Menu.Item key="/page1">
              <NavLink to="/page1">
                <Icon type="user" />
                <span>nav 1</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/page2">
              <NavLink to="/page2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/page3">
              <NavLink to="/page3">
                <Icon type="upload" />
                <span>nav 3</span>
              </NavLink>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="/mine"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>我的空间</span>
                </span>
              }
            >
              <Menu.Item key="/mine/person">
                <NavLink to="/mine/person">
                  <Icon type="video-camera" />
                  <span>个人中心</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="20">Option 10</Menu.Item>
              {/* <SubMenu key="sub55" title="Submenu">
              <Menu.Item key="/person">个人中心</Menu.Item>
              <Menu.Item key="22">Option 12</Menu.Item>
            </SubMenu> */}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link header-nav"
                href="#"
                style={{ float: "right", marginRight: "20px" }}
              >
                <Icon type="smile" style={{ marginRight: "10px" }} />
                小马哥
              </a>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route path="/mine/person" component={Person} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(SiderDemo);
