// App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { NavigationProvider } from './contexts/NavigationContext';

// Lazy load pages with proper type annotations
const Home = React.lazy(() => import('./pages/Home'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Resume = React.lazy(() => import('./pages/Resume'));

// Simple loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </NavigationProvider>
  );
};

export default App;