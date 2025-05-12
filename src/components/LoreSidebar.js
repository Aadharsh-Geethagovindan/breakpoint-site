import { Link, useParams } from 'react-router-dom';
import './LoreSidebar.css';
import { useState, useEffect } from 'react';
import sections from '../data/sections';


export default function LoreSidebar({ subheadings,activeHeading }) {
  const { sectionId } = useParams();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Collapse by default on mobile only
    setCollapsed(isMobile);
  }, [isMobile, sectionId]);

  return (
    <div className="lore-sidebar">
  <div className="sidebar-header" onClick={() => setCollapsed(!collapsed)}>
    {isMobile && (
      <span className="toggle-arrow">
        {collapsed ? '▶' : '▼'} Lore Navigation
      </span>
    )}
  </div>

  {!collapsed && (
    <div className="sidebar-sections">
      {sections.map(section => (
        <div key={section.id}>
          <Link
            to={`/lore/${section.id}`}
            className={sectionId === section.id ? 'active' : ''}
          >
            {section.title}
          </Link>

          {section.id === sectionId && subheadings.length > 0 && (
            <div style={{ marginLeft: '15px' }}>
              {subheadings.map(h => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className={`subheading-link ${activeHeading === h.id ? 'active-sub' : ''}`}
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById(h.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      window.history.replaceState(null, '', `#${h.id}`);
                    }
                  }}
                >
                  {h.text}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>
  );
}


  