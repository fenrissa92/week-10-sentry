// src/components/Header.jsx
import React from "react";
import styled from "styled-components";

const Header = () => (
  <HeaderContainer>
    <h1>Scenes from a Memory</h1>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary}; 
  color: ${({ theme }) => theme.colors.headerText} !important; /* Force color */
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-radius: ${({ theme }) => theme.borderRadius};

  h1 {
    color: ${({ theme }) => theme.colors.headerText} !important; /* Force color */
  }
`;


export default Header;