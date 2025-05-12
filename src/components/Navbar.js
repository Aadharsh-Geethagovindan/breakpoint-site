import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // We'll create this next

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-title">BreakPoint</div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/lore" className={location.pathname === '/lore' ? 'active' : ''}>Lore</Link>
        <Link to="/characters" className={location.pathname === '/characters' ? 'active' : ''}>TCG Characters</Link>
      </div>
    </nav>
  );
}
