import React, { Component ,Fragment,lazy} from 'react'
import {BrowserRouter, Route, NavLink,withRouter} from 'react-router-dom';
// import MenuCommon from 'Components/MenuCommon'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import TableConent from 'Container/TableConent/Index';
import styles from './Home.module.less'
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
@withRouter
class Home extends Component{
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  changeMenu = ({ item, key, keyPath, domEvent }) =>{
    const {history,location} = this.props;
    //history.push('home/table')
    console.log("history....",history)
    console.log("item",item)
    console.log("key",key)
    console.log("keyPath",keyPath)
  }
  render() {
    return (
      <Fragment>
        <Layout className = {styles.container_layout}  style={{backgroundColor: 'red'}} >
          <Sider className = {styles.container_sider} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" onClick = {this.changeMenu} >
              <Menu.Item key="1">
                <Icon type="desktop" />
                <span>
                  <NavLink to='/home/table'>首页详情</NavLink>
                </span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>Form表单</span>
                  </span>
                }
              >
                <Menu.Item key="3">表单展示</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>表格展示</span>
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
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Route path='/home/table' exact component={TableConent}/>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>yto-react-web-cli ©2019 经营开发部_前端组</Footer>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}

export default Home;