import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Auth from '../Routes/Auth';
import Menu from '../Components/Menu';
import People from '../Routes/People';
import Diary from '../Routes/Diary';
import Alarm from '../Routes/Alarm';
import Board from '../Routes/Board';
import Etc from '../Routes/Etc';
import Me from '../Routes/Me';

const LoggedInRoutes = () => (
  <>
    <Menu />
    <Switch>
      <Route path={'/'} exact={true} component={People} />
      <Route path={'/people'} component={People} />
      <Route path={'/diary'} component={Diary} />
      <Route path={'/alarm'} component={Alarm} />
      <Route path={'/board'} component={Board} />
      <Route path={'/me'} component={Me} />
      <Route path={'/etc'} component={Etc} />
      <Redirect from={'*'} to={'/'} />
    </Switch>
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

const AppRouter = ({ isLoggedIn }) => {
  return (
    <HashRouter>
      <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
    </HashRouter>
  );
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
