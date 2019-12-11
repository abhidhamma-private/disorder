import React from 'react';
import styled from 'styled-components';
const Feed = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  align-self: center;
  justify-self: center;
  background: ${props => props.theme.INDIGO};
`;

const Text = styled.div`
  color: white;
  align-self: center;
  justify-self: center;
`;

export default () => (
  <>
    <Feed>
      <Text>
        <h1>로그인성공^-^//</h1>
      </Text>
    </Feed>
  </>
);
