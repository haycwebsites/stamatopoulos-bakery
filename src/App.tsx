import { BrowserRouter, Routes, Route, Navigate }
  from 'react-router-dom';
import { HaycProvider } from './hayc/config-context';
import ScrollToTop from './components/ScrollToTop';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';
// HAYC Pipeline: Additional page imports are added
// here automatically during project creation.

function App() {
  return (
    <HaycProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu-grid" element={<MenuPage />} />
          <Route path="/menu-list" element={<MenuPage />} />
          <Route path="/menu-details" element={<MenuPage />} />
          {/* HAYC Pipeline: Additional routes are
              added here during project creation. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HaycProvider>
  );
}

export default App;
