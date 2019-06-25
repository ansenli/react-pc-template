import React, { Component } from 'react'
import { Form, Icon, Input, Button ,Row, Col } from 'antd';
class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.loginSubmit(values)
      }
    });
  };
  registerSubmit = (e)=>{
    e.preventDefault();
    this.props.registerSubmit();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={8}>
              <Button type="primary" htmlType="submit" >
                登录
              </Button>
            </Col>
            <Col span={8} offset={8}>
              <Button type="primary" onClick ={this.registerSubmit}>
                注册
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedNormalForm = Form.create({ name: 'WrappedNormalForm' })(NormalLoginForm);

export default WrappedNormalForm;