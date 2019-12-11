import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import fLogo from '../assets/image/Facebook.svg';
import mLogo from '../assets/image/MessengerRGB.svg';

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const Tab = styled(Link)`
  z-index: 10;
  display: grid;
  > i {
    display: grid;
  }

  i > svg {
    width: 50%;
    height: 50%;
    align-self: center;
    justify-self: center;
    color: ${props => props.theme.primaryColor};
  }

  &.active {
    & {
      border-bottom: 2px solid ${props => props.theme.ActiveColor};
      border-radius: 5px;
    }
    > i > svg {
      color: ${props => props.theme.ActiveColor};
    }
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr 1fr;
  margin-left: 10px;
`;

const FLogo = styled.img`
  max-width: 100%;
  height: auto;
  align-self: center;
  justify-self: end;
`;

const MLogo = styled.img`
  max-width: 50%;
  height: auto;
  align-self: center;
  justify-self: center;
  fill: ${props => props.theme.primaryColor};
`;

export default () => {
  function menuToggle(event) {
    //1.각 tab에게 active 클래스를 없애준다.
    document
      .querySelectorAll('div > a')
      .forEach(a => (a.className = a.className.replace(' active', '')));

    //2.클릭한 컴포넌트에 active클래스를 추가한다.
    if (
      !document
        .querySelector(`a[href="${event.currentTarget.getAttribute('href')}"]`)
        .className.includes('active')
    ) {
      if (event.currentTarget.getAttribute('href') === '/people') {
        document
          .querySelector('div > div > div:first-child')
          .setAttribute(
            'style',
            'display: grid;grid-template-columns: 3fr 4fr 1fr;margin-left: 10px;'
          );
      } else {
        document
          .querySelector('div > div > div:first-child')
          .setAttribute('style', 'display:none');
      }
      document.querySelector(
        `a[href="${event.currentTarget.getAttribute('href')}"]`
      ).className += ' active';
    }
  }

  return (
    <>
      <Header>
        <FLogo src={fLogo} alt="" />
        <div />
        <MLogo src={mLogo} alt="" />
      </Header>
      <Menu className="menu">
        <Tab to="/people" onClick={menuToggle} id={1} className="active">
          <Icon type="team" />
        </Tab>
        <Tab to="/diary" onClick={menuToggle} id={2}>
          <Icon type="read" />
        </Tab>
        <Tab to="/alarm" onClick={menuToggle} id={3}>
          <Icon type="sound" />
        </Tab>
        <Tab to="/board" onClick={menuToggle} id={4}>
          <Icon type="message" />
        </Tab>
        <Tab to="/me" onClick={menuToggle} id={5}>
          <Icon type="user" />
        </Tab>
        <Tab to="/etc" onClick={menuToggle} id={6}>
          <Icon type="menu" />
        </Tab>
      </Menu>
    </>
  );
};
