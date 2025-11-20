export const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground border-t h-[96px] flex items-center justify-center">
      <p>
        &copy; {new Date().getFullYear()} Barathraj Devarajan. All rights
        reserved.
      </p>
    </footer>
  );
};
