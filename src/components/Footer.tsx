const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-heading font-bold gradient-text text-base">GrowVanta Media</span>
      <span>© {new Date().getFullYear()} GrowVanta Media. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
