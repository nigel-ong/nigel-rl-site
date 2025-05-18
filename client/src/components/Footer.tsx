const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          &copy; {currentYear} Nigel Ong. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground/70 mt-2">
          Designed using modern web technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
