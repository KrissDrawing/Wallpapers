import React from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

const Wrapper = Styled.header`
width:100%;
display:flex;
justify-content:center;
z-index:999;
`;

const Nav = Styled.nav`
width:100%;
height:5vh;
background-color: rgb(255,200,0);
display:flex;
justify-content:center;
align-items:center;
`;

const NavItem = Styled(NavLink)`
padding:10px;
text-decoration:none;
color:#fff;
`;
const Header = () => (
  <Wrapper>
    <Nav>
      {/* <button onClick={() => window.localStorage.clear()}>CLEAR LS</button>
      <button onClick={() => console.log(window.localStorage)}>SHOW LS</button> */}
      <NavItem to="">Home</NavItem>
      <NavItem to="fav">Favorite</NavItem>
    </Nav>
  </Wrapper>
);

export default Header;
