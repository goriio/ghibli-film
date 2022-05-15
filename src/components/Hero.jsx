import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './Container';

const StyledHero = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

const HeroBackground = styled.img`
  width: 100%;
  height: 100%;
  background: var(--color-fg-default);
  object-fit: cover;
  transition: 200ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const HeroContent = styled(Container)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  left: 1rem;
  bottom: 2rem;
`;

const Title = styled.div`
  padding: 0.5rem 1rem;
  background: var(--color-fg-default);
  color: var(--color-text-default);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Info = styled.span`
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  background: var(--color-fg-wash);
  color: var(--color-text-wash);
`;

export function Hero({ hero }) {
  return (
    <Link to={`/film/${hero.id}`}>
      <StyledHero>
        <HeroBackground src={hero.movie_banner} />
        <HeroContent>
          <Title>
            {hero.original_title}
            <br />
            {hero.title}
          </Title>
          <Infos>
            <Info>{hero.director}</Info>
            <Info>{hero.release_date}</Info>
            <Info>{hero.running_time} mins</Info>
          </Infos>
        </HeroContent>
      </StyledHero>
    </Link>
  );
}
