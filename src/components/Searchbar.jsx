import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledSearchbar = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  background: var(--color-fg-default);
  border-radius: 0.5rem;
  color: var(--color-text-default);
  border: none;

  &:focus {
    outline: 1px solid var(--color-primary-default);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 0.5rem;
  color: var(--color-primary-default);
`;

export function Searchbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch('');
    navigate(`/search/${search}`);
  };

  return (
    <StyledSearchbar onSubmit={handleSubmit}>
      <SearchInput
        type="search"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
      <SearchIcon />
    </StyledSearchbar>
  );
}
