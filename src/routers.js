import React, { Component,Suspense,lazy} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Icon } from "antd";

import App from '@/App'
import Login from 'Container/Login'
import Register from 'Container/Register'
import Home from 'Container/Home'
import FormNorList from 'Container/FormNorList/Index'
import TableNorList from 'Container/TableNorList/Index'
import TableSpecList from 'Container/TableSpecList/Index'
import LayoutBasic from 'Container/LayoutBasic/Index'
import AuthRoute from 'Components/AuthRoute'

// 后面添加下没有找到页面需要展示的页面
export default class IRouter extends Component{
    render() {
        return (
          <Suspense fallback={<Icon type="slack-square" spin style={{fontSize: 40,color:'rgb(129, 74, 150)'}} />}>
           <BrowserRouter>

              <App>
                <AuthRoute></AuthRoute>
                <Switch>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/" render={() => 
                      <LayoutBasic>
                          <Switch>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/form/norlist" component={FormNorList}></Route>
                            <Route path="/table/norlist" component={TableNorList}></Route>
                            <Route path="/table/speciallist" component={TableSpecList}></Route>
                          </Switch>
                      </LayoutBasic>
                  }/>
                  </Switch>
              </App>
           </BrowserRouter>
           </Suspense>
        )
    }
}