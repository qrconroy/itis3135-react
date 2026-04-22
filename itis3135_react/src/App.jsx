import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contract from './pages/Contract';
import Documentation from './pages/Documentation';
import Product from './pages/Product';
import Inventory from './pages/Inventory';
import Cards from './pages/Cards';
import IntroForm from './pages/IntroForm';
import Instructions from './pages/Instructions';
import Hobby from './pages/Hobby';
import Projects from './pages/Projects';
import ProjectOverview from './pages/ProjectOverview';
import ProjectAbout from './pages/ProjectAbout';
import { ProjectCpp, ProjectHtml, ProjectJs } from './pages/ProjectSubs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes inside Layout get the Footer automatically */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/product" element={<Product />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/intro-form" element={<IntroForm />} />
          <Route path="/instructions" element={<Instructions />} />

          {/* Projects sub-routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/overview" element={<ProjectOverview />} />
          <Route path="/projects/about" element={<ProjectAbout />} />
          <Route path="/projects/cpp" element={<ProjectCpp />} />
          <Route path="/projects/html" element={<ProjectHtml />} />
          <Route path="/projects/js" element={<ProjectJs />} />
        </Route>

        {/* Hobby has its own full-page layout with its own header/footer */}
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </BrowserRouter>
  );
}
