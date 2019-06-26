import React, { Component ,Fragment} from 'react'

import { Menu, Icon, Switch } from 'antd';

const { SubMenu } = Menu;

class MenuCommon extends React.Component {
  state = {
    theme: 'Light',
    current: '1',
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>表格</span>
              </span>
            }
          >
            <Menu.Item key="1">表格一</Menu.Item>
            <Menu.Item key="2">表格二</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>表单</span>
              </span>
            }
          >
            <Menu.Item key="5">表单一</Menu.Item>
            <Menu.Item key="6">表单二</Menu.Item>
            <SubMenu key="sub3" title="卡片">
              <Menu.Item key="7">卡片一</Menu.Item>
              <Menu.Item key="8">卡片二</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="mail" />
                <span>标签页</span>
              </span>
            }
          >
            <Menu.Item key="9">标签页一</Menu.Item>
            <Menu.Item key="10">标签页二</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default MenuCommon;