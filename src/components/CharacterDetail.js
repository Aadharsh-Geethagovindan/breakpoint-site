export default function CharacterDetail({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <img src={`/Images/${character.imageName}.png`} alt={character.name} width="200" />
      <p><strong>Lore:</strong> {character.lore}</p>
      <h3>Stats</h3>
      <ul>
        <li>HP: {character.hp}</li>
        <li>Speed: {character.speed}</li>
        <li>Rarity: {character.rarity}</li>
      </ul>
      <h3>Moves</h3>
      <ul>
        {character.moves.map(move => (
          <li key={move.name}><strong>{move.name}</strong>: {move.description}</li>
        ))}
      </ul>
    </div>
  );
}
