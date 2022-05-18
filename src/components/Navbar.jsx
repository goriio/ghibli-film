import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Searchbar } from './Searchbar';

export const StyledNavbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
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
      <Searchbar />
    </StyledNavbar>
  );
}
