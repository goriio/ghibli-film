import { Outlet } from 'react-router-dom';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export function MainLayout() {
  return (
    <Container>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}
