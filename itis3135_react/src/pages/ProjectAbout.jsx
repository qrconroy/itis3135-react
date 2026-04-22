import { Link } from 'react-router-dom';

export default function ProjectAbout() {
  return (
    <>
      <header>
        <h1>About Us</h1>
        <nav>
          <Link to="/projects">Home</Link> |{' '}
          <Link to="/projects/about">About Us</Link> |{' '}
          <Link to="/projects/cpp">C++</Link> |{' '}
          <Link to="/projects/html">HTML</Link> |{' '}
          <Link to="/projects/js">JavaScript</Link>
        </nav>
      </header>
      <main>
        <p>This page is about the client project for Hayden Morris.</p>
      </main>
    </>
  );
}
