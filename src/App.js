
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dash-board/Dashboard/Dashboard';
import AddService from './components/Dash-board/AddService/AddService';
import OrderPlace from './components/Order/OrderPlace/OrderPlace';
import DashboardOrderList from './components/Dash-board/DashboardOrderList/DasboardOrderList';
import AddAdmin from './components/Dash-board/AddAdmin/AddAdmin';

import Review from './components/Order/Review/Review';
import { createContext, useState } from 'react';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import ManageService from './components/Dash-board/ManageService/ManageService';
import OrderList from './components/Order/OrderList/OrderList';
export const loggedInContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <loggedInContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>

          <PrivateRoute path='/admin/orderList'>
            <DashboardOrderList></DashboardOrderList>
          </PrivateRoute>
          <PrivateRoute path='/dashboard/orderplace'>
            <OrderPlace></OrderPlace>
          </PrivateRoute>
          <PrivateRoute path='/orderList'>
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path='/addReview'>
            <Review></Review>
          </PrivateRoute>

          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/makeAdmin'>
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path='/manageService'>
            <ManageService></ManageService>
          </PrivateRoute>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>

    </loggedInContext.Provider>

  );
}

export default App;
