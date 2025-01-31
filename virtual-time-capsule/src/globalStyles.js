// src/globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    transition: all 0.3s ease;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.accent};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }
`;
