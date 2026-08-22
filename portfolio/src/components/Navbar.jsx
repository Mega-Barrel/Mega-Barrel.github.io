import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="section--page">
      <div className="navbar">
        <nav>
          <ul className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </ul>
        </nav>
      </div>
    </section>
  );
}