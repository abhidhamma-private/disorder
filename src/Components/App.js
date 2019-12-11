import React from 'react';
import { gql } from 'apollo-boost';
import styled, { ThemeProvider } from 'styled-components';
import { useQuery } from 'react-apollo-hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Router from './Router';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

const Grid = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 1fr 14fr;
  height: 100vh;
`;

export default () => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      {isLoggedIn ? (
        <Grid>
          <Router isLoggedIn={isLoggedIn} />
        </Grid>
      ) : (
        <Wrapper>
          <Router isLoggedIn={isLoggedIn} />
        </Wrapper>
      )}

      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </ThemeProvider>
  );
};
