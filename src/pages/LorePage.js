import LoreSection from '../components/LoreSection';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import LoreSidebar from '../components/LoreSidebar';
import sections from '../data/sections';
import { Link } from 'react-router-dom';

export default function LorePage() {
  const { sectionId } = useParams();
  const [subheadings, setSubheadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState(null);
  const currentIndex = sections.findIndex(s => s.id === sectionId);
  const prev = sections[currentIndex - 1];
  const next = sections[currentIndex + 1];
  return (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: 1, padding: '20px' }}>
      <LoreSection
        sectionId={sectionId}
        onHeadingsExtracted={setSubheadings}
        setActiveHeading={setActiveHeading}
      />
      <div className="section-nav">
        {prev && (
          <Link to={`/lore/${prev.id}`} className="nav-button left">
            ◀ {prev.title.length > 30 ? prev.title.slice(0, 30) + '…' : prev.title}
          </Link>
        )}
        {next && (
          <Link to={`/lore/${next.id}`} className="nav-button right">
            {next.title.length > 30 ? next.title.slice(0, 30) + '…' : next.title} ▶
          </Link>
        )}
      </div>
    </div>

    <LoreSidebar
      activeSectionId={sectionId}
      subheadings={subheadings}
      activeHeading={activeHeading}
    />
  </div>
);
}