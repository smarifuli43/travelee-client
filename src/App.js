import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';

import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ManageOrder from './pages/ManageOrder/ManageOrder';
import AddService from './pages/AddService/AddService';
import MyOrder from './pages/MyOrder/MyOrder';
import Book from './pages/Book/Book';



function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/manageorder'>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path='/book'>
           <Book></Book>
            </PrivateRoute>
            <PrivateRoute path='/addservice'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/myorder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
