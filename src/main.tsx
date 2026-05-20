import {StrictMode, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.tsx';
import Privacy from './Privacy.tsx';
import Terms from './Terms.tsx';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
