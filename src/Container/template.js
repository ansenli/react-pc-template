import React, { PureComponent ,Fragment,Suspense } from 'react';
import { Button } from 'antd';
class Demo extends PureComponent{
  render(){
    return (
      <Fragment>
        <Suspense fallback={<Icon type="slack-square" />}>
          <Button>dddddd</Button>
        </Suspense>
      </Fragment>
    )
  }
}
export default Demo;