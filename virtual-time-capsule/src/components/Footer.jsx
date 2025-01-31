// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterContainer>
    <p>© 2025 Scenes from a Memory. All rights reserved.</p>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

export default Footer;
