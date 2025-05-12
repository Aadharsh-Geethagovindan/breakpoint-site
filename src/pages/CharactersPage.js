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
      <div className="character-grid">
        {characters.map(char => (
          <Link key={char.name} to={`/character/${char.name}`}>
            <CharacterCard name={char.name} image={char.imageName} />
          </Link>
        ))}
      </div>
    </div>
  );
}
