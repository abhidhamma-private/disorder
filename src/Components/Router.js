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
import styled from 'styled-components';

const Grid = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 1fr 14fr;
  height: 100vh;
`;

const LoggedInRoutes = () => (
  <>
    <Switch>
      <Grid>
        <Menu />
        <Route path={'/'} exact={true} component={People} />
      </Grid>
      <Grid>
        <Menu />
        <Route path={'/people'} component={People} />
      </Grid>
      <Grid>
        <Menu />
        <Route path={'/diary'} component={Diary} />
      </Grid>
      <Grid>
        <Menu />
        <Route path={'/alarm'} component={Alarm} />
      </Grid>
      <Grid>
        <Menu />
        <Route path={'/board'} component={Board} />
      </Grid>
      <Grid>
        <Menu />
        <Route path={'/me'} component={Me} />
      </Grid>
      <Grid>
        <Menu />
        <Route path={'/etc'} component={Etc} />
      </Grid>
      <Grid>
        <Menu />
        <Redirect from={'*'} to={'/'} />
      </Grid>
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
