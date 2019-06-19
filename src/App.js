import React, { Fragment,Suspense,lazy} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import configStore from './store';
import styles from './App.module.less';
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
          <Suspense fallback={<div>努力加载中</div>}>
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
      <div className={styles.testa} >dfsdfsdfsd</div>
    </Fragment>
  );
}

export default App;
