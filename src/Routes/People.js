import React from 'react';
import styled from 'styled-components';

const Feed = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: center;
  justify-items: center;
  align-items: flex-start;
  padding-top: 5px;
  margin-top: 5px;
  background: ${props => props.theme.TEAL};
  font-family: 'NanumB';
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export default () => (
  <>
    <Feed>
      <h1>로그인성공^-^//</h1>
    </Feed>
  </>
);
