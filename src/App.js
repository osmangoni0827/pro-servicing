
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dash-board/Dashboard/Dashboard';
import AddService from './components/Dash-board/AddService/AddService';
import Order from './components/Order/Order/Order';
import OrderPlace from './components/Order/OrderPlace/OrderPlace';
import DashboardOrderList from './components/Dash-board/DashboardOrderList/DasboardOrderList';
import AddAdmin from './components/Dash-board/AddAdmin/AddAdmin';
import OrderList from './components/Order/OrderList/OrderList';
import Review from './components/Order/Review/Review';
function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/order'>
          <Order></Order>
        </Route>
        <Route path='/orderplace'>
          <OrderPlace></OrderPlace>
        </Route>
        <Route path='/orderList'>
          <OrderList></OrderList>
        </Route>
        <Route path='/review'>
          <Review></Review>
        </Route>

        <Route path='/admin'>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/addService'>
          <AddService></AddService>
        </Route>
        <Route path='/dashboard/OrderList'>
          <DashboardOrderList></DashboardOrderList>
        </Route>
        <Route path='/makeAdmin'>
          <AddAdmin></AddAdmin>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
