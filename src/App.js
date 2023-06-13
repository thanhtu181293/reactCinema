import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import  './assets/style/main.scss';
import UserTemplate from './template/UserTemplate';
import AdminTemplate from './template/AdminTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routeUser, routeAdmin } from './routes/menu-routes';
import PageNotFound from './containers/PageNotFound';
import BookingTicketPage from './containers/UserTemplate/BookingTicketPage/BookingTicketPage';

/**
 * Show user route
 * @param {*} routes 
 */
const showUserLayout = (routes) => {
    
  if (routes && routes.length > 0) {
    return routes.map ((item, index) => {
      return (
        <UserTemplate key = {index} exact = {item.exact} path = {item.path} Component = {item.component}></UserTemplate>
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
        {showUserLayout(routeUser)}
        {showAdminLayout(routeAdmin)}
        <Route path = "/booking-ticket/:maLichChieu" component ={BookingTicketPage} />
        <Route path = "" component = {PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
