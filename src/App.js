import React, { Fragment,Suspense,lazy} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import configStore from './store';
import { Icon } from "antd";
import './App.css';
/* imd  */
const Home = lazy(()=>import('Container/Home'));
const Login = lazy(()=>import('Container/Login'));
const Register = lazy(()=>import('Container/Register'));
const User = lazy(()=>import('Container/User'));
const AuthRoute = lazy(()=>import('Components/AuthRoute'));
const store = configStore();
function App() {
  return (
    <Fragment>
      <Provider store = {store}>
        {/* 基于路由的代码分割 */}
        <BrowserRouter>
        {/*  */}
          <Suspense fallback={<Icon type="slack-square" spin style={{fontSize: 40,color:'rgb(129, 74, 150)'}} />}>
            <AuthRoute></AuthRoute>
            <Switch>
              <Route path="/home" exact component = {Home} ></Route>
              <Route path="/login" component = {Login} ></Route>
              <Route path="/register" component = {Register} ></Route>
              <Route path="/user" component = {User} ></Route>
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
