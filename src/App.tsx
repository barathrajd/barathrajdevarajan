import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/Home';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Lazy load non-critical page components
const BlogPage = lazy(() =>
  import('@/pages/Blog').then((module) => ({ default: module.BlogPage })),
);

// Reserve layout space to avoid footer jumps while route chunks load.
const PageLoader = () => (
  <div className="min-h-[calc(100vh-160px)] px-4 pt-24 pb-10 md:pt-28 md:pb-12">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-8 rounded-2xl border border-border/70 bg-card/40 p-6 md:p-10">
        <div className="mb-4 h-5 w-40 animate-pulse rounded bg-muted/70" />
        <div className="mb-3 h-10 w-2/3 animate-pulse rounded bg-muted/70" />
        <div className="h-5 w-3/4 animate-pulse rounded bg-muted/70" />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`blog-skeleton-${i}`}
            className="h-40 animate-pulse rounded-xl border border-border/70 bg-card/35"
          />
        ))}
      </div>
    </div>
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
            <Route path="/blog/:postId" element={<BlogPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
