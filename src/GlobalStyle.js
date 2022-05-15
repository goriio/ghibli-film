import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
  
  :root {
    --color-primary-default: hsl(225, 80%, 50%);
    --color-bg-default: hsl(225, 77%, 5%);

    --color-fg-default: hsl(225, 50%, 15%);
    --color-fg-wash: hsl(225, 45%, 10%);

    --color-text-default: hsl(0, 0%, 96%);
    --color-text-wash: hsl(0, 0%, 90%);
    --color-text-gray: hsl(0, 0%, 85%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: var(--color-bg-default);
    color: var(--color-text-default);
    line-height: 1.5;
  }

  h1, h2, h3, h4 {
    line-height: 2;
    font-weight: 600;
  }

  h1 {
      font-size: 2rem;
  }

  h2 {
      font-size: 1.75rem;
  }

  h3 {
      font-size: 1.5rem;
  }

  h4 {
      font-size: 1.25rem;
  }

  a {
    text-decoration: none;
    transition: 200ms ease;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      color: var(--color-text-default);
    }
  }
`;
