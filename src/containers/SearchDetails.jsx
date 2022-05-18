import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Films } from '../components/Films';
import { Spinner } from '../components/Spinner';
import { api } from '../lib/api';

export function SearchDetails() {
  const { query } = useParams();

  const [films, setFilms] = useState(null);

  const getFilms = async () => {
    const response = await api.get('/films');
    setFilms(
      response.data.filter((film) =>
        film.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getFilms();
  }, [query]);

  return (
    <>
      <h2>Results for: {query}</h2>
      {films ? (
        films.length ? (
          <Films films={films} />
        ) : (
          <p>No Result</p>
        )
      ) : (
        <Spinner />
      )}
    </>
  );
}
