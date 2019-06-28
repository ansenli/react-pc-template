import React ,{Component,Fragment} from 'react';
import { Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import LayoutHeader from 'Components/Header';
import LayoutFooter from 'Components/Footer/index';
import NavLeft from 'Components/NavLeft';
import styles from './index.module.less'

const { Header, Footer, Sider, Content } = Layout;



export default class Admin extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

    render() {
        return (
          <Fragment>
            <Layout className = {styles.container_layout}  style={{backgroundColor: 'red'}} >
              <Sider className = {styles.container_sider} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                  <NavLeft />
              </Sider>
              <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >
                  <LayoutHeader/>
                </Header>
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
          </Fragment>
        )
    }
}