import React from 'react';
import styled from 'styled-components';

const Me = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: center;
  justify-items: center;
  align-items: center;
  margin-top: 5px;
  background: ${props => props.theme.blackColor};
  font-family: 'NanumB';
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export default () => (
  <>
    <Me>
      <h1>로그인성공^-^//</h1>
    </Me>
    <Me></Me>
  </>
);
