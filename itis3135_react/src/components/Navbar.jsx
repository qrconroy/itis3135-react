import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="primary-nav">
        <Link to="/">ITIS 3135</Link> |{' '}
        <Link to="/contract">Academic Contract</Link> |{' '}
        <Link to="/documentation">Documentation</Link> |{' '}
        <Link to="/product">Product</Link> |{' '}
        <Link to="/inventory">Inventory</Link> |{' '}
        <Link to="/cards">Cards</Link> |{' '}
        <Link to="/intro-form">Intro Form</Link>
      </nav>
      <nav className="secondary-nav">
        <Link to="/hobby">Hobby</Link> |{' '}
        <Link to="/projects">Client Project</Link>
      </nav>
    </div>
  );
}
