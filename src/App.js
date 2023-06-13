import React from 'react';
import logo from './logo.svg';
import './App.css';
import  './assets/style/main.scss';
import HomeTemplate from './template/HomeTemplate';
import AdminTemplate from './template/AdminTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routeHome, routeAdmin } from './routes/menu-routes';
import PageNotFound from './containers/PageNotFound';

/**
 * Show home route
 * @param {*} routes 
 */
const showHomeLayout = (routes) => {
    
  if (routes && routes.length > 0) {
    return routes.map ((item, index) => {
      return (
        <HomeTemplate key = {index} exact = {item.exact} path = {item.path} Component = {item.component}></HomeTemplate>
      )
    })
  }
}

/**
 * Show Admin route
 * @param {*} routes 
 */
const showAdminLayout = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map ((item, index) => {
      return (
        <AdminTemplate key = {index} exact = {item.exact} path = {item.path} Component = {item.component}></AdminTemplate>
      )
    })
  }
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {showHomeLayout(routeHome)}
        {showAdminLayout(routeAdmin)}
        <Route path = "" component = {PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
