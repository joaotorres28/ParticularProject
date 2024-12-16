import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { 
  UserOutlined,ShareAltOutlined,CarOutlined,UploadOutlined,CompassOutlined,
  ExpandAltOutlined,GlobalOutlined,NodeExpandOutlined,NodeIndexOutlined,
  RightSquareOutlined} from "@ant-design/icons";
import "./App.css";
import RegisterComp from "../registerComp/RegisterComp";
import LoginComp from "../loginComp/LoginComp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  state = { 
    isAdmin: false,
    fileImporter:false,
    registerUser: false,
    loginUser: false,
    showUsers: false,
    wishToRegister: false,
    wishToLogin: false,
    isUser: false,
  };

  handleCreation = ({ key }) => {
    if (key == 1) { //User Registration
      this.setState({ 
        isAdmin: false,
        fileImporter:false,
        registerUser: true,
        loginUser: false,
        showUsers: false,
        wishToRegister: false,
        wishToLogin: false,
      });
    }
    if (key == 2) { //Show User
      this.setState({ 
        isAdmin: false,
        fileImporter:false,
        registerUser: false,
        loginUser: false,
        showUsers: true,
        wishToRegister: false,
        wishToLogin: false,
      });
    }
    if (key == 3) { //Login
      this.setState({ 
        isAdmin: false,
        fileImporter:false,
        registerUser: false,
        loginUser: true,
        showUsers: false,
        wishToRegister: false,
        wishToLogin: false,
      });
    }
  };

  handleRegistry = (value) => {
    this.setState({
      wishToRegister: value
    });
  }

  handleLogin = (value) => {
    this.setState({
      wishToLogin: value
    });
  }

  isUser = (value) => {
    this.setState({isUser: value});
  }
  
  render() {
    var menus;
    if((this.state.wishToRegister || this.state.wishToLogin) && !this.state.isUser){
      menus = 
      <Layout>
        <Sider width={250} className="site-layout-background">
          <Menu onClick={this.handleCreation} mode="inline" style={{ height: "100%", borderRight: 0 }}>
            <SubMenu key="sub1" icon={<NodeExpandOutlined />} style={{ fontSize: '15px'}} title="Consult Tables">
              <Menu.Item key="1">Users</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 280,}}>
            <ShowUsersComp display={this.state.showUsers}/>
          </Content>
        </Layout>
      </Layout>
    }else if((!this.state.wishToRegister || !this.state.wishToLogin) && !this.state.isUser){
      menus = 
      <Layout>
        <Layout>
          <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 280,}}>
            <RegisterUserComp display={this.state.registerUser} handleRegistry={this.handleRegistry} isUser={this.isUser}/>
            <LoginComp display={this.state.loginUser} handleLogin={this.handleLogin} isUser={this.isUser}/>
          </Content>
        </Layout>
      </Layout>
    }else if(this.state.isUser){
      menus = 
      <Layout>
        <Sider width={250} className="site-layout-background">

        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 280,}}>
            
          </Content>
        </Layout>
      </Layout>
    }else if(this.state.isAdmin){
      menus = 
      <Layout>
        <Sider width={250} className="site-layout-background">

        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 280,}}>
            <AdminComp display={this.state.AdminComp}/>
          </Content>
        </Layout>
      </Layout>
    }
    var navRegister;
    var navLogin;
    if(!this.state.wishToRegister && !this.state.wishToLogin){
      navRegister = <Menu.Item key="18">Account</Menu.Item>;
      navLogin = <Menu.Item key="20">Login</Menu.Item>;
    }else{
      navRegister = <Menu.Item></Menu.Item>;
      navLogin = <Menu.Item></Menu.Item>;
    }
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" onClick={this.handleCreation} mode="horizontal" defaultSelectedKeys={["0"]}>
            {navRegister}
            {navLogin}
          </Menu>
        </Header>
        {menus}
      </Layout>
    );
  }
}
export default App;