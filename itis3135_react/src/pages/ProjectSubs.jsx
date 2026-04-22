import { Link } from 'react-router-dom';

function ProjectNav() {
  return (
    <nav>
      <Link to="/projects">Home</Link> |{' '}
      <Link to="/projects/about">About Us</Link> |{' '}
      <Link to="/projects/cpp">C++</Link> |{' '}
      <Link to="/projects/html">HTML</Link> |{' '}
      <Link to="/projects/js">JavaScript</Link>
    </nav>
  );
}

export function ProjectCpp() {
  return (
    <>
      <header><h1>C++</h1><ProjectNav /></header>
      <main><p>C++ content coming soon.</p></main>
    </>
  );
}

export function ProjectHtml() {
  return (
    <>
      <header><h1>HTML</h1><ProjectNav /></header>
      <main><p>HTML learning content coming soon.</p></main>
    </>
  );
}

export function ProjectJs() {
  return (
    <>
      <header><h1>JavaScript</h1><ProjectNav /></header>
      <main><p>JavaScript learning content coming soon.</p></main>
    </>
  );
}
