// imrc 
import React, { Component ,Fragment} from 'react'
/* impr  */
// import React, { PureComponent } from 'react'

import { Button } from 'antd';

class User extends Component{
  render(){
    return (
      <Fragment>
        <Button>user懒加载.....</Button>
      </Fragment>
    )
  }
}

export default User;