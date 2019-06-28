import React,{Component,Fragment} from 'react'
import { Menu,Icon } from 'antd';
import { NavLink,withRouter } from 'react-router-dom'
import MenuConfig from '@/config/menuConfig'
import './index.module.less'
const { SubMenu } = Menu;

@withRouter
class NavLeft extends Component {
  state = {
    currentKey: ''
  }
  handleClick = ({item, key}) => {
    const { history } = this.props;
    history.push(key)
    if (key === this.state.currentKey) {
      return false;
    }
    this.setState({
      currentKey: key
    })
  }
  homeHandleClick = () => {
    this.setState({
      currentKey: ""
    });
  };
  componentWillMount() {
    const MenuTreeNode = this.renderMenu(MenuConfig);
    let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
    this.setState({
      currentKey,
      MenuTreeNode
    })
  }
  // 这个地方用的非常巧妙
  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu 
            title = {
              <span>
                <Icon type = {item.icon} />
                <span>{item.title}</span>
              </span>
            } 
            key={item.key}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <Icon type={item.icon} />
          <span>{item.title}</span>
        </Menu.Item>
      )
    })
  }
  render() {
    return (
      <Fragment>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>圆通科技</h1>
        </div>
        <Menu 
          onClick={this.handleClick}
          selectedKeys={[this.state.currentKey]}
          theme="dark"
          mode="inline"
          >
          {this.state.MenuTreeNode}      
        </Menu>
      </Fragment>
    )
  }
}
export default NavLeft