import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  
  useEffect(() => {
    fetch('/data/characters.json')
      .then(res => res.json())
      .then(data =>{ 
        console.log("Loaded character data:", data);  // Add this line
        setCharacters(data.characters)});
  }, []);

  return (
  <div>
    

    <h1>BreakPoint Characters</h1>

    {/* 🟡 DEBUG CHARACTER CHECK */}
    {characters.length === 0 ? (
      <p style={{ color: 'yellow', textAlign: 'center' }}>⚠ No characters found</p>
    ) : (
      <div className="character-grid">
      {characters.map(char => (
        <div className="character-wrapper" key={char.name}>
          <Link to={`/character/${char.name}`}>
            <CharacterCard name={char.name} image={char.imageName} />
          </Link>
        </div>
      ))}
    </div>
    )}
  </div>
);

}
