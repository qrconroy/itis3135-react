import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <nav>
        <a href="https://github.com/qrconroy/qrconroy.github.io" target="_blank" rel="noreferrer">Github</a> |{' '}
        <a href="https://qrconroy.github.io/" target="_blank" rel="noreferrer">Landing</a> |{' '}
        <a href="https://webpages.charlotte.edu/qconroy/" target="_blank" rel="noreferrer">CLTWeb</a> |{' '}
        <Link to="/">ITIS 3135</Link> |{' '}
        <a href="https://www.freecodecamp.org/qconroy" target="_blank" rel="noreferrer">FreeCodeCamp</a> |{' '}
        <a href="https://www.linkedin.com/in/quinnrconroy/" target="_blank" rel="noreferrer">LinkedIn</a> |{' '}
        <a href="https://qrconroy.github.io/itis3135/" target="_blank" rel="noreferrer">ITIS3135.io</a> |{' '}
        {/* TODO: Replace YOUR-VERCEL-URL with your actual Vercel deployment URL */}
        <a href="https://YOUR-VERCEL-URL.vercel.app" target="_blank" rel="noreferrer">ITIS3135@Vercel</a>
      </nav>
      <p>Designed by Quinn Conroy</p>
      <p>Certified in <a href="https://www.freecodecamp.org/certification/qconroy/responsive-web-design-v9" target="_blank" rel="noreferrer">Responsive Web Design</a></p>
    </footer>
  );
}
