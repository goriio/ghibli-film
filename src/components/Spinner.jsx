import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 2rem auto;
  border: 4px solid var(--color-fg-default);
  border-top-color: var(--color-primary-default);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
