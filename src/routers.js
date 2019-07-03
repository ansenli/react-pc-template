import React, { Component,Suspense,lazy} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Icon } from "antd";
const App = lazy(()=>import('@/App'));
const Login = lazy(()=>import('Container/Login'));
const Register = lazy(()=>import('Container/Register'));
const AuthRoute = lazy(()=>import('Components/AuthRoute'));
const LayoutBasic = lazy(()=>import('Container/LayoutBasic/Index'));
const Home = lazy(()=>import('Container/Home'));
const FormNorList = lazy(()=>import('Container/FormNorList/Index'));
const TableNorList = lazy(()=>import('Container/TableNorList/Index'));
const TableSpecList = lazy(()=>import('Container/TableSpecList/Index'));

export default class IRouter extends Component{
  render() {
    return (
      <Suspense fallback={<Icon type="slack-square" spin style={{fontSize: 40,color:'rgb(129, 74, 150)'}} />}>
        <HashRouter >
          <App>
            <AuthRoute></AuthRoute>
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/" render={() => 
                <LayoutBasic>
                  <Suspense fallback={<Icon type="slack-square" spin style={{fontSize: 40,color:'rgb(129, 74, 150)'}} />}>
                    <Switch>
                      <Route path="/home" component={Home}></Route>
                      <Route path="/form/norlist" component={FormNorList}></Route>
                      <Route path="/table/norlist" component={TableNorList}></Route>
                      <Route path="/table/speciallist" component={TableSpecList}></Route>
                    </Switch>
                    </Suspense>
                </LayoutBasic>
              }/>
              </Switch>
          </App>
        </HashRouter >
      </Suspense>
    )
  }
}