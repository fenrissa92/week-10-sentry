// src/components/Header.jsx
import React from "react";
import styled from "styled-components";

const Header = () => (
  <HeaderContainer>
    <h1>Scenes from a Memory</h1>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

export default Header;
