import React, { PureComponent,Fragment } from 'react';
import  { connect } from 'react-redux';
import { asyncPostLogin } from '@/store/actions/common';
import { notification } from 'antd';
import WrappedNormalForm from 'Components/WrappedNormalForm';
import styles from './Login.module.less';

// react-redux 中 connect 第一个参数是函数，第二个参数是对象
@connect(
  state=>(
    {
      loginInfo:state.common.loginInfo, 
      registerInfo:state.common.registerInfo, 
    }
  ),
  {
    asyncPostLogin
  }
)
class Login extends PureComponent{
  nextTapLink = ()=>{
    const {history} = this.props;
    history.push('/home');
  }
  nextTapLogin = ()=>{
    const {asyncPostLogin} = this.props;
    asyncPostLogin();
  }
  registerSubmit = ()=>{
    const {history} = this.props;
    history.push('/register');
  }
   loginSubmit = async (values)=>{
    const {asyncPostLogin,history} = this.props;
    await asyncPostLogin().then(res=>{
      const message = res.payload.resCode.message;
      notification.success({
        message: message,
        description:`恭喜您${message}！！！！`,
        duration:1.5
      });
      history.push('/home')
    });
    
  }
  render(){
    return (
      <Fragment>
        <div className={styles.login_layout} >
          <WrappedNormalForm registerSubmit = {this.registerSubmit} loginSubmit = {this.loginSubmit} />
        </div>
      </Fragment>
    )
  }
}

export default Login;