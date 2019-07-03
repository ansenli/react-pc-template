
import { PureComponent } from 'react'
import {withRouter } from 'react-router-dom'
// 这里使用修饰符，需要在config-override.js 中进行配置
@withRouter
class Home extends PureComponent{
  componentDidMount(){  
    const {history,location} = this.props;
    if(location.pathname === '/'){
      history.push('/login')
    }else {
      return null;
    }
   
  }
  render(){
    return null;
  }
}
export default Home;