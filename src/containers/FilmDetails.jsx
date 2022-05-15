import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Spinner } from '../components/Spinner';
import { api } from '../lib/api';

const Header = styled.header`
  position: relative;
  height: 300px;
  margin-bottom: 4rem;
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
  background: var(--color-fg-default);
  object-fit: cover;
  filter: brightness(50%);
`;

const HeaderInfo = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  align-items: end;

  @media only screen and (min-width: 750px) {
    left: 10rem;
    right: 10rem;
  }
`;

const Poster = styled.img`
  width: 140px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  padding: 0.5rem 1rem;
  background: var(--color-fg-default);
  color: var(--color-text-default);
  font-size: 1rem;
  font-weight: 600;
`;

const OriginalTitle = styled.span`
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  background: var(--color-fg-wash);
  color: var(--color-text-wash);
`;

const Body = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Description = styled.p`
  margin-bottom: 2rem;
`;

const Rows = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 120px 1fr;
`;

const Left = styled.span`
  font-weight: 600;
`;

const Right = styled.span`
  color: var(--color-text-wash);
`;

export function FilmDetails() {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  const getFilm = async () => {
    const response = await api.get(`/films/${id}`);
    setFilm(response.data);
  };

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <>
      {film ? (
        <>
          <Header>
            <Banner src={film.movie_banner} alt={film.title} />
            <HeaderInfo>
              <Poster src={film.image} alt={film.title} />
              <Details>
                <Title>{film.title}</Title>
                <OriginalTitle>{film.original_title}</OriginalTitle>
              </Details>
            </HeaderInfo>
          </Header>
          <Body>
            <Description>{film.description}</Description>
            <Rows>
              <Left>Director</Left>
              <Right>{film.director}</Right>
              <Left>Producer</Left>
              <Right>{film.producer}</Right>
              <Left>Release Date</Left>
              <Right>{film.release_date}</Right>
              <Left>Running Time</Left>
              <Right>{film.running_time} mins</Right>
              <Left>RT Score</Left>
              <Right>{film.rt_score}</Right>
            </Rows>
          </Body>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
