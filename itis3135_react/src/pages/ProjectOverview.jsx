import { Link } from 'react-router-dom';

export default function ProjectOverview() {
  return (
    <>
      <header>
        <h1 style={{ fontFamily: 'Arial, sans-serif' }}>Project Overview</h1>
        <nav>
          <Link to="/projects">Home</Link> |{' '}
          <Link to="/projects/about">About Us</Link> |{' '}
          <Link to="/projects/cpp">C++</Link> |{' '}
          <Link to="/projects/html">HTML</Link> |{' '}
          <Link to="/projects/js">JavaScript</Link>
        </nav>
      </header>
      <main>
        <p>This project is for my friend Hayden Morris. Hayden is a Computer Science student
          in another concentration, but is interested in learning more about front end development.
          He has little-to-no experience with HTML, CSS, and JavaScript, but is eager to learn. This project's
          goal is to give Hayden a ground-level understanding of front end development, enough so he could make a
          barebones website on his own.
        </p>
        <ul>
          <li>Name: Hayden Morris</li>
          <li>Organization: UNC Charlotte CCI</li>
          <li>Email: hmorri35@charlotte.edu</li>
        </ul>
        <h2>Page Design</h2>
        <p>This page will serve as a hidden, admin page that overviews the project.
          On it, we will give a general introduction/overview of front end development.
          We will display 3 interactive cards that will have links to 3 pages, as well as the nav-bar.
        </p>
      </main>
    </>
  );
}
