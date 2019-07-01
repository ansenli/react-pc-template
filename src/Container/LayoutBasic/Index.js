import React ,{Component,Fragment} from 'react';
import { Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import LayoutHeader from 'Components/Header';
import LayoutFooter from 'Components/Footer/index';
import NavLeft from 'Components/NavLeft';
import styles from './index.module.less'
import './golbal.less';

const { Header, Footer, Sider, Content } = Layout;



export default class Admin extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Fragment>
        <Layout className = {styles.container_layout} >
          <Header style={{ background: '#fff', padding: 0 }} >
            <LayoutHeader/>
          </Header>
          <Layout>
            <Sider className = {styles.container_sider} 
              trigger={
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                />
              } 
              collapsible collapsed={this.state.collapsed} 
              onCollapse = {this.toggle}
            >
              <NavLeft />
            </Sider>
            <Layout>
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  {this.props.children}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                <LayoutFooter/>
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}