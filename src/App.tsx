import { Layout } from '@/components/Layout';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Lazy load page components
const HomePage = lazy(() =>
  import('@/pages/Home').then((module) => ({ default: module.HomePage })),
);
const BlogPage = lazy(() =>
  import('@/pages/Blog').then((module) => ({ default: module.BlogPage })),
);

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="text-muted-foreground">Loading...</div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
