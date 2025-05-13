import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <nav className="top-navbar">
      <div className="logo">BreakPoint</div>

      {isMobile ? (
        <>
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className="mobile-menu">
              <Link to="/">Home</Link>
              <Link to="/tcg">TCG Characters</Link>
              <Link to="/lore/section1">Lore</Link>
            </div>
          )}
        </>
      ) : (
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tcg">TCG Characters</Link>
          <Link to="/lore/section1">Lore</Link>
        </div>
      )}
    </nav>
  );
}
