import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterContainer>
    <p>Built with React by Team 10 - GKS (Giuseppe - Kit - Samantha)</p>
    <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>;
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
