// imrc 
import React, { Component ,Fragment,Suspense } from 'react'
/* impr  */
// import React, { PureComponent } from 'react'
import  { connect } from 'react-redux'
import { asyncPostLogin } from '@/store/actions/common';
import { Button } from 'antd';
// 代码分割加载配合Suspense使用
const User = React.lazy(() => import('./User'));

// react-redux 中 connect 第一个参数是函数，第二个参数是对象
@connect(
  state=>(
    {
      loginInfo:state.common.loginInfo, // 页面获取方式 this.props.loginInfo
      registerInfo:state.common.registerInfo, // 页面获取方式 this.props.registerInfo
    }
  ),
  {
    asyncPostLogin
  }
)
class Login extends Component{
  nextTapLink = ()=>{
    const {history} = this.props;
    history.push('/home');
  }
  nextTapLogin = ()=>{
    const {asyncPostLogin} = this.props;
    asyncPostLogin();
  }
  render(){
    return (
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Button onClick={this.nextTapLink}>跳转到home页面</Button>
          <Button onClick={this.nextTapLogin}>触发登录接口</Button>
          <Button type="primary">Button1111</Button>
          <User></User>
        </Suspense>

      </Fragment>
    )
  }
}

export default Login;