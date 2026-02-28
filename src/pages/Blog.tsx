import { GradientText } from '@/components/ui/gradient-text';
import { blogPosts } from '@/data/blog-posts';
import { FaArrowLeft, FaBookOpen, FaGithub } from 'react-icons/fa6';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type ResourceLink = {
  label: string;
  url: string;
};

const seriesByPostId: Record<string, string> = {
  'bundlers-101': 'Bundler 101',
  'webpack-fundamentals': 'Bundler 101',
  'rspack-for-react-teams': 'Bundler 101',
  'vite-dev-experience': 'Bundler 101',
  'other-bundlers-brief': 'Bundler 101',
  'choose-bundler': 'Bundler 101',
};

const resourcesByPostId: Record<string, ResourceLink[]> = {
  'bundlers-101': [
    { label: 'Webpack Docs', url: 'https://webpack.js.org/' },
    { label: 'webpack/webpack', url: 'https://github.com/webpack/webpack' },
  ],
  'webpack-fundamentals': [
    { label: 'Webpack Concepts', url: 'https://webpack.js.org/concepts/' },
    { label: 'webpack/webpack', url: 'https://github.com/webpack/webpack' },
  ],
  'rspack-for-react-teams': [
    { label: 'Rspack Docs', url: 'https://rspack.dev/' },
    {
      label: 'web-infra-dev/rspack',
      url: 'https://github.com/web-infra-dev/rspack',
    },
  ],
  'vite-dev-experience': [
    { label: 'Vite Docs', url: 'https://vite.dev/guide/' },
    { label: 'vitejs/vite', url: 'https://github.com/vitejs/vite' },
  ],
  'other-bundlers-brief': [
    { label: 'Rollup Docs', url: 'https://rollupjs.org/' },
    { label: 'evanw/esbuild', url: 'https://github.com/evanw/esbuild' },
  ],
  'choose-bundler': [
    {
      label: 'Module Federation Guide',
      url: 'https://module-federation.io/guide/start/quick-start',
    },
    {
      label: 'module-federation/core',
      url: 'https://github.com/module-federation/core',
    },
  ],
};

export const BlogPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId?: string }>();
  const [activeSeries, setActiveSeries] = useState<string>('Bundler 101');

  const seriesTags = useMemo(() => {
    const unique = new Set(Object.values(seriesByPostId));
    return Array.from(unique);
  }, []);

  const activePost = useMemo(() => {
    if (!postId) return undefined;
    return blogPosts.find((post) => post.id === postId);
  }, [postId]);

  const filteredPosts = useMemo(
    () => blogPosts.filter((post) => seriesByPostId[post.id] === activeSeries),
    [activeSeries],
  );

  const hasInvalidPostParam = Boolean(postId) && !activePost;

  useEffect(() => {
    if (hasInvalidPostParam) {
      navigate('/blog', { replace: true });
    }
  }, [hasInvalidPostParam, navigate]);

  useEffect(() => {
    if (activePost) {
      const series = seriesByPostId[activePost.id];
      if (series) setActiveSeries(series);
    }
  }, [activePost]);

  if (postId && activePost) {
    return (
      <div className="min-h-[calc(100vh-160px)] px-4 pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 rounded-2xl border border-border/70 bg-card/40 p-5 backdrop-blur dark:border-border/50">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/50 px-3 py-1.5 text-sm font-medium hover:border-primary/40"
              >
                <FaArrowLeft className="h-4 w-4" />
                Back to Blogs
              </button>
              <span className="text-sm text-muted-foreground">/</span>
              <p className="text-sm font-medium text-foreground">{activePost.title}</p>
            </div>
          </div>

          <article className="rounded-2xl border border-border/70 bg-card/45 p-6 backdrop-blur md:p-8 dark:border-border/50">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                {activePost.track === 'core' ? 'Core' : 'Deep-dive'}
              </span>
              <span className="text-xs text-muted-foreground">
                {activePost.readTime}
              </span>
            </div>

            <h1 className="text-2xl font-bold md:text-4xl">{activePost.title}</h1>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {activePost.summary}
            </p>

            <div className="mt-8 space-y-8">
              {activePost.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="mb-3 text-xl font-bold md:text-2xl">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 leading-7 text-foreground/95">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-4 list-disc space-y-1.5 pl-5 text-foreground/90">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.codeExample && (
                    <div className="mt-5 overflow-hidden rounded-xl border border-border/70">
                      <div className="flex items-center justify-between border-b border-border/60 bg-secondary/75 px-4 py-2">
                        <p className="text-sm font-medium">
                          {section.codeExample.title}
                        </p>
                        <span className="text-xs uppercase tracking-wide text-muted-foreground">
                          {section.codeExample.language}
                        </span>
                      </div>
                      <pre className="overflow-x-auto bg-[#16240f] p-4 text-sm leading-6 text-[#e3f0d7]">
                        <code>{section.codeExample.code}</code>
                      </pre>
                    </div>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border/60 bg-background/40 p-4 md:p-5 dark:border-border/50">
              <p className="mb-2 text-sm font-semibold text-primary">Key takeaways</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                {activePost.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-foreground">Links</p>
              <div className="flex flex-wrap gap-2">
                {(resourcesByPostId[activePost.id] ?? []).map((link) => {
                  const isGithub = link.url.includes('github.com');

                  return (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-secondary/60 px-3 py-1.5 text-xs text-foreground/90 hover:border-primary/40 hover:text-foreground"
                    >
                      {isGithub ? (
                        <FaGithub className="h-3.5 w-3.5" />
                      ) : (
                        <FaBookOpen className="h-3.5 w-3.5" />
                      )}
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-160px)] px-4 pt-24 pb-10 md:pt-28 md:pb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur md:p-10 dark:border-border/50">
          <p className="inline-flex rounded-full border border-primary/35 bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Build Tools Series
          </p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">
            <GradientText>Blogs</GradientText>
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Practical frontend build engineering notes from my experience with
            Webpack, Rspack, Vite, monorepos, and microfrontend architecture.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2.5">
          {seriesTags.map((series) => {
            const isActive = activeSeries === series;
            return (
              <button
                key={series}
                type="button"
                onClick={() => setActiveSeries(series)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border/70 bg-card/45 text-foreground/85 hover:border-primary/40 hover:text-foreground'
                }`}
              >
                {series}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <button
              key={post.id}
              type="button"
              onClick={() => navigate(`/blog/${post.id}`)}
              className="rounded-xl border border-border/70 bg-card/35 p-4 text-left transition-colors hover:border-primary/30"
            >
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                <span>{post.track === 'core' ? 'Core' : 'Deep-dive'}</span>
                <span>{post.readTime}</span>
              </div>
              <p className="text-lg font-semibold leading-snug">{post.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{post.summary}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
