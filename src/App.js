import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from './Auth/pages/Login/LoginPage';
import RegisterPage from './Auth/pages/Register/RegisterPage';
import UsersPage from './Auth/pages/users/userPage';
import HeaderComponent from './shared/components/head/headerComponent';

function App() {
  
  return (
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage/>
          </Route>
          <Route path="/users" exact>
            <UsersPage/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;