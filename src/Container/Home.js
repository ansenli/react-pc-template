import React, { Component ,Fragment,lazy} from 'react'
import {BrowserRouter, Route, NavLink,withRouter} from 'react-router-dom';
import styles from './Home.module.less'
@withRouter
class Home extends Component{
  render() {
    return (
      <Fragment>
      <div>首页主页面信息</div>

      </Fragment>
    );
  }
}

export default Home;