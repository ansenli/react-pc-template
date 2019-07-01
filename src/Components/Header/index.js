import React, { Component ,Fragment} from 'react';
import {Row, Col} from 'antd';
import styles from './index.module.less';
import imgLogo from '@/assets/logo.png'
class Index extends Component{
  render(){
    return (
      <Fragment>
        <Row className = {styles.header}>
          <Col span={8} className = {styles.header_left} >
            <img src = {imgLogo} alt="加载失败" />
            <span>圆通科技信息</span>
          </Col>
          <Col span={8} offset={8} className = {styles.header_right} >
            个人信息
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default Index;