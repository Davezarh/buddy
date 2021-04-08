import React from 'react';
import { StyledLink, Logo, Wrapper } from './Navigation.styles';
const Naviagtion = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>Studdy Buddy</h1>
      </Logo>
      <StyledLink to="/"> Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink to="/logout">Logout</StyledLink>
    </Wrapper>
  );
};
export default Naviagtion;
