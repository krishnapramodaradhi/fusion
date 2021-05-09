import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import Header from './components/Layout/Header';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import User from './pages/User';

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          {!isLoggedIn && <Redirect to="/login" />}
          {isLoggedIn && <Redirect to="/user" />}
        </Route>
        <Route path="/login">
          {!isLoggedIn && <Login />}
          {isLoggedIn && <Redirect to="/" />}
        </Route>
        <Route path="/user">
          {isLoggedIn && <User />}
          {!isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
