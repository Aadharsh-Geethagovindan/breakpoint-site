export default function CharacterCard({ name, image }) {
    return (
      <div style={{ margin: 10, textAlign: 'center' }}>
        <img src={`/Images/${image}.png`} alt={name} width="150" style={{ height: '220px', objectFit: 'cover' }}/>
        <p>{name}</p>
      </div>
    );
  }
  