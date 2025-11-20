import { GradientText } from '@/components/ui/gradient-text';

export const BlogPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <GradientText>Blog</GradientText>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
          Coming Soon
        </p>
        <p className="text-lg text-muted-foreground/80">
          I'm currently working on bringing you insightful articles about
          frontend development, build tools, and modern web technologies. Stay
          tuned!
        </p>
      </div>
    </div>
  );
};
