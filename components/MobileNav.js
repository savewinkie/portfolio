export default function MobileNav() {
  return (
    <div className="mobile-nav">
      <a href="#home">
        <span className="mobile-nav-icon">⌂</span>
        index
      </a>
      <a href="#about">
        <span className="mobile-nav-icon">$</span>
        about
      </a>
      <a href="#projects">
        <span className="mobile-nav-icon">❯</span>
        projects
      </a>
      <a href="#pricing">
        <span className="mobile-nav-icon">€</span>
        pricing
      </a>
      <a href="#contact">
        <span className="mobile-nav-icon">@</span>
        contact
      </a>
    </div>
  );
}