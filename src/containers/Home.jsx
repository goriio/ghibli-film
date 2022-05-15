import { useEffect } from 'react';
import { useState } from 'react';
import { Films } from '../components/Films';
import { Hero } from '../components/Hero';
import { Spinner } from '../components/Spinner';
import { api } from '../lib/api';

export function Home() {
  const [films, setFilms] = useState(null);

  const getFilms = async () => {
    const response = await api.get('/films');
    setFilms(response.data);
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      {films ? <Hero hero={films[2]} /> : <Spinner />}

      <h2>All Films</h2>
      {films ? <Films films={films} /> : <Spinner />}
    </>
  );
}
