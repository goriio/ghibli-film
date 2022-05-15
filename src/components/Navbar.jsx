import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  a {
    text-decoration: none;
  }
`;
export const Title = styled.h1`
  font-size: 1.75rem;
`;

export function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">
        <Title>
          <span style={{ color: 'var(--color-text-default)' }}>Ghibli</span>
          Film
        </Title>
      </Link>
    </StyledNavbar>
  );
}
