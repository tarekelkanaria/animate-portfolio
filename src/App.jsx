import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} end>
        <Route index element={<Home />} end />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio certificates={false} />} />
        <Route
          path="certificates"
          element={<Portfolio certificates={true} />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
