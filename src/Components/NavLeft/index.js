import React,{Component,Fragment} from 'react'
import { Menu,Icon } from 'antd';
import { NavLink,withRouter } from 'react-router-dom'
import MenuConfig from '@/config/menuConfig'
import './index.module.less'
import './index.css'
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
                {item.icon ? <Icon type = {item.icon} /> :null}
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
          {item.icon ? <Icon type = {item.icon} /> :null}
          <span>{item.title}</span>
        </Menu.Item>
      )
    })
  }
  render() {
    return (
      <Fragment>
        <Menu 
          onClick={this.handleClick}
          selectedKeys={[this.state.currentKey]}
          theme="light"
          mode="inline"
          style = {{bacground:'red'}}
          >
          {this.state.MenuTreeNode}      
        </Menu>
      </Fragment>
    )
  }
}
export default NavLeft