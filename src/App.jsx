import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FilmDetails } from './containers/FilmDetails';
import { Home } from './containers/Home';
import { GlobalStyle } from './GlobalStyle';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/film/:id" element={<FilmDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
