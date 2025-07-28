import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ThematicAreas from '../pages/ThematicAreas';
import Contact from '../pages/Contact';
import LatestNews from '../sections/homes/LatestNews';

function AppRoutes() {
  return (
    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/thematic-areas" element={<ThematicAreas />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default AppRoutes