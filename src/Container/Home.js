import React, { Component ,Fragment,lazy} from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
// import MenuCommon from 'Components/MenuCommon'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import TableConent from 'Container/TableConent';
import styles from './Home.module.less'
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class Home extends Component{
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  
  render() {
    return (
      <Fragment>
        <Layout className = {styles.container_layout} >
        <Sider className = {styles.container_sider} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
        {/* <Layout>
          <Sider>
            <MenuCommon/>
            <NavLink to="/home/table">About</NavLink>
          </Sider>
          <Content>
              <div className={styles.container_content}>
                {this.props.children}
              </div>
          </Content>
        </Layout> */}
        {/* <Row style={{width:'100%',height: '100%'}}>
          <Col span={6} >
            
          </Col>
          <Col span={8}>     
            
          </Col>
        </Row> */}
      </Fragment>
    );
  }
}

export default Home;