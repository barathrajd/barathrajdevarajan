export const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/60 h-[96px] flex items-center justify-center bg-background/40 backdrop-blur">
      <p>
        &copy; {new Date().getFullYear()} Barathraj Devarajan. All rights
        reserved.
      </p>
    </footer>
  );
};
