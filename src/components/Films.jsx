import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  transition: 100ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.span`
  font-weight: 600;
  color: var(--color-text-default);
`;

const OriginalTitle = styled.span`
  font-size: 0.9rem;
  color: var(--color-text-wash);
`;

function Film({ film }) {
  return (
    <Link to={`/film/${film.id}`}>
      <Wrapper>
        <ImageWrapper>
          <Image src={film.image} alt={film.title} />
        </ImageWrapper>
        <Title>{film.title}</Title>
        <OriginalTitle>{film.original_title}</OriginalTitle>
      </Wrapper>
    </Link>
  );
}

const StyledFilms = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
`;

export function Films({ films }) {
  return (
    <StyledFilms>
      {films.map((film) => {
        return <Film key={film.id} film={film} />;
      })}
    </StyledFilms>
  );
}
