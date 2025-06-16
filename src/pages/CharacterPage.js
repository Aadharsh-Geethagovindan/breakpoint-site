import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterDetail from '../components/CharacterDetail';

export default function CharacterPage() {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const [nextCharacter, setNextCharacter] = useState(null);

  useEffect(() => {
    fetch('/data/characters.json')
      .then(res => res.json())
      .then(data => {
        const found = data.characters.find(c => c.name === name);
        setCharacter(found);

        // ✅ Add this block here
      const allNames = data.characters.map(c => c.name);
      const currentIndex = allNames.indexOf(name);
      const nextName = allNames[(currentIndex + 1) % allNames.length];
      setNextCharacter(nextName);

        // Apply rarity class to body
        document.body.classList.remove('rarity-C', 'rarity-UC', 'rarity-R', 'rarity-UR', 'rarity-L');
        document.body.classList.add(`rarity-${found.rarity}`);
      });

      return () => {
        // Clean up on unmount
        document.body.classList.remove('rarity-C', 'rarity-UC', 'rarity-R', 'rarity-UR', 'rarity-L');
      };
  }, [name]);

  if (!character) return <p>Loading...</p>;

  return <CharacterDetail character={character} nextCharacter = {nextCharacter} />;
}