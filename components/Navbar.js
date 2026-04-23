export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        link<span>.dev</span>
      </a>

      <div className="nav-tabs">
        <a href="#home"     className="nav-tab active">index.js</a>
        <a href="#about"    className="nav-tab">about.js</a>
        <a href="#skills"   className="nav-tab">skills.js</a>
        <a href="#projects" className="nav-tab">projects.js</a>
        <a href="#contact"  className="nav-tab">contact.js</a>
      </div>

      <div className="nav-right">
        <div className="nav-dot" />
        <span className="nav-status">available for work</span>
      </div>
    </nav>
  );
}