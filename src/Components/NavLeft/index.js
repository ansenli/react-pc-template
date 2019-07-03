import React,{Component,Fragment} from 'react';
import { Menu,Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import MenuConfig from '@/config/menuConfig';
import './index.module.less';
import './golbal.less';
const { SubMenu } = Menu;

@withRouter
class NavLeft extends Component {
  state = {
    currentKey: '',
    openKey:'',
  }
  handleClick = ({item, key}) => {
    const { history } = this.props;
    history.push(key)
    if (key === this.state.currentKey) {
      return false;
    }
    this.setState({
      currentKey: key,
    })
  }
  componentWillMount() {
    const MenuTreeNode = this.renderMenu(MenuConfig);
    let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
    let openKey = `/${currentKey.split('/')[1]}`
  
    this.setState({
      currentKey,
      MenuTreeNode,
      openKey
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
          defaultOpenKeys= {[this.state.openKey]}
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