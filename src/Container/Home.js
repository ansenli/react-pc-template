import React, { Component ,Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import styles from './Home.module.less'
import { Card,Timeline, Row, Col  } from 'antd';
import homeImg from '@/assets/home.jpg';

const { Meta } = Card;
@withRouter
class Home extends Component{
  render() {
    return (
      <Fragment>
        <Row className = {styles.container}>
          <Col span={8}>
            <Card
              style={{ width: 300,margin:'auto' }}
              hoverable
              cover={<img alt="首页信息" src={homeImg} />}
            >
              <Meta title="圆通科技-前端学习交流群" description="欢迎大家加群一起学习交流" />
            </Card>
          </Col>
          <Col span={8} offset={2}>
            <h3 className = {styles.title} >脚手架安装流程</h3>
            <Timeline>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Home;