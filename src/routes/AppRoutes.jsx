import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ThematicAreas from '../pages/ThematicAreas';
import Contact from '../pages/Contact';

function AppRoutes() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/thematic-areas" element={<ThematicAreas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        {/* </BrowserRouter> */}
    </div>
  )
}

export default AppRoutes