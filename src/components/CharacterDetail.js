import './CharacterDetail.css';
import { Link } from 'react-router-dom';
export default function CharacterDetail({ character, nextCharacter }) {
  return (
    <div className="character-detail-layout">
      {/* Left Side: Portrait + Stats */}
      <div className="character-profile-card">
      <img
        src={`/Images/${character.imageName}.png`}
        alt={character.name}
        className="character-image"
      />
  
        <div className="profile-text-content">
          <h2 className="character-name">{character.name}</h2>
          <p className="character-origin">BREAKPOINT</p>

          <div className="character-stats-box">
            <div className="stat-item">
              <span className="stat-label">HP</span>
              <span className="stat-value">{character.hp}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Speed</span>
              <span className="stat-value">{character.speed}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Rarity</span>
              <span className="stat-value">{character.rarity}</span>
            </div>
          </div>
        </div>
    </div>

      {/* Right Side: Moves and Lore vertically stacked */}
      <div className="character-info-column">
        <div className="character-card moves-box">
          <h3>Moves</h3>
          <ul>
            {character.moves.map(move => (
              <li key={move.name}>
                <strong>{move.name}</strong>: {move.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="character-card lore-box">
          <h3>Lore</h3>
          <p>{character.lore}</p>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="character-nav-buttons">
        <Link to="/characters" className="char-button">← Back to Characters</Link>
        {nextCharacter && (
          <Link to={`/character/${nextCharacter}`} className="char-button">Next: {nextCharacter} →</Link>
        )}
      </div>
    </div>
    
  );
}