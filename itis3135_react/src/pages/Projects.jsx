import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Projects() {
  return (
    <>
      <header>
        <h1>Hayden Morris' Front-end Learning</h1>
        <Navbar />
      </header>
      <main>
        <nav>
          <Link to="/projects">Home</Link> |{' '}
          <Link to="/projects/about">About Us</Link> |{' '}
          <Link to="/projects/cpp">C++</Link> |{' '}
          <Link to="/projects/html">HTML</Link> |{' '}
          <Link to="/projects/js">JavaScript</Link>
        </nav>
        <nav style={{ marginTop: '8px' }}>
          <Link to="/projects/overview">Project Overview</Link>
        </nav>
      </main>
    </>
  );
}
